import {Component} from "../../../core/Component.mjs";

/**
 *
 * @param key the key corresponding to the icon in the icons map, in icon.mjs
 * @param onClick
 * @constructor
 */
export function Icon(key, onClick = null) {
    Component.call(this)

    this.onClick = onClick

    this.getHTML = function() {
        const iconString = iconsMap.get(key)
        if(!iconString) throw new Error("Icon not found")
        return iconString
    }

    this.bindScript = function() {
        if(!onClick) this.getElement().addEventListener("click", this.onClick)
    }
}

export const iconsMap = new Map([
    ["check", `<i class="bi bi-check"></i>`],

])