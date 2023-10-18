export type Cell = "_" | "X" | "0"
export type Cells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

function isCell(sym: string): sym is Cell {
    // TODO
    return true
}

export const board: {
    "cells": Cells,
    "fromString": (str: string) => boolean,
    "toString": () => string,
    "isFill": () => boolean,
    "move": (index: number, cell: Cell) => boolean,
    "getLineChar": (line: number[]) => Cell[],
    "checkWin": () => Cell,
    "winPos": number[][]
} = {
    "cells": ["_", "_", "_", "_", "_", "_", "_", "_", "_"],

    fromString(str: string) {
        // TODO
        return true
    },

    isFill() {
        // TODO
        return true
    },

    move(index: number, cell: Cell) {
        // TODO
        return true
    },
    
    getLineChar(line: number[]) {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]]
    },

    checkWin(){
        // TODO
        return "_"
    },

    "winPos": [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
}
