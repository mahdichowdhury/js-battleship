//initizalize variables
let myGridSize = prompt('What size would you like your grid to be?');
let myEnemyGridSize = prompt ('What size would ou like your enemies grid to be?');
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(myEnemyGridSize);

printGrid(enemyGrid, true);
printGrid(myGrid);

function createGrid(size) {
    let grid = [];
    for (let i = 0; i < size; i++){
        grid[i] = [];
        for (let j = 0; j < size; j++){
            grid[i][j] = '-';
        }
    }
    return grid;
}

function printGrid(grid, isEnemy = false) {
    const headers = createHeaders(grid.length);
    console.log(headers)
    for (let i = 0; i < grid.length; i++) {
        let rowStr = i + ' ';
        for (let cell of grid[i]){
            if (isEnemy && cell == 'O') {
                rowStr += '- ';
            } else {
             rowStr += cell + ' ';
            }
        }
        console.log(rowStr)
    }
}
function createHeaders(size) {
    let result =  ' ';
    for (let i = 0; i < size; i++) {
        result+= i + ' ';
    }
    return result;
}


