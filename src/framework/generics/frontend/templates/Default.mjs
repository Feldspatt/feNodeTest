import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";

export function Default() {
    Component.call(this)

    this.components = []

    this.getHTML= function() {
        let slots = ""
        for (let i in this.components){
            slots += slot(i)
        }

        return `
            <div>
                ${slots}
            </div>
        `
    }

    this.bindScript= function() {
        this.fillSlots(new Map(
            this.components.map((component, index) => [index, component.getElement()])
        ))
    }

}