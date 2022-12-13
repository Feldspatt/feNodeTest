import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {TableHeaders} from "../molecules/TableHeaders.mjs";

export function Table(headers, rows, clickHandler){
    Component.call(this)

    this.headers = headers
    this.rows = rows
    this.clickHandler = clickHandler


    this.getHTML = function() {

        let rows = ""
        for(let i in this.rows){
            rows += slot("row" + i)
        }

        return `
        <table class="table">
            <thead>
                ${slot("he", true)}
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
        `
    }

    this.bindScript = function() {

        // let p = new Paragraph("Hello World").getElement()

        let headers = new TableHeaders(["Name", "Age"])

        // console.log("row: " + headers.getElement().innerHTML)
        this.fillSlot("he", headers.getElement())

        console.log("filling rows...")

        // for(let i in this.rows){
        //     this.fillSlot("row" + i, this.rows[i].getElement())
        // }
        // console.log("table html= ", this.getHTML())
        // console.log("table element= ", this.element.innerHTML)
        // this.fillSlot("headers", this.headers)
        //
        // for(let i in this.rows){
        //     this.fillSlot(i, this.rows[i])
        // }
        //
        // if(clickHandler)this.getElement().addEventListener("click", clickHandler)
    }

}