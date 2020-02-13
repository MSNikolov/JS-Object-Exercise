function tablificate(json){
    let people = [];

    for (let i = 0; i < json.length; i++){
        let empl = JSON.parse(json[i]);

        people.push(empl);
    }

    let tabl = "<table>\n"

    for (let i = 0; i < people.length; i++) {
        tabl += `\t<tr>\n`
        tabl += `\t\t<td>${people[i].name}</td>\n`;
        tabl += `\t\t<td>${people[i].position}</td>\n`
        tabl += `\t\t<td>${people[i].salary}</td>\n`
        tabl += `\t</tr>\n`
    }

    tabl+=`</table>`

    return tabl;
}

console.log(tablificate(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
))