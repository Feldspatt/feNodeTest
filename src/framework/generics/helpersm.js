export function getCellCoords(event) {
    return {
        y: event.target.parentElement.rowIndex - 1,
        x: event.target.cellIndex
    }
}