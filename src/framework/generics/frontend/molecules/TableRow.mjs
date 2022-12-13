import {Component} from "../../../core/Component.mjs";

export function TableRow(data) {
    Component.call(this)

    this.getHTML = function() {
        const cells = data.map(cell => `<td>${cell}</td>`).join("")
        return `
            <tr>
                ${cells}
            </tr>
            `
    }
}