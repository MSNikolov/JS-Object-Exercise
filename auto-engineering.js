function cars(params){
    let autos = {};

    for (i = 0; i < params.length; i++){
        let brands = Object.keys(autos);

        let stat = params[i].split(" | ");

        if (!brands.includes(stat[0])){
            Object.defineProperty(autos, stat[0], {value: {}, enumerable: true, configurable: true, writable: true});
        }
            let models = Object.keys(autos[stat[0]]);

            if (!models.includes(stat[1])){
                Object.defineProperty(autos[stat[0]], stat[1], {value: 0, writable: true, enumerable: true, configurable: true})
            }

        autos[stat[0]][stat[1]] += Number(stat[2]);
    }


    let result = "";

    let brandNames = Object.keys(autos);

    for (k = 0; k < brandNames.length; k++){
        result += `${brandNames[k]}\n`

        let brandModels = Object.keys(autos[brandNames[k]]);

        for (j = 0; j < brandModels.length; j++){
            result += `###${brandModels[j]} -> ${autos[brandNames[k]][brandModels[j]]}\n`
        }
    }

    return result;
}

console.log(cars(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))