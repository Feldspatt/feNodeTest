export function User(name, age, sport){
    this.name = name
    this.age = age
    this.sport = sport
}

export function Bag(name, owner, items = []){
    this.name = name
    this.owner = owner
    this.items = items

    this.getWeight = function(){
        return this.items.reduce((acc, item) => acc + item.weight, 0)
    }
}

export function Item(name, weight){
    this.name = name
    this.weight = weight
}

