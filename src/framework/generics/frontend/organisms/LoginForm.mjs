import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import TextInputField from "../molecules/TextInputField.mjs";
import TextInput from "../atoms/TextInput.mjs";
import Button from "../atoms/Button.mjs";


export function LoginForm(onSubmit, idLabel, passwordLabel){
    Component.call(this)

    this.onSubmit = onSubmit

    this.getHTML= function() {
        return `
        <div>
            <h1>Login</h1>
            <div>
                ${slot("username")}
                ${slot("password")}
                ${slot("submitBtn")}
            </div>
        </div>`
    }


    this.bindScript= function() {

        this.id = new TextInputField(
            idLabel,
            new TextInput(
                "text",
                "username")
        )

        this.password = new TextInputField(
            passwordLabel,
            new TextInput(
                "password",
                "password")
        )

        const submitBtn = new Button(
                            "Login",
            (e)=>this.onSubmit(e))


        this.fillSlots(new Map([
            ["username", this.id.getElement()],
            ["password", this.password.getElement()],
            ["submitBtn", submitBtn.getElement()]
        ]))
    }


    this.getValues= function(){
        return [this.id.getValue(), this.password.getValue()]
    }
}

