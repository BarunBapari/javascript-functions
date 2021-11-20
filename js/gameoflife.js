function seed() {
  return [...arguments];
}

function same([x, y], [j, k]) {
  if(x=== j && y===k){
    return true;
  }
  return false;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  return this.some(item =>same(item,cell));
}

const printCell = (cell, state) => {
  return this.contains.call(state, cell)? "\u25A3":"\u25A2";
};

const corners = (state = []) => {
  let topRight=[0,0];
  let bottomLeft=[0,0];
  if(state.length !=0){
    const axis=state.reduce((prev, [x,y])=>
                            ({x:[...prev.x, x],
                            y:[...prev.y,y],}),
                              {x:[],y:[]});

    const { [0]: minX, [state.length-1]: maxX}=axis.x.sort();
    const { [0]: minY, [state.length-1]: maxY}=axis.y.sort();
    topRight=[maxX, maxY];
    bottomLeft=[minX, minY];

  }
  return{topRight, bottomLeft};
};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
const [pattern, iterations] = process.argv.slice(2);
const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;