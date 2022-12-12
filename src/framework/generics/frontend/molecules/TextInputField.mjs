import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";

export default function(label, input) {
    Component.call(this)

    this.getHTML= function() {
        return `
        <div>
            <label>${label}</label>
            ${slot("input")}
        </div>
        `
    }

    this.bindScript= function() {
        this.fillSlot("input", input.getElement())
    }

    this.getValue= function() {
        return input.getElement().value
    }
}