import {credentials} from "../index.mjs";

export function verify(form){
        const inputValues = form.getValues()

        return inputValues[0] === credentials.username && inputValues[1] === credentials.password
}