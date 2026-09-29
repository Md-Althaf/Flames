function calculateFlames() {

    let name1 = document.getElementById("name1").value.toLowerCase();
    let name2 = document.getElementById("name2").value.toLowerCase();

    if (!name1 || !name2) {
        document.getElementById("result").innerText = "Enter Both Names";
        return;
    }

    let first = name1.split("");
    let second = name2.split("");

    for (let i = 0; i < first.length; i++) {

        let position = second.indexOf(first[i]);

        if (position != -1) {
            first[i] = "";
            second[position] = "";
        }
    }

    let remaining = 0;

    for (let i = 0; i < first.length; i++) {

        if (first[i] != "") {
            remaining++;
        }
    }

    for (let i = 0; i < second.length; i++) {

        if (second[i] != "") {
            remaining++;
        }
    }

    let flames = ["F", "L", "A", "M", "E", "S"];

    let index = 0;

    while (flames.length > 1) {

        index = (index + remaining - 1) % flames.length;

        flames.splice(index, 1);
    }

    let answer = flames[0];

    let result = "";

    if (answer == "F") {
        result = "Friends";
    }
    else if (answer == "L") {
        result = "Love";
    }
    else if (answer == "A") {
        result = "Affection";
    }
    else if (answer == "M") {
        result = "Marriage";
    }
    else if (answer == "E") {
        result = "Enemy";
    }
    else if (answer == "S") {
        result = "Siblings";
    }

    document.getElementById("result").innerText = result;

    saveResult(name1, name2, result);
}


function resetGame() {

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").innerText = "";
}


const scriptURL =
    "https://script.google.com/macros/s/AKfycbxTUCpJDKKvkHp43PkrHgrxHbZwvmNGvBEpWE03vpeRlQtrSPL83FJPPr-2Y9MJnc0H/exec";


function saveResult(name1, name2, result) {

    let data = new URLSearchParams();

    data.append("name1", name1);
    data.append("name2", name2);
    data.append("result", result);

    fetch(scriptURL, {
        method: "POST",
        body: data,
        mode: "no-cors"
    });
}


function loadWall() {

    let script = document.createElement("script");

    script.src =
        scriptURL +
        "?callback=showWall&time=" +
        new Date().getTime();

    document.body.appendChild(script);
}


function showWall(data) {

    let wall = document.getElementById("wallNames");

    wall.innerHTML = "";

    if (data.length === 0) {

        wall.innerText =
            "You Are the First to Use This Amazing Site";

        return;
    }

    for (let i = 0; i < data.length; i++) {

        let card = document.createElement("div");

        card.className = "name-card";

        let message = "";

        if (data[i].result == "Love") {
            message = data[i].name1  + data[i].name2 + ": Mutual Interest";
        }

        else if (data[i].result == "Enemy") {
            message = data[i].name1 +" & "+ data[i].name2 + " are Tom & Jerry ";
        }

        else if (data[i].result == "Marriage") {
            message =  data[i].name1 + " and " + data[i].name2 + " Rab Ne Bana Di! : Long Term  "
        }


        else if (data[i].result == "Affection") {
            message = data[i].name1 + " are " + data[i].name2 + ": Eye Contact ";
        }

        else if (data[i].result == "Siblings") {
            message = data.name1 + "and" + data.name2 +" Family Vibe "
        }
        else if (data[i].result == "Friends") {
            message = data.name1 + "are" + data.name2 +" Friends"
        }


        let pair = document.createElement("div");

        pair.className = "pair";

        pair.textContent = message;



        card.appendChild(pair);
        wall.appendChild(card);

    }
}


loadWall();

