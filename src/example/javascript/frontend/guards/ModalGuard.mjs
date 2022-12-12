import {credentials, router} from "../../index.mjs";
import {verify} from "../verify.mjs";
import LoginForm from "../../../../framework/generics/frontend/organisms/LoginForm.mjs";
import {Modal} from "../../../../framework/generics/frontend/organisms/Modal.mjs";
import {Guard} from "../../../../framework/core/Guard.mjs";


function ModalGuard() {
    Guard.call(this)

    this.control= async function(route, params) {
        if(credentials.isLoggedIn){
            return true
        }
        else{
            const modal = new Modal()
            const loginForm = LoginForm(
                login,
                "Username",
                "Password"
            )

            async function login(){
                if(verify(this)) {
                    credentials.isLoggedIn = true
                    await router.goTo("guardedByModal")
                    modal.removeElement()
                }
                else{
                    alert("Wrong credentials")
                }

            }

            modal.content = loginForm
            modal.show()

            return false
        }
    }
}