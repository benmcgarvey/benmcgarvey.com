---
title: Intro to Svelte - Tic Tac Toe
date: 2019-09-24T20:16:45+10:00
draft: true
---

This is a tutorial for the Svelte js framework inspired by the [React tic-tac-toe intro tutorial](https://reactjs.org/tutorial/tutorial.html). 

In this tutorial we're going to be building a small game to demonstrate some of Svelte's core features.

#### aside
- We'll follow the React version pretty closely so I'd recommend giving it a quick read if you aren't already familiar with it. As we go, I'll highlight some interesting ways Svelte handles situations compared to React. If you're not interested in this, you can just skip these parts.

- I'll also mention before we start, that I'm not an expert in Svelte or React. This is the largest project I've made in Svelte. I made this tutorial as a way to teach myself more about Svelte and hopefully provide something useful for other folks who want to learn about it too. Along the way I've elected to do things in ways that make sense to me within the framework but I'm sure there are better ways to do things. In fact, I'd be really keen to get feedback on the tutorial from anyone who reads this on how I went.

## What are we building?
We're going to build an interactive tic-tac-toe game with Svelte.

You can take a look at the final product here: [Final Result](https://svelte.dev/repl/fd5d45a774a54c85bb3db1199c07b42a?version=3.12.1). There is a bit going on in there but don't worry, we're going to build it up together, piece by piece.

One thing to note is the history you'll see buiding up to the side as you progress through the game. You can use this to travel backwards and forwards in time through the game. This is pretty neat and is mentioned as a key feature in the React version of this tutorial. Stay tuned to see how it's done with Svelte! :smile:

## Setup

This tutorial assumes you have some familiarity with HTML, CSS, and Javascript. Prior knowledge of Svelte and/or React isn't necessary but it will be more interesting if you're familiar with the basics of either.

We're following along with the React tutorial and they provide two ways to do it so we will too. You can get setup in two ways:

### Option 1: Write code in the browser

This is the easiest way to get started.

Open up the starter code [here](https://svelte.dev/repl/75f705a8650f4851bd2e172456d6dfcc?version=3) and you can skip right to the start! TODO - MAKE LINK TO HEADER

### Option 2: Write code in a local environment

This takes a teeny bit more setup, and is completely optional, but is really very straightforward.

1. Install [Node.js](https://nodejs.org) if you don't have it already
2. Open up the [starter code](https://svelte.dev/repl/75f705a8650f4851bd2e172456d6dfcc?version=3)
3. Download the code using the link in the top right corner
4. After unzipping the download, navigate to the project and install dependencies
```html
cd svelte-app
npm install
```
4. Run the app!
```bash
npm run dev
```
Your dev server should now be up and running - all changes will be immediately updated in the browser!

## Start