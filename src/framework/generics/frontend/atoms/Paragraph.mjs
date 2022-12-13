import {Component} from "../../../core/Component.mjs";

export function Paragraph(text) {
    Component.call(this)

    this.getHTML = function() {
        return `<p>${text}</p>`
    }
}