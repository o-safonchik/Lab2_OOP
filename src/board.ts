export type Cell = "_" | "X" | "0"
export type Cells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

function isCell(sym: string): sym is Cell {
    // TODO
    // Проверяет, является ли sym типа Cell
    // Возвращает true если sym типа Cell, иначе false
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
        // Переписывает из str символы в this.cells
        // Если длина строки не равна 9, возвращает false
        // Если встретиться символ не из Cell возвращает false
        // Если преобразование прошло успешно возвращает true
        return true
    },

    isFill() {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        return true
    },

    move(index: number, cell: Cell) {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        return true
    },
    
    getLineChar(line: number[]) {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]]
    },

    checkWin(){
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
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
