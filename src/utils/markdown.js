import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import PrismJS from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

// map lang to prism-language-attr
export const langs = {
	bash: 'bash',
	html: 'markup',
	svelte: 'markup',
	js: 'javascript',
	css: 'css'
};

const marked = require('marked');
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, language) {
	const highlighted = PrismJS.highlight(
		code,
		PrismJS.languages[langs[language]],
		language,
	);

	

	return `<pre class='test language-${langs[language]}'><code>${highlighted}</code></pre>`;
  },
  
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export const SLUG_PRESERVE_UNICODE = false;
export const SLUG_SEPARATOR = '_';

export const urlsafeSlugProcessor = (string, opts) => {
	const { separator = SLUG_SEPARATOR } = opts || {};

	return slugify(string, {
		customReplacements: [	// runs before any other transformations
			['$', 'DOLLAR'], // `$destroy` & co
			['-', 'DASH'], // conflicts with `separator`
		],
		separator,
		decamelize: false,
		lowercase: false
	})
	.replace(/DOLLAR/g, '$')
	.replace(/DASH/g, '-');
}

/* unicode-preserver processor */

const alphaNumRegex = /[a-zA-Z0-9]/;
const unicodeRegex = /\p{Letter}/u;
const isNonAlphaNumUnicode =
	string => !alphaNumRegex.test(string) && unicodeRegex.test(string);

export const unicodeSafeProcessor = (string, opts) => {
	const { separator = SLUG_SEPARATOR } = opts || {};

	return string.split('')
	.reduce((accum, char, index, array) => {
		const type = isNonAlphaNumUnicode(char) ? 'pass' : 'process';

		if (index === 0) {
			accum.current = {type, string: char};
		} else if (type === accum.current.type) {
			accum.current.string += char;
		} else {
			accum.chunks.push(accum.current);
			accum.current = {type, string: char}
		}

		if (index === array.length - 1) {
			accum.chunks.push(accum.current);
		}

		return accum;
	}, {chunks: [], current: {type: '', string: ''}})
	.chunks
	.reduce((accum, chunk) => {
		const processed = chunk.type === 'process'
			? urlsafeSlugProcessor(chunk.string)
			: chunk.string;

		processed.length > 0 && accum.push(processed);

		return accum;
	}, [])
	.join(separator);
}

/* session processor */

export const make_session_slug_processor = ({
	preserve_unicode = SLUG_PRESERVE_UNICODE,
	separator = SLUG_SEPARATOR
}) => {
	const processor = preserve_unicode ? unicodeSafeProcessor : urlsafeSlugProcessor;
	const seen = new Set();

	return string => {
		const slug = processor(string.toLowerCase(), { separator });

		if (seen.has(slug)) throw new Error(`Duplicate slug ${slug}`);
		seen.add(slug);

		return slug;
	}
}

export function extract_frontmatter(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}

export default function generate_posts() {
  const make_slug = make_session_slug_processor({
		separator: '_',
		preserve_unicode: false
  });
  
  return fs
		.readdirSync(`./src/content/`)
		.filter(file => file[0] !== '.' && path.extname(file) === '.md')
		.map(file => {
      const markdown = fs.readFileSync(`./src/content/${file}`, 'utf-8');
      const { content, metadata } = extract_frontmatter(markdown);
      const slug = make_slug(metadata.title);
      const html = marked(content)
      return {
				html: html.replace(/@@(\d+)/g, (m, id) => hashes[id] || m),
				metadata,
				slug,
				file,
      };
    })
}