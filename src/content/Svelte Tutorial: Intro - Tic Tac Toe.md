---
title: Intro to Svelte - Tic Tac Toe
date: 2019-12-08T12:00:00+10:00
draft: false
metaDescription: Learn Svelte with this Introduction Tutorial. Based on the Intro React Tutorial. Make your first Svelte App and learn how to make an interactive tic-tac-toe game.
---

This is a tutorial for the Svelte javascript framework inspired by the Intro to React [tutorial](https://reactjs.org/tutorial/tutorial.html).

We'll follow the React version pretty tightly as far as milestones go but our implementation will start to diverge towards the middle.

I made this tutorial as a way to teach myself more about Svelte and hopefully provide something useful for other folks who want to learn about it too.

## So what are we building?

Just like in the React version, we're going to be building an interactive tic-tac-toe game to demonstrate some of Svelte's core features such as creating components, and managing state.

You can take a look at the fiinished project here: [Final Result](https://svelte.dev/repl/fd5d45a774a54c85bb3db1199c07b42a?version=3.12.1). There is a bit going on in there but don't worry, we're going to build it up together, piece by piece.

The interesting thing to note about this game is the history you'll see buiding up to the side as you progress through the game. You can use this to travel backwards and forwards in time through the game. Stay tuned to see how it's done with Svelte!

## Setup

This tutorial assumes you have some familiarity with HTML, CSS, and Javascript. Prior knowledge of Svelte and/or React isn't necessary but it will be more interesting if you're familiar with the basics of either.

We're following along with the React tutorial and they provide two ways to do it so we will too. You can get setup in two ways:

### Option 1: Write code in the browser

This is the easiest way to get started.

Open up the starter code [here](https://svelte.dev/repl/75f705a8650f4851bd2e172456d6dfcc?version=3.15.0) and you can skip right to the [start](blog/intro-to-svelte-tic-tac-toe/#overview)!

### Option 2: Write code in a local environment

This takes a little more setup, and is completely optional, but should be straightforward if you're comfortable around a command line.

1. Install [Node.js](https://nodejs.org) if you don't have it already
2. Open up the [starter code](https://svelte.dev/repl/75f705a8650f4851bd2e172456d6dfcc?version=3) and download it using the link in the top right corner
3. After unzipping the download, navigate to the project and install the dependencies

```bash
npm install
```

4. Run the app!

```bash
npm run dev
```

Your dev server should now be up and running - all changes to your files will be immediately updated in the browser.

You can now follow along by making changes in your preferred text editor.

N.B. in this tutorial, I'll often omit some parts files in code snippets if that section is not changing. If you need to delete code, I'll let you know. Finished code for each section will be provided so you can always check what's there if you get lost.

Let's get started!

## Overview

### What is Svelte?

Svelte is a javascript component framework for building front-end web applications. It allows you to easily build complex application out of isolated components. What makes it different to other frameworks like React or Vue? Whereas other frameworks ship their entire libraries to the client, and translate your code on the fly, Svelte compiles at build time into a lightweight, fast, imperative, js bundle.

An application built with Svelte is made up of isolated components that are found in `.svelte` files. Each file looks a lot like regular html and can contain up to three sections: `script`, `style` and/or regular `html`. From the Svelte [docs](https://svelte.dev/docs#Component_format):

```html
<script>
  /* logic goes here */
</script>

<style>
  /* styles go here */
</style>

<!-- markup (zero or more items) goes here -->
```

Just like in the React tutorial, lets take a look at what a simple shopping list component might look like in svelte, to get a feel for what a _real_ component looks like.

```html
<!-- Filename: `ShoppingList.svelte` -->

<script>
  export let name;
</script>

<div className="shopping-list">
  <h1>Shopping List for {name}</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
    <li>Oculus</li>
  </ul>
</div>
```

Any 'props' that are declared and exposed in the `<script />` tag are available to the markdown below, by wrapping them in curly brackets `{}`.

Using a component is done in the same way as React, by importing it and using it like a HTML element.

```html
<script>
  import ShoppingList from './';
</script>

<ShoppingList name="Mark" />
```

When a component is created, the props can be passed down by setting them in the tags, similar to how you would set an attribute. Props can be any js type, so you can pass in a whole object containing all props or break them down as you need. Just remember to handle them correctly in the child.

Svelte also has a handy shortcut which React doesn't currently have. If the name of the prop is the same as the variable you're using you can omit part of the declaration.

```html
<script>
  import ShoppingList from './';

  const name = 'Mark';
</script>

<ShoppingList { name } />
<!-- identical to <ShoppingList name="Mark" /> -->
```

Handy!

The shopping list example above only contains standard HTML elements however it can be composed of other Svelte components allowing us to build up complex UI from simple components with single responsibilities.

This example also doesn't contain any styling. In Svelte, each component is responsible for styling itself. At compile time, elements targeted by styles are given a unique hash corresponding to their styles. This is how Svelte is able to surgically target DOM elements and avoid styles unintentinally leaking into other components.

### Inspecting the Starter Code

Lets take a quick walkthrough of what we're going to be starting with.

If you're following along in the browser, simply open up the starter [code](https://svelte.dev/repl/75f705a8650f4851bd2e172456d6dfcc?version=3.15.0). If you're working locally, open up the `src` directory and we'll take a quick tour.

`main.js` contains the renderer function for our app. This simply imports a top level component and inserts it into the DOM at the target we give it. In this case we're targeting the body. You can find the base HTML file at `public/index.html`.

`App.svelte` is the container for our game. It imports the `Board` from `Board.svelte` and renders it down there on line 22.

The Board component found in `Board.svelte` renders 9 `Square` components to create our board, and also displays the status.

Finally, `Square.svelte` renders a single button.

### Passing Data Through Props

Lets try passing data down from the board to our Square components.

Update the script and markdown sections in `Square.svelte` so that the component accepts a prop corresponding to its board position and displays it inside the button

```html
<script>
  export let value = '';
</script>

<!-- styles... -->

<button>{ value }</button>
```

Note that we're setting a default for `value`, this will be the fallback if the prop is not passed to the component.

Next we need to update our Board to pass in the corresponding indexes.

```html
<div>
  <div class="status">{status}</div>
  <div class="board-row">
    <Square value="0" />
    <Square value="1" />
    <Square value="2" />
  </div>
  <div class="board-row">
    <Square value="3" />
    <Square value="4" />
    <Square value="5" />
  </div>
  <div class="board-row">
    <Square value="6" />
    <Square value="7" />
    <Square value="8" />
  </div>
</div>
```

You should now see a number in each square, from 0 to 8.

[View the full code at this point](https://svelte.dev/repl/38015384c16b451eac27887cdf9dc634?version=3.15.0)

Hooray! You've successfully learned how to pass props down from parent to child in Svelte. This is the basis for building complex applications in Svelte, so well done!

### Making an Interactive Component

Numbers in the squares aren't very useful, we'd like to put "X"s and "O"s in there when they're clicked. To get us started, let's fill the components with an "X" when we click them.

As a first step lets take a quick look at how svelte handles [events](https://svelte.dev/docs#on_element_event). Svelte uses `on:eventname` syntax in elements to listen for DOM events. The handler should be a _function_ which you declare. Handlers can be declared inline with no penalty so lets test it out!

Update the markdown in `Square.svelte` to the following:

```html
<button on:click="{ () => alert('click') }">{ value }</button>
```

When you click the button you should see a browser alert pop up. Nice!

Similar to React, forgetting `() =>` and simply writing `on:click={ alert('click') }` would cause the function to be called everytime the component renders. This is not good, so make sure you always remember the `() =>`.

N.B. the quotation marks around the `on:click` function are optional. They're included here just to help out the syntax highlighter.

This is fun but isn't very useful for a tic-tac-toe game, let's get back on track.

We want the square to "remember" it was clicked and render an "X" for us. To remember things, Svelte components use 'stores'. These are very similar to 'state' in React. They represent an immutable state which can be subscribed to by the component. Changes to the store are reflected immediately by a re-render of the component.

To add 'state' to our `Square` component. Make the following changes to the script and markdown.

```html
<script>
  import { writable } from 'svelte/store';

  const store = writable('');

  let value;

  const unsubscribe = store.subscribe(val => {
    value = val;
  });
</script>

<button on:click="{ () => store.set('X') }">{ value }</button>
```

Woah! What did we just do? Let's break it down.

```js
import { writable } from 'svelte/store';
```

Here we import a writable (think 'editable') store. The store is an object with three methods: subscribe, set, and update.

Next up we create our store object and set an empty string as the initial state.

```js
const store = writable('');
```

To make our value 'reactive' we call the subscribe function on our store. Whenever the store now changes, the function we pass in to the subscribe function will run. In this case, we'll update our value so that it stays in sync with the store's state but you can do whatever you like here. Note that the subscribe function returns an unsubscribe function which can be used to stop listening to changes. We won't be using this in this tutorial so this can be ignored for now.

```js
let value;
const unsubscribe = store.subscribe(state => {
  value = state;
});
```

Finally, in our button we call the `store.set()` function when the button gets clicked. This will set the state for us and since our `value` variable is subscribed to the store, it will automatically update and display an "X"! Try it out for yourself!

```html
<button on:click="{ () => store.set('X') }">{ value }</button>
```

Now, since this is such a common pattern, the lovely Svelte folks have given us a shorthand to automatically subscribe to a store. All you have to do is add a `$` to the variable inside your component. The below code is equivalent to the above.

```html
<script>
  import { writable } from 'svelte/store';
  const value = writable('');
</script>

<button on:click="{ () => value.set('X') }">{ $value }</button>
```

If you're feeling really adventurous, you can replace `value.set('X')` with `$value = 'X'`. As long as the store is writable, assignment to a `$`-prefixed variable will result in a call to the store's set function. Spicy!

[View the full code at this point](https://svelte.dev/repl/551bde8698754230892984e31c3dbb4f?version=3.15.0)

## Completing the Game

To get to a working game, what else do we need?

We need to a way to alternate between players, and a way to determine when we have a winner. We have all the ingredients we need to put it together, so let's get to it!

### Lifting State Up

In the current set up, each square tracks its own state and collectively they represent the state of the game. This makes checking for overall state tricky. A better approach would be for board state to be kept elsewhere, and just tell the `Square` components what to display.

Let's try and do this in the same way React would do this. The 'React' way to do things is to keep the board state on the `Board` component and pass in an `onClick` function to the `Square` which, when called, will update the state relating to it's index on the board.

What would that look like in Svelte?

First up, lets update our `Square` component so it can take the props we need.

```html
<script>
  export let value;
  export let onClick;
</script>

<button on:click="{ onClick }">{ value }</button>
```

The `Square` now takes in the value it should display, and the function to call when it gets clicked. After updating this your board is probably displaying numbers 0 to 9, and the compiler is complaining that `"<Square> was created without expected prop 'onClick'"`. We'll fix this now.

We need to:

- set up a store in `Board`
- define a function to update the store when a `Square` is clicked
- pass this function and board values down to the `Square` components

Setting up the store is easy - we know how to do this

```html
<script>
  import Square from './Square.svelte';
  import { writable } from 'svelte/store';

  const board = writable(Array(9).fill(''));

  const status = 'Next player: X';
</script>
```

Next we need a function to update the store. Since stores are immutable we need to pass the update function a function which will return a new state. In this example, we use the handy `Object.assign` function to create a new array object, copy in the existing variables and then set the index we're interested in to "X".

Add this to the script section in `Board`.

```js
const handleClick = index =>
  board.update(squares => Object.assign([], squares, { [index]: 'X' }));
```

Lastly, we need to update our Squares so that they take in our new state and click handler.

```html
<div>
  <div class="status">{status}</div>
  <div class="board-row">
    <Square onClick="{ () => handleClick(0) }" value="{ $board[0] }" />
    <Square onClick="{ () => handleClick(1) }" value="{ $board[1] }" />
    <Square onClick="{ () => handleClick(2) }" value="{ $board[2] }" />
  </div>
  <div class="board-row">
    <Square onClick="{ () => handleClick(3) }" value="{ $board[3] }" />
    <Square onClick="{ () => handleClick(4) }" value="{ $board[4] }" />
    <Square onClick="{ () => handleClick(5) }" value="{ $board[5] }" />
  </div>
  <div class="board-row">
    <Square onClick="{ () => handleClick(6) }" value="{ $board[6] }" />
    <Square onClick="{ () => handleClick(7) }" value="{ $board[7] }" />
    <Square onClick="{ () => handleClick(8) }" value="{ $board[8] }" />
  </div>
</div>
```

Now each Square takes in a function and a board position relating to it's position on the board. If you click on any of the squares, they should now update exactly as they did before.

[View the full code at this point](https://svelte.dev/repl/da7de61cb0434807881bfedcf746a56e?version=3.15.0)

### Custom Stores

Great right? Well, there is a little repetition here. We need to add the board index value _twice_ in the Square props. Not a huge problem right here but imagine if we accidentally passed mismatching integers to the arguments? Not good, we'd rather not repeat ourselves.

In React we could clean up by declaring a `renderSquare` function which returns a component for us. Just pass in the index and it does the rest for us. Like this:

```jsx
  renderSquare(index) {
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
      />
    );
  }
```

Nifty.

Unfortunately, Svelte doesn't support render functions and we have to find other ways to streamline our code.

What if we could move all our game state out of our components and into a specialised, always in sync store, accessible from anywhere?

We've seen a store before. Back when we made out button interactive. In that example we only accessed the store from one component and made very minimal changes.

We can do more. Stores in Svelte quite powerful objects that provide an easy way to manage state between components. We can actually import the same store in multiple places and they'll all subscribe to the same global store object. This means they'll all get updates immediately when something changes, and if necessary, can modify the state when needed!

We can use them to easily decouple our components from our data. In our game, we can set up a custom store representing our game state and add some basic operations to assist us.

To get us going, we need to create a new file in our `src` directory to contain our custom store. You can name it whatever you like but I'm going to refer to it as `stores.js`. This will contain our custom store.

Insert the following into the store

```js
import { writable } from 'svelte/store';

const defaultStore = {
  board: Array(9).fill('')
};

function createStore() {
  const { subscribe, set, update } = writable(defaultStore);

  return {
    subscribe,
    move: index =>
      update(store => {
        let newBoard = store.board.slice();
        newBoard[index] = 'X';
        return Object.assign({}, store, { board: newBoard });
      })
  };
}

export const store = createStore();
```

Here we have an implementation of a small custom store. We are exporting an object with two methods: `subscribe`, and `move`. We could just export the update function directly but then the calling site would need to worry about how to update the state. This way, the subscribee just has to tell the store which cell should be updated.

Note that we're now storing an object _containing_ our board state instead of the board state directly. Check out `defaultStore`. This approach allows us to easily add other entries to our state in future.

There are a number of ways to use this new store and it can be imported wherever it is useful. In building this tutorial I played around with a few approaches and landed on an implementation where the `Board` passes the `Square` it's index in the board and the `Square` _looks itself up_ from the store.

To get started, import the store into `Square`

```html
<script>
  import { store } from './stores.js';

  export let index;
</script>
```

Now the markdown can access our custom store and it's methods just like we did before. Update the markdown to call our move function on click and look itself up from the board to find it's display value.

```html
<button on:click="{ () => store.move(index) }">{ $store.board[index] }</button>
```

All thats left is to pass the index down to the `Squares`. Update your `Board` to look like this:

```html
<script>
  import Square from './Square.svelte';
  const status = 'Next player: X';
</script>

<div>
  <div class="status">{status}</div>
  <div class="board-row">
    <Square index="0" />
    <Square index="1" />
    <Square index="2" />
  </div>
  <div class="board-row">
    <Square index="3" />
    <Square index="4" />
    <Square index="5" />
  </div>
  <div class="board-row">
    <Square index="6" />
    <Square index="7" />
    <Square index="8" />
  </div>
</div>
```

And we're done! We get the exact same behaviour but now all our state management is contained in a single location, and other observers will easily be able to subscribe and watch the state as it changes. This will come in handy when we need to determine a winner. It might also be handy if you wanted to change something about the UX on different turns, or dispatch an event when certain states occur.

### Taking turns

Our game is missing a major feature. We can't place down "O"s!

To fix this, we need to keep track of who's turn it is. We can do this in our store.

We'll add a new boolean entry `xIsNext` to our store and update it each time a move is made. We'll alternate between putting down an "X" or an "O" depending on this boolean. Add the lines marked with `<--` to your store.

```js
import { writable } from 'svelte/store';

const defaultStore = {
  board: Array(9).fill(''),
  xIsNext: true // <--
};

function createStore() {
  const { subscribe, set, update } = writable(defaultStore);

  return {
    subscribe,
    move: index =>
      update(store => {
        let newBoard = store.board.slice();
        newBoard[index] = store.xIsNext ? 'X' : 'O'; // <--
        return Object.assign({}, store, {
          board: newBoard,
          xIsNext: !store.xIsNext // <--
        });
      })
  };
}

export const store = createStore();
```

Your game should now be showing "X"s and "O"s alternately. Awesome!

Now let's update the status in so it shows the right player. We'll use the `$:` shorthand to let the Svelte compiler know that this variable is 'reactive' and should be updated each time the value it depends on changes. In this case, it will update any time `store.xIsNext` updates. We'll also prefix this with a `$` so that Svelte will automatically subscribe to the store for us.

```html
<script>
  import { store } from './stores.js';

  $: status = `Next player: ${$store.xIsNext ? 'X' : 'O'}`;
  // ...
</script>

<div class="status">{ status }</div>
<!-- ... -->
```

[View the full code at this point](https://svelte.dev/repl/a53e3e06070942a4b51e09a89c33d631?version=3.15.0)

### Declaring a Winner

We're nearly there! All we need now is to determine when we have a winner and end the game.

Add this helper function to `stores.js`.

```js
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

This is lifted line for line from the React version and like their version, will check an array of 9 squares for a winner and return "X", "O", or null as appropriate.

We now need to check for a winner each time a move is made. We can do this in the `Board` by subscribing to the store. When the store updates (i.e. when a move is made), the function will trigger.

If a player has won, we'll display `Winner: X` or `Winner: O`.

```html
<script>
  import { store, calculateWinner } from './stores.js';
  import Square from './Square.svelte';

  let status;
  let winner;

  store.subscribe(store => {
    winner = calculateWinner(store.board);
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
    }
  });
</script>
```

Finally, we need to change the store's `move` function to return early if a winner has been found, to prevent any further moves being made.

```js
move: index =>
  update(store => {
    if (calculateWinner(store.board) || store.board[index]) {
      return store;
    }
    let newBoard = store.board.slice();
    newBoard[index] = store.xIsNext ? 'X' : 'O';
    return Object.assign({}, store, {
      board: newBoard,
      xIsNext: !store.xIsNext
    });
  });
```

[View the full code at this point](https://svelte.dev/repl/3b0801a127724e8db131de35893fc6f3?version=3.15.0)

Congratulations, you've just learned the basics of Svelte! And you've got a cool game to show your friends. Everyone is a winner.

## Adding Time Travel

As an additional exercise we want to make it possible to go forward and back in time through the game history.

### Storing a History of Moves

In order to move through our history, we need to store all the states we've been through. Our history should look something like this

```js
history = [
  // Before first move
  {
    board: ['', '', '', '', '', '', '', '', '']
  },
  // After first move
  {
    board: ['', '', '', '', 'X', '', '', '', '']
  },
  // After second move
  {
    board: ['', '', '', '', 'X', '', '', '', 'O']
  }
  // ...
];
```

As an array, we can easily move through the history by simply setting the most current board to a particular index in the list. Without time travel, the most recent board is simply the last in the list.

Update `defaultBoard` to this

```js
const defaultBoard = {
  history: [{
    board: Array(9).fill('')
  }]
  xIsNext: true
}
```

This will break our game because the store expects a one dimensional board not a history. We need to update the store so that it correctly tracks our history.

```js
function createStore() {
  const { subscribe, set, update } = writable(defaultBoard);

  return {
    subscribe,
    move: index =>
      update(store => {
        const current = store.history[store.history.length - 1];
        if (calculateWinner(current.board) || current.board[index]) {
          return store;
        }
        let newBoard = current.board.slice();
        newBoard[index] = store.xIsNext ? 'X' : 'O';
        return Object.assign({}, store, {
          history: store.history.concat([
            {
              board: newBoard
            }
          ]),
          xIsNext: !store.xIsNext
        });
      }),
    reset: () => set(defaultBoard)
  };
}
```

Let's take a closer look at what's going on here.

First we find the most recent board state. The index of the most recent board is equal to the length of our history minus one. Then we can use `current.board` instead of `store.board`.

```js
const current = store.history[store.history.length - 1];
if (calculateWinner(current.board) || current.board[index]) {
  return store;
}
let newBoard = current.board.slice();
newBoard[index] = store.xIsNext ? 'X' : 'O';
```

Finally we update the store by concatenating the most recent board state to the history.

```js
return Object.assign({}, store, {
  history: store.history.concat([
    {
      board: newBoard
    }
  ]),
  xIsNext: !store.xIsNext
});
```

Now we need to update our components to read from the new history.

`Square.svelte`

```html
<script>
  import { store } from './stores.js';

  export let index;

  $: current = $store.history[$store.history.length - 1];
  $: value = current.board[index];
</script>

<button on:click="{ () => store.move(index) }">{ value }</button>
```

`Board.svelte`

```js
winner = calculateWinner(store.history[store.history.length - 1].board);
```

And we're done! The game should behave exactly as before however now we are storing a history of past moves as we go.

[View the full code at this point](https://svelte.dev/repl/7bf356ca75454eb3aba461ac1b5cb8dd?version=3.15.0)

### Lifting State Up (Again)

This part isn't quite as significant as it is in the React version of this tutorial since we're using a store to track our game state but we do want to manage the moves from the very top level so we'll follow suit and lift up state to the `App` component.

For us, this means cutting and pasting this section of script from `Board` to `App`

```js
import { store, calculateWinner } from './stores.js';
let status;
let winner;
store.subscribe(store => {
  winner = calculateWinner(store.history[store.history.length - 1].board);
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
  }
});
```

Delete the status div from `Board`

```html
<div class="status">{ status }</div>
```

and add to `App` in place of `<!-- TODO: status -->`.

```html
<div>{ status }</div>
```

n.b. at this point, you might get a complaint from your runner/compiler due to an unused css selector in `Board.svelte`. We can go ahead and delete this selector as it is no longer needed.

### Showing the Past Moves

Since we're now recording the move history, we can display them as a list to the player.

Unlike React, we're not working with javascript objects so we can't use something like the `map` function to render a component per past state. Instead, Svelte provides a number of helpers. We're going to use the [`{#each ...}`](https://svelte.dev/docs#each) expression to iterate over our list of histories and generate our components.

Replace `<!-- TODO: moves -->` in `App` with the following. This will make a list element for each entry in the history. Try it out and see the list build up next to the board as you play!

We haven't implemented the `jumpTo()` function yet so you'll see some errors in the console. We'll fix this in the next and final section.

```html
{#each $store.history as step, move}
<li on:click="{ () => store.jumpTo(move) }">
  {#if move}
  <button>Go to move # { move }</button>
  {:else}
  <button>Go to game start</button>
  {/if}
</li>
{/each}
```

### Implementing Time Travel

First of all, we need to add `stepNumber` to the store to indicate the board state we are currently viewing.

```js
const defaultBoard = {
  history: [
    {
      board: Array(9).fill('')
    }
  ],
  xIsNext: true,
  stepNumber: 0
};
```

Next we implement the `jumpTo` method on our store. We'll also update `xIsNext` to be true when `step` is even.

```js
jumpTo: step =>
  update(store => {
    return Object.assign({}, store, {
      xIsNext: step % 2 === 0,
      stepNumber: step
    });
  });
```

Now we need to make a few changes to our move function to handle going to any arbitrary board state in our history.

We now use `store.history.slice(0, store.stepNumber + 1)` instead of `store.history` so that if we go back in time then make a move, the now invalid history will be thrown away.

Since `stepNumber` reflects the state shown to the user, after making a move, we need to set this to the step corresponding to the most recent move -> `stepNumber: history.length`.

```js
move: index => update(store => {
  const history = store.history.slice(0, store.stepNumber + 1);
  const current = history[store.stepNumber];

  if (calculateWinner(current.board) || current.board[index]) {
    return store;
  }

  let newBoard = current.board.slice();
  newBoard[index] = store.xIsNext ? 'X' : 'O';

  return Object.assign({}, store, {
    history: history.concat([{
      board: newBoard
    }]),
    xIsNext: !store.xIsNext,
    stepNumber: history.length
  })
}),
```

Finally, we need to tell the `Square` to look up it's value from the history. Update `current` in `Square` like this

```js
$: current = $store.history[$store.stepNumber];
```

And there you have it! You should now be able to navigate back and forward through the history of moves, and pick up at any point.

[View the full code at this point](https://svelte.dev/repl/6d0b78edbe0440fcb4e3ccbf1709501d?version=3.15.0)

## Wrapping up

Congratulations! You've made it!

You now have a game that:

- lets you play tic-tac-toe
- indicates who's turn it is
- indicates when a player has won
- stores the game's history
- allows players to undo moves and pick up from an earlier point

Good job! I hope this walkthrough gave you a better understanding of how Svelte works and what can be achieved with it.

If you'd like more information you can check out the rest of the svelte documentation here: [svelte.dev/docs](https://svelte.dev/docs)

If you have any questions or comments please feel free to get in touch with me via email

- hello@benmcgarvey.com
