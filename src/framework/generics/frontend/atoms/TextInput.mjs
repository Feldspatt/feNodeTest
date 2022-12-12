import {Component} from "../../../core/Component.mjs";


export default function(type, placeholder) {
    Component.call(this)

    this.getHTML= function() {
        return `
        <input type="${type}" placeholder="${placeholder}">
        `
    }

}