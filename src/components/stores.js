import { writable } from 'svelte/store';

const defaultBoard = {
	history: [{
		board: Array(9).fill('')
	}],
	xIsNext: true,
	stepNumber: 0
}

export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
      }
    }
    return null;
  }

function createStore() {
	const { subscribe, set, update } = writable(defaultBoard);

	return {
		subscribe,
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
				stepNumber: ++store.stepNumber
			})
		}),
		jumpTo: step => update(store => {
			return Object.assign({}, store, {
				xIsNext: (step % 2) === 0,
				stepNumber: step
			})
		}),
		reset: () => set(defaultBoard)
	};
}

export const store = createStore();