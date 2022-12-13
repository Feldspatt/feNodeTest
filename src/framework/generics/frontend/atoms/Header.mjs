import {Component} from "../../../core/Component.mjs";

export function Header(importance, text) {
    Component.call(this)

    this.getHTML = function() {
        return `<h${importance}>${text}</h${importance}>`
    }
}