import {Component} from "../../../core/Component.mjs";
import {router} from "../../../../example/javascript/index.mjs";

export function Link(text, route){
    Component.call(this)

    this.getHTML = function(){
        return `<a>${text}</a>`
    }

    this.bindScript = function(){
        this.element.addEventListener("click", ()=> router.goTo(route))
    }
}