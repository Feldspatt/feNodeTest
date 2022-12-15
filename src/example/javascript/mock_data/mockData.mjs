import {Bag, Item, User} from "./types.mjs";

export const users = [
    new User("jane", 21, "soccer"),
    new User("john", 20, "tennis"),
    new User("jack", 22, "basketball"),
]


export const items = [
    new Item("Sword", 10),
    new Item("Shield", 5),
    new Item("Potion", 1),
    new Item("Gold", 0.1),
    new Item("Diamond", 0.01),
    new Item("Ruby", 0.01),
    new Item("Emerald", 0.01),
    new Item("Sapphire", 0.01),
]
export const bags = [
    new Bag("JaneBag",
        users[0],
        [
            items[0],
            items[1],
            items[2]
            ]),
    new Bag("JohnBag",
        users[1],
        [
            items[3],
            items[4]
        ]),
    new Bag("loneBag",
        null,
        [
            items[5],
            items[6]
        ])
]