var game = {
        board: [
           [ false, true,  false ],
           [ false, true,  false ],
           [ false, true,  false ],
        ],
    // board: undefined,
    newBoard: function(){
        return [
            [ false, false, false ],
            [ false, false, false ],
            [ false, false, false ],
        ];
    }, // newBoard

    rules: function(cell, neighbors){
        var alive = 0;
        neighbors.forEach(function(neighbor){
        if ( neighbor ){
            alive++;
        }
        }); //forEach

        if ( cell && alive === 2 ){
            return true;
        }
        if ( alive === 3 ){
            return true;
        }
        return false;
    }, // conway

    neighborsOf: function(x,y){
         var diffs = [ -1, 0, +1 ],
                neighbors = [ ];

            // Apply each `diff` to the `x` coordinate...
            diffs.forEach(function(dX){
                // If no element exists, skip...
                if ( !board[x + dX] ) return;

                // Apply the `diff` to the `y` coordinate...
                diffs.forEach(function(dY){
                    // skip yourself...
                    if ( dX === 0 && dY === 0 ) return;

                    // If no element exists, skip...
                    if ( !board[x + dX][y + dY] ) return;

                    neighbors.push(board[x + dX][y + dY]);
                });
            });

            return neighbors;
    },// neighborsOf


    tick: function(){ /* accepts nothing, alters `game.board` */
    var after = board();

        before.forEach(function(row, x){
            row.forEach(function(cell, y){
                //console.log(cell, x, y);
                after[x][y] = conway(cell, neighborsOf(x,y));
                //console.log(after[x][y]);
            });
        });

        return after;
    },//tick



    // * (below is the interface)
    //  * WARNING: This is VOODOO MAGIC...
    //  *
    //  * GIVEN:
    //  *
    //  * EXPECT:
    //  *   +---+---+---+
    //  *   |   | X |   |
    //  *   +---+---+---+
    //  *   |   | X |   |
    //  *   +---+---+---+
    //  *   |   | X |   |
    //  *   +---+---+---+

    display: function(){
        var spacer = '+---+---+---+\n';

        return spacer +
            // Apply `renderRow` to each `row` in `board`...
            this.board.map(function renderRow(row){
                return '| ' +
                    // Apply `renderCell` to each `cell` in `row`...
                    row.map(function renderCell(cell){
                        // return 'X' if `cell` is TRUTHY otherwise return ' '
                        return cell && 'X' || ' ';
                    }).join(' | ') // Place ' | ' between each `cell`...
                + ' |\n';
            }).join(spacer) // Place `spacer` between each `row`...
        + spacer;
    } // END display
} // END game
