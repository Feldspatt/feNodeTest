import {Router} from "../../framework/core/Router.mjs";
import {Login} from "./frontend/views/Login.mjs";
import {Hub} from "./frontend/views/Hub.mjs";
import {UserDetail} from "./frontend/views/UserDetail.mjs";
import {Users} from "./frontend/views/Users.mjs";


export const credentials = {
    username: "Bob",
    password: "1234",
    isLoggedIn: false
}


const viewMaps = new Map([
    ["hub",Hub],
    ['users', Users],
    ["login", Login],
    ["user", UserDetail]
])


export const router = new Router(viewMaps)
const path = window.location.pathname.slice(1)
router.goTo(path).then()
