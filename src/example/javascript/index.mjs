import {route, Router} from "../../framework/core/Router.mjs";
import {Login} from "./frontend/views/Login.mjs";
import {Hub} from "./frontend/views/Hub.mjs";
import {UserDetail} from "./frontend/views/UserDetail.mjs";
import {Users} from "./frontend/views/Users.mjs";


export const credentials = {
    username: "Bob",
    password: "1234",
    isLoggedIn: false
}


const routes = [
    route("hub", Hub),
    route("login", Login),
    route("users", Users),
    route("user", UserDetail),
]

export const router = new Router(routes)
const path = window.location.pathname.slice(1)
console.log("path: " , path)

router.goTo(path).then()
