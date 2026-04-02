class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const value = board[r][c];
                if (value === '.') {
                    continue;
                }
                const rowKey = `row-${r}-${value}`;
                const colKey = `col-${c}-${value}`;
                const boxKey = `box-${Math.floor(r/3)}-${Math.floor(c/3)}-${value}`;
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
        return true;
    }
}
