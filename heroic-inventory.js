function inventory(params){
    let heroes = [];

    for (i = 0; i < params.length; i++){
        let heroInv = params[i].split(" / ");

        let itemsNames = heroInv[2].split(", ");

        let hero = {
            name: heroInv[0],
            level: Number(heroInv[1]),
            items: itemsNames
        }

        heroes.push(hero);
    }

    return JSON.stringify(heroes)
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))