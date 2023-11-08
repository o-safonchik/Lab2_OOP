export type Cell = "_" | "X" | "0"
export type Cells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

function isCell(sym: string): sym is Cell {
    // Проверяет, является ли sym типа Cell
    // Возвращает true если sym типа Cell, иначе false
    if (sym == "_" || sym == "X" || sym == "0")
        return true
    else
        return false
}

// В объекте хранится текущая позиция. 
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
        if(str.length != 9) return false // Если длина строки не равна 9, возвращает false
        for(let i=0; i<9; i++) // цикл по массиву
            if(isCell(str[i]) == true) this.cells[i] = str[i] as Cell // Переписывает из str символы в this.cells
            else return false // Если встретиться символ не из Cell возвращает false
        return true // Если преобразование прошло успешно возвращает true
    },

    toString(): string {
        return this.cells.join('') // Возвращает строку, состоящую из символов this.cells
    },

    isFill() {
        for(let i=0; i<9; i++)
            if(this.cells[i] == "_") return false
        return true // Возвращет true если на доске нет пустых клеток
    },

    move(index: number, cell: Cell) {
        if(this.cells[index] != "_") return false // Если ячейка this.cell[index] занята - возвращает false
        this.cells[index] = cell // Записывает в ячейку cell и возвращает true
        return true
    },
    
    getLineChar(line: number[]) {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]]
    },

    checkWin(){
    // Если имеется комбинация из трех одинаковых символов "X" или "0" возвращает этот символ
    // Иначе возвращает символ "_"
        for (let i = 0; i < 8; i++) {
            let check: Cell[] = this.getLineChar(this.winPos[i])
            if (check[0] === 'X' && check[1] === 'X' && check[2] === 'X') {
              return 'X'
            }
            if (check[0] === '0' && check[1] === '0' && check[2] === '0'){
              return '0'
            }
        }
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
