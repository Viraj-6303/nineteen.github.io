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

// Define the correct password
const correctPassword = "your_password"; // Change this to your desired password

function checkPassword() {
    // Get the value entered in the password input field
    const enteredPassword = document.getElementById("pass").value;

    // If the entered password matches the correct password
    if (enteredPassword === correctPassword) {
        document.getElementById("password").style.display = "none";

        // Show the main section
        document.getElementById("main_container").style.display = "flex";
        // Enable developer options
        enableDevOptions();
    } else {
        // Hide the main section
        document.getElementById("main_container").style.display = "none";
        // Disable developer options
        disableDevOptions();
    }
}

// Function to disable developer options
function disableDevOptions() {
    // Prevent right-click menu
    document.addEventListener('contextmenu', event => event.preventDefault());
    // Disable keyboard shortcuts
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j')) {
            event.preventDefault();
        }
    });
}

// Function to enable developer options
function enableDevOptions() {
    // Allow right-click menu
    document.removeEventListener('contextmenu', event => event.preventDefault());
    // Allow keyboard shortcuts
    document.removeEventListener('keydown', event => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j')) {
            event.preventDefault();
        }
    });
}
