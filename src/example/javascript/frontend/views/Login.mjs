import {router} from "../../index.mjs";
import {View} from "../../../../framework/core/View.mjs";
import {LoginForm} from "../../../../framework/generics/frontend/organisms/LoginForm.mjs";
import Central from "../../../../framework/generics/frontend/templates/Central.mjs";


export function Login() {
    View.call(this)

    this.title = "Login"

    this.template = new Central(
        new LoginForm(
            async () => {
                await router.goTo("guardedByModal")
            },
            "Username",
            "Password"
        ))

}