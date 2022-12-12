import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Link} from "../atoms/Link.mjs";

export function NavBar(){
    Component.call(this)

    this.linksMap = new Map([
        ["Hub", "hub"],
        ["Login", "login"],
        ["Jane", "user/jane"],
        ["John", "user/john"],
        ])


    this.getHTML = function(){

        let links = ""
        for (let i of this.linksMap.keys()){
            links += slot(i)
        }

        return `
        <nav>
            <ul>
                ${links}
            </ul>
        </nav>
        `
    }


    this.bindScript = function(){

        for (let i of this.linksMap){
            let link = new Link(i[0], i[1])
            this.fillSlot(i[0], link.getElement())
        }
    }

}