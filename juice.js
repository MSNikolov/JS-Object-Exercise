function juice(params){
    let juices = {};

    let bottles = {};

    for (i = 0; i < params.length; i++){
        let j = params[i].split(" => ");

        let juiceKinds = Object.keys(juices);

        if (!juiceKinds.includes(j[0])){
            Object.defineProperty(juices, j[0], {value: 0, writable: true,configurable: true, enumerable: true});
        }

        juices[j[0]] += Number(j[1]);

        if (juices[j[0]] >= 1000){
            let litters = Math.floor(juices[j[0]]/1000);

            juices[j[0]] = juices[j[0]] % 1000;

            let bottleKinds = Object.keys(bottles);

            if (!bottleKinds.includes(j[0])){
                Object.defineProperty(bottles, j[0], {value: 0, writable: true, configurable: true, enumerable: true});
            }

            bottles[j[0]] += litters;
        }
    }

    let result = "";

    let bottleTypes = Object.keys(bottles);

    for (i = 0; i < bottleTypes.length; i++){
        result += `${bottleTypes[i]} => ${bottles[bottleTypes[i]]}\n`
    }

    return result;
}

console.log(juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

))