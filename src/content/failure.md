---
title: Failure
date: 2019-09-05T18:38:00+10:00
draft: true
---

that promises not to gloss over failure or leave it unexamined. Failure is a part of life, a part of business, and (importantly to me) a part of software engineering. 

As an engineer recently leaving university and entering the workforce I'm constantly filled with a sense that everyone else in the industry has it all figured out and failure is reserved for lesser mortals. I can only vouch for my own experience but I can say that my peers at university often voiced similar feelings. I would also be confident in saying that 'imposter syndrome' is a not an uncommon feeling amongst software engineers. This doesn't feel right to me. My hypothesis for one contributing factor is that failure is often treated as something to be ashamed of. Something confined to private reflection (if it is reflected on at all).

I believe failure should be embraced and thoroughly celebrated. Failure indicates that something difficult was attempted. Someone went out of their comfort zone and tried something that didn't have a 100% chance of success. This takes courage. How we react to failure has significant repercussions for future success. Failure is a tremendous learning oportunity. Failure is a trove of data waiting to be unearthed and investigated. Without failure, there is no success.

To learn from failure we need to look at *why* we failed and be wholly objective and self-reflective. The reasons may be personal or difficult to accept but they are there nonetheless. Ignoring failure is a guarantee that it will reoccur. Investigation is not easy. There are red-herrings, there are compounding factors, there is always the ineffable human element, but there is always a lesson to be learned. Failure should not be hidden behind closed doors, and we should be skeptical of achievements presented as fait acompli. Nobody is perfect and everybody fails. The goal is to *fail, gracefully*. Failing gracefully means:

- understanding and accepting that failure is a fundamental step on the way to success,
- stepping back from a failure to see it objectively and holistically,
- documenting (mentally or concretely) contributing factors and all learnings,
- being open about failure


In this blog I will do as other bloggers do which is to write about my experiences, both as an engineer and as a person in the world. Whilst every post is not going to be *about* failure in a specific sense, I will do my best to find it where I can, examine it and give it the respect it deserves.

*TO WRITE: This blog is already a 'failure' - hugo instead of own site etc* 
In some way, this blog itself is already a 'failure'. When I decided to start writing a blog I also resolved to build my own modern frontend with a fast lightweight backend to serve up the blog posts. I had a wishlist of things I wanted the website to be and intended to use it as a way to learn about various technologies I'm interested in. My technical requirements for my first site were something along these lines:

(note, these goals are mostly vanity based and are very personal to me and my abilities)

- The frontend should be small in size and require minimal client side compute (if any)
    - obviously for a small personal blog this is almost inevitable - I would probably need to try fairly hard to make something so simple remarkably bloated or slow
    - nevertheless I wanted my site to serve itself extremely quickly - I guess just because its fun to see how fast I can go
    - I intended to use svelte.js here
        - it compiles to lightweight html, css, and js; and leans heavily on some paradigms I already know from React with a lower overhead
- The blogs should be accessed through a graphql api
    - I like graphql
    - I also use graphql at work and I wanted to take an opportunity to try it out on a different language/framework
- I wanted to make my own server using a language with modern features and a well maintained http library that has a reputation for 'going fast', 'out of the box'
    - Think Golang's `net/http`, Rust's `insertlib`, Ember?, .NET's ...
    - I am not familiar with these languages apart from dabbling with some fun features in REPL.it
    - It would be an opportunity to learn some new language, with new paradigms
    - It also helps with goal 1 if I can use it's advertised features well
    - Support from lambda is also a +1 here
- I wanted to use AWS services to host the site and persistence layer
    - S3 for the static site either served directly or using a reverse proxy server
    - EC2 or Amazon Lambda Functions for the graphql (and possibly a reverse proxy) server
    - S3 or AWS Document store for persistence
- The site should be easily maintainable with a straightforward CI pipeline

Now, why is this blog (currently) in a failed state? Well because I didn't actually reach any of the (admittedly arbitrarily extraneous) goals listed above (yet). As the time of writing, this blog is based on an off-the-shelf hugo template and hosted using surge.sh. I'm disappointed. I want my blog to be a shiny wonderful intermix of technology that I can speak about, explore, and tinker with. A personal blog is the programmer's garden shed. Somewhat disappointingly, right now, it's a set of libraries made and maintained by some very smart people who I really appreciate. (I mean, it will always be a set of libraries to some degree but hopefully less so over time...)

But. It's a blog. It's still the thing I wanted! I finally have a home online. Somewhere I can voice my opinion, share neat things I find, and importantly tinker with.

Its not much right now, but it's something. 

Everything has to start somewhere, and taking the first step is a necessary requirement to get to your final destination. I could have (and probably will) spent months picking out the optimal set of technologies, or tinkering with a toy server, or fussing over styles, before I finally deployed something. Ultimately, though, what I want is a blog, and a blog is what you are looking at :celebrate:. From here, I don't have to wait to start writing and can even document my journey to build my own site, warts and all.

I look forward to what this blog eventually becomes and will come back to this post to provide updates on progress. Ideally, I'll keep it in its current state and let the rest of the site evolve around it but I can't make any promises.

Outrageously out of place quote "We stand on the shoulders of giants"