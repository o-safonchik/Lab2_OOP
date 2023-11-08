import { board, Cells } from "./board"

// В объекте хранится список всех позиций, которые были в игре (свойство steps) 
//  и номер текущей позиции в этом списке (current).
export const game: {
    "steps": Cells[],
    "current": number,    
    "move": (index: number) => boolean,
    "toStep": (step: number) => boolean,
    "checkStatus": () => string
} = {
    // TODO
    // Необходимо инициализировать steps массивом с пустой доской
    steps: [["_", "_", "_", "_", "_", "_", "_", "_", "_"]], 
    current: 0,
    move: function (index: number): boolean {
        // TODO
        // Вызывает checkStatus, и, если игра окончена, возвращает false
        if(this.checkStatus() != "Идет игра") return false
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
        if(this.current != this.steps.length-1){
            this.steps = this.steps.slice(0, this.current+1)
        }
        if(this.current%2 == 0){
            let flag: boolean = board.move(index, "X")
            if(flag != false){
                const copy = board.cells.slice()
                this.current++
                this.steps[this.current] = copy as Cells
            }
            else return false
        }
        else if(this.current%2 != 0){
            let flag: boolean = board.move(index, "0")
            if(flag != false){
                this.current++
                this.steps[this.current] = [...board.cells]     
            }
            else return false
        }
        //console.log(this.steps.length)
        //console.log(this.current)
        console.log(this.steps)
        return true
        
    },
    toStep: function (step: number): boolean {
        //console.log(this.steps.length)
        //console.log(this.steps)
        if ((this.steps.length-1) < step) return false // Проверяет, что в steps есть элемент с индексом step, если нет то возвращает false
        this.current = step // Делает current равным step и обновляет свойство cell в board
        board.cells = [...this.steps[step]]
        return true
    },

    checkStatus: function (): string {
        // Возвращает "Ничья", "Победил 0", "Победил X" или "Идет игра"
        //  в зависимости от ситуации на доске
        if(board.checkWin() == "0") return "Победил 0"
        if(board.checkWin() == "X") return "Победил X"
        if(board.checkWin() == "_" && board.isFill() == true) return "Ничья"
        return "Идет игра"
    }
}