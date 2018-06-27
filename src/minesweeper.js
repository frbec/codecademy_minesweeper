const generatePlayerBoard = (numberOfRows, numberOfcolumns) => {
  let board = [];
  for (let rowIndex = 0;rowIndex < numberOfRows; rowIndex++) {
    let row = []
    for (let columnIndex = 0; columnIndex < numberOfcolumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfcolumns, numberOfBombs) => {
  let board = [];
  for (let rowIndex = 0;rowIndex < numberOfRows; rowIndex++) {
    let row = []
    for (let columnIndex = 0; columnIndex < numberOfcolumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfcolumns);
    // Bombs can be placed on top of each other. Fix when learning about control flows.
    if (!board[randomRowIndex][randomColumnIndex]) {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {

}

const printBoard = board => console.log(board.map(row => row.join(' | ')).join('\n'));

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player board:');
printBoard(playerBoard);

console.log('Bomb board:');
printBoard(bombBoard);
