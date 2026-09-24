function calculateFlames() {
    let name1 = document.getElementById("name1").value.toLowerCase();
    let name2 = document.getElementById("name2").value.toLowerCase();

    if (!name1 || !name2){
        document.getElementById("result").innerText = "Enter Both names"
        return;
    }

    let first = name1.split("");
    let second = name2.split("");

    for (let i = 0; i<first.length ; i++){
        let position = second.indexOf(first[i]);

        if (position != -1){
            first[i] = "";
            second[position] = "";
        }
    }

    remaining = first.length + second.length 

    let flames = ["F","L","A","M","E","S"]
    let index = 0;
    while (flames.length > 1) {
        index = (index + (remaining-3))%flames.length;
        flames.splice(index,1)
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
    else if (answer == "S"){
        result = "Siblings"
    }

    document.getElementById("result").innerText = result;

}

function resetGame(){
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").innerText = "";
        
}

