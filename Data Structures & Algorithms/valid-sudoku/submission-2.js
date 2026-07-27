class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set()
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') continue;
                const colkey = `col:${j}&&&${board[i][j]}`;
                const rowkey = `row:${i}&&&${board[i][j]}`;
                const boxkey = `box:${3 * Math.floor(i / 3) + Math.floor(j / 3)}&&&${board[i][j]}`;
                console.log(colkey)
                console.log(rowkey)
                console.log(boxkey)
                console.log()

                if (set.has(colkey) || set.has(rowkey) || set.has(boxkey) ) return false
                else set.add(colkey).add(rowkey).add(boxkey);


            }
        }
        return true;
    }
}
