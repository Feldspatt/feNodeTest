import {View} from "../../../../framework/core/View.mjs";
import Central from "../../../../framework/generics/frontend/templates/Central.mjs";
import {users} from "../../mock_data/mockData.mjs";
import Button from "../../../../framework/generics/frontend/atoms/Button.mjs";


export function UserDetail(routeParams) {
    View.call(this)

    if(routeParams && routeParams.length > 0) {
        this.username = routeParams[0]
        console.log("username", this.username)
    } else {
        throw new Error("No username provided")
    }

    this.user = users.find(user => user.name === this.username)

    this.title = this.username

    this.greetings = new Button(`Hello ${this.user.name}, happy ${this.user.age}th birthday!`)

    this.template = new Central(this.greetings)

}