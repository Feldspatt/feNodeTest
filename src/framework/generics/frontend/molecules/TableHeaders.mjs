import {Component} from "../../../core/Component.mjs";


export function TableHeaders(headers) {
    Component.call(this)

    this.headers = headers

    this.getHTML = function() {
        const headersHTML = this.headers.map(header => `<td>${header}</td>`).join("")

        return `
            <tr>
                ${headersHTML}
            </tr>
        `
    }

    this.bindScript = function() {
        // console.log("table headers html= ", this.getHTML())
    }

}