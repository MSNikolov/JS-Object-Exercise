function compare(params){
    let arrs = [];

    for (i = 0; i < params.length; i++){
        let arr = JSON.parse(params[i]);

        arr.sort((a, b) => b - a);

        if (!arrs.some(a => JSON.stringify(a) == JSON.stringify(arr))) {
            arrs.push(arr);
        }
    }

    arrs.sort((a, b) => a.length - b.length);

    let result = "";

    for (let k=0; k < arrs.length; k++){
        result += `[${arrs[k].join(", ")}]` +"\n"
    }

    return result;
}

console.log(compare(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]

))