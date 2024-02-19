function showLetter() {
    console.log("Working!")
    var div = document.getElementById("letter_container");
    // div.classList.toggle("hidden");
    div.classList.toggle("visible");

    var btns = document.getElementById("question");
    btns.classList.toggle("hidden");

    btns.style.display = "none";

}

let count = 0;

function noButton() {
    count ++;

    if (count <= 7)
    {
        switch (count) {
            case 1:
                alert("Wtf you mean No?");
                break;
            case 2:
                alert("You would not dare....");
                break;
            case 3:
                alert("Dei thakkaliii!!!")
                break;
            case 4:
                alert("Enna Dhans... fun panriya..?");
                break;
            case 5:
                alert("Unnaku last warning!")
                break;
            case 6:
                alert("You will regret. Last Chance!");
                break;
            case 7:
                alert("Okay!!! I do not have any pride. Please accept 🥹🥹🥹🥹🥹")
        }
    }
    else {
        alert("Pretttyyyyy Pleaaaaaseeeeeeeeeee 😭😭😭😭😭😭")
    }
}