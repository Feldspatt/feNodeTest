import {router} from "../../index.mjs";
import {View} from "../../../../framework/core/View.mjs";
import Central from "../../../../framework/generics/frontend/templates/Central.mjs";
import Button from "../../../../framework/generics/frontend/atoms/Button.mjs";


GuardedByModal.route = "guardedByModal"

export async function GuardedByModal(){
    View.call(this)

    this.title = "Guarded By Modal"


    const btn = new Button("Go to login", ()=> router.goTo("login"))

    this.template = Central(btn)
}