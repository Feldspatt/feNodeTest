import {View} from "../../../../framework/core/View.mjs";
import Central from "../../../../framework/generics/frontend/templates/Central.mjs";
import {NavBar} from "../../../../framework/generics/frontend/organisms/NavBar.mjs";


export function Hub(){
    View.call(this)

    this.navbar = new NavBar()

    this.template = new Central(this.navbar)

    this.title = "Hub"

}