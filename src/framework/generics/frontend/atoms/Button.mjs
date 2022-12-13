import {Component} from "../../../core/Component.mjs";

export default function(text, onClick) {
    Component.call(this)

    this.getHTML= function() {
        return `
        <button type="button"  class="btn btn-primary">${text}</button>`
    }

    this.bindScript= function() {
        this.element.addEventListener("click", this.onClick)
    }

    this.onClick = onClick
}