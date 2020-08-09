function vocalSeeker(board) {
    let vocal = "aiueoAIUEO"
    let vocalCount = 0;
    let vocalFound = "";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (typeof board[i][j] === "number") {
                continue;
            }
            for (let k = 0; k < vocal.length; k++) {
                if (board[i][j] === vocal[k]) {
                    vocalCount++;
                    vocalFound += board[i][j];
                    break;
                }
            }
        }
    }
    return `vokal ditemukan ${vocalCount} dan kumpulan vokal adalah ${vocalFound}`;
}

let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo