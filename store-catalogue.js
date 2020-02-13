function catalogue (params){
    let cat = {};

    for (i = 0; i < params.length; i++){
        let product = params[i].split(" : ");

        let name = product[0];

        let price = Number(product[1]);

        Object.defineProperty(cat, name, {value: price, enumerable: true});
    }

    let names = Object.keys(cat);

    names.sort();

    let result = "";

    let letters = [];

    for (i = 0; i < names.length; i++){
        let firstL = names[i][0];

        if (!letters.includes(firstL)){
            result += `${firstL}\n`;

            letters.push(firstL);
        }

        result += `  ${names[i]}: ${cat[names[i]]}\n`
    }

    return result;
}