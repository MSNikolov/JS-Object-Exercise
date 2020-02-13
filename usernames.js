function order(params){
    params.sort();

    let result = params.sort((a, b) => a.length - b.length);


    return result.join("\n")
}

console.log((order(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']

)))