---
title: Hackathon Essentials
date: 2020-02-26T09:00:00-05:00
draft: false
metaDescription: Learn which programming tools can help you win your next hackathon or get your next project off the ground. A shortlist of essential hackathon tools along with tips and tricks for getting going.
---

This is a short list of some tools I've found useful for getting an MVP of a web application up and running as quickly as possible. I've tried to only consider tools which strike a balance between usefulness and usability - use-ful-ability? These should all help translate ideas into reality without getting in the way. 

Each section, with the exception of the first ([Web app templates](/blog/hackathon-essentials/#web-app-templates)), contains two tools. The first should be the most simple and straightforward solution albeit with limitations. The second tool will be the more advanced and feature rich option.

## Contents

[Web app templates](/blog/hackathon-essentials/#web-app-templates)</br>
[Hosting](/blog/hackathon-essentials/#hosting)</br>
[Mocking](/blog/hackathon-essentials/#mocking)</br>
[Database](/blog/hackathon-essentials/#database)</br>
[File sharing](/blog/hackathon-essentials/#file-sharing)</br>
[Assets](/blog/hackathon-essentials/#assets)</br>
[Information](/blog/hackathon-essentials/#information)</br>

</br>
</br>

## Web app templates

Making a new website from scratch in 2020 is awesome. There are many excellent frameworks and libraries to choose from - building complex user experiences has never been easier. I've gathered some basic, opinionated templates for some common web frameworks. For each framework, I've presented the first-class way to start a new project, along with a lighter weight version. Booting up any of these will give you a barebones web application with everything you need to start building.

### React - [reactjs.org](https://reactjs.org/)

React is currently the most popular frontend framework in the market. You'll find lots of tutorials and guides so building a react app from scratch should be well supported.

- [Create React App](https://create-react-app.dev/)

  - The official way to start a new React project. Built and maintained by the React team, Create React App will build you a template project with all the bells and whistles you need to start a modern web application.

- [Nano React App](https://github.com/adrianmcli/nano-react-app)

  - If you don't need things like testing, or service workers, but still want to use React this template is for you. It's basically the same as Create React App but with everything you don't need stripped out. Use this if you just need the bare minimum.

### Vue - [vuejs.org](https://vuejs.org/)

Vue is the second most popular front end framework in 2020. It has excellent documentation and lots of support from its community. Building your MVP with Vue shouldn't be a problem.

- [Nuxt.js](https://nuxtjs.org/guide/)
  - Nuxt.js is to Vue what Create React App is to React. It will give you an beefy architecture for building a modern web app with Vue.js. All the bells and whistle are included here.

- [Create Vue App](https://github.com/vue-land/create-vue-app)

  - Create Vue App is a non-official package for creating a more lightweight Vue app than you get with something like Nuxt.js. It's the Vue equivalent to Nano React App. Ignore the confusing name.

### Svelte - [svelte.dev](https://svelte.dev/)

Svelte is a relative newcomer to the frontend scene but is picking up support quickly. Documentation is lighter on the ground due to its relative newness but its simple nature makes it easy to pick up and build something quickly.

- [Sapper](https://sapper.svelte.dev/)

  - Sapper is "Create React App" for Svelte. It's the official wrapper for Svelte and will provide you with an opinionated, dev ready web app template ready to use. Similar to Create React App it supports things like testing, service workers and even PWA out of the box.

- [Skirmisher](https://github.com/benmcgarvey/skirmisher)

  - Skirmisher is a minimal boilerplate for building lightweight web projects. Skirmisher doesn't do a lot and mostly gets out of your way. The result is an extremely quick and lightweight web app. (\*disclaimer\* I adapted this myself from the already excellent plain svelte [template](https://github.com/sveltejs/template))

## Hosting

So, you've built your website and its working great on your local machine. How do you share it with your colleagues/teammates/friends? Here are two very simple ways to get a public domain for your project.

### ngrok - [ngrok.com](https://ngrok.com/)

"Secure introspectable tunnels to localhost" - AKA, use your machine as the server! ngrok takes your `localhost:3000` address where your app is hosted locally exposes it on a public URL. No provisioning of services on AWS, no pushing to a remote server - just `ngrok https <YOUR_LOCAL_PORT>` and done.

### Github Pages - [pages.github.com](https://pages.github.com/)

Now, the trouble with ngrok is that it will only live as long as your computer is forwarding the port and at some point you might want to turn off your computer. Github pages is a totally free static site server which you can use to host your new web app. All of the frameworks mentioned earlier have an option to build a static version of the site. Simply take the generated files and pop them in the repository. Set up is a breeze and new deployments are as simple as pushing to master - github will give you a `.github.io` url, handle routing, 404s and even give you HTTPS for free.

## Mocking

Alright, the website is up and running, we've got a static site with a URL, what's next? We want to be able to serve dynamic content. What's the fun in just making a static site? For that, we need an API. But wait, we don't have an API! Maybe one part of your team is working on the API and the other part wants to get on with the UI. Here is where mocking comes in. Sometimes you just have to fake it until you make it.

### Mocky - [mocky.io](https://www.mocky.io/)

Mocky allows you to generate a unique url from which you can return any response you like. Don't wait for a database to get set up, just decide what the data should look like and mock it out. Mocky will return whatever response you tell it to regardless of the HTTP method (e.g. POST, GET, DELETE etc).

### Mockable - [mockable.io](https://www.mockable.io/)

Mockable gives you a single root url and allows you to mock out particular endpoints and HTTP methods. This is in contrast to Mocky, where you get a new URL for every response you mock, meaning you'll need to hardcode these into your app. Swapping out mockable.io for your real API is as simple as swapping out the root URL.

## Database

You've got a web app up and you've mocked out as much as you can but you're still missing a way to store information between sessions. Luckily there are loads of great solutions to hook up a database really quickly and start storing and utilising persistent data. No need to mess around with provisioning databases on AWS, these solutions should have you up and running in only a few clicks.

### EasyDb - [easydb.io](https://easydb.io/)

EasyDB is exactly what it sounds like - this is the absolute lowest entry point for persisting your data in an easy to use way. EasyDB gives you access to a free NoSQL DB for 24 hours with a unique key you can use to access it (if you sign up you'll get it for a whole month after that it'll cost you \$4.99/month to keep it running). They've got starter code in Javascript, Python, Ruby, and Bash so you can get started straight away.

### Firebase Firestore - [firebase.google.com](https://firebase.google.com/products/firestore/)

Firebase is the big big brother of EasyDB. Its almost as easy to set up but comes with a lot more features out of the box. It comes with SDKs for Mobile and Web which provide things like client side caching, realtime data syncing, and authentication. You can set up cloud functions which contain your business logic, store static content like images, and even host your application. It also allows you more fine grained control over your database from their console so you can update and edit your schema after initialisation.

## File sharing

Sharing files between your team will be essential. There are great solutions for text and csv data like google docs and google sheets. But what about sharing your code or bigger assets like images? These tools should help you manage some of these problems.

### Github - [github.com](https://github.com/)

Github is a cloud platform for working with git repositories. Git repositories can hold anything but you'll likely be using them to manage your app's source code. There are other providers out there but giGithubthub is the most ubiquitous. You can make an account for free and host unlimited public and private repositories. You'll be limited to 3 collaborators on a private repository though, so if you're a team of more than 3, you'll have to make your project public.

### Firefox Send - [send.firefox.com](https://send.firefox.com/)

Firefox Send lets you send files around securely without each party needing any accounts or special app. After uploading the files your sending, you get a link which you can share with anyone who needs it. You can set an expiry and even password protect the link so only people you want to, can get at the files.

## Assets

Make your landing page more exciting with professional visual assets!

### Unsplash - [unsplash.com](https://unsplash.com)

Unsplash is a repository of completely free, high quality digital images. Usually, these would be very expensive or if you just use google image search you'll find annoying watermarks on lots of great images. All images on Unsplash are tagged really well so you can easily search and find the images you need. Final note - although you are not obligated to, they do encourage you to credit the photographer if you do end up using one of their photos.

### Unsplash API - [unsplash.com/developers](https://unsplash.com/developers)

Don't want to download and store the images you need on your server/storage solution? Want to generate photos dynamically? Unsplash has your back. They have an excellent API, which they proudly declare they run unsplash.com on! If you have more nuanced needs than simply embedding a pretty hero image on your landing page, simply register a developer account and get going. You can search, list, and directly access photos and more. They even have SDKs for mobile platforms and popular languages.

## Information

Looking for more information? Got a difficult to pin down bug? These resources have extra information that should help your workflow especially when building something on the web.

### MDN Web Docs - [developer.mozilla.org](https://developer.mozilla.org/en-US/)

From their page description: "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps." Couldn't be clearer! MDN Web Docs is an invaluable resource for anyone working on the web. You'll likely see them come up organically in search results for common topics but going straight to them is never going to be a waste of time. They have clear documentation with easy to understand examples for nearly everything you can do in a web browser. They can even (teach you web development)[https://developer.mozilla.org/en-US/docs/Learn]!


### DevDocs - [devdocs.io](https://devdocs.io/)

Working with languages outside of HTML and JS? Devdocs pulls official language documentation from across the web into a single, easily accessible source. You can even use it offline! With an excellent fuzzy search and useful keyboard shortcuts, you'll never want to visit official documentation again.

</br>

## Wrapping up

That's it folks. Hope these resources help you with your MVP, or hackathon, or first website, or whatever it is you're building.

Coming up next, I'll be building a small web app using all of these tools to show you how easy it is to get up and running with your next project.
