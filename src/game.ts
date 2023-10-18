import { board, Cells } from "./board"


export const game: {
    "steps": Cells[],
    "current": number,    
    "move": (index: number) => boolean,
    "toStep": (step: number) => boolean,
    "checkStatus": () => string
} = {
    steps: [],
    current: 0,
    move: function (index: number): boolean {
        // TODO
        return true
    },
    toStep: function (step: number): boolean {
        // TODO
        return true
    },
    checkStatus: function (): string {
        // TODO
        return "Идет игра"
    }
}