import {Component} from "../../../core/Component.mjs";

export function Table(headersString = [], rowsString = [], clickHandler = () => {
}, data = null) {
    Component.call(this)


    this.headers = headersString
    this.rows = rowsString
    this.clickHandler = clickHandler
    this.data = data


    this.createHeaders = function(headers){
        return headers.map(header=> `<td>${header}</td>`)
    }

    this.createRows = function(rows){
        return rows.map((row, i) => {
            if(row.length > headersString.length) throw new Error("Row has more columns than headers.")
            else if(row.length < headersString.length) throw new Error("Row has less columns than headers.")

            return `<tr>${row.map(cell=> `<td>${cell}</td>`).join("")}</tr>`
        })
    }


    this.getHTML = function() {

        return `
        <table class="table">
            <thead>
                <tr>
                 ${this.createHeaders(this.headers)}
                </tr>
            </thead>
            <tbody>
                ${this.createRows(this.rows)}
            </tbody>
        </table>
        `
    }

    this.bindScript = function() {
        this.element.addEventListener("click", (event)=> this.clickHandler(event))
    }

}