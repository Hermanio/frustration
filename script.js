/**
 * Created by toks on 15.02.17.
 */
function actuallyLogIn() {
    var username = $("#emailInput").val();
    var password = $("#passwordInput").val();

    console.log(username + "   " + password);

    var loginMessageElement = document.getElementById("loginMessage");
    loginMessageElement.classList.add("hidden");

    if (username === "asd@asd.ee" && password === "asd") {
        window.location.href = "loggedin.html";
    } else {
        // ugly validation
        alert("Something happened something happened");
        window.location.href = "index.html";
    }


}

function login() {
    window.open("https://reddit.com",'_blank', 'toolbar=0,location=0,menubar=0');
    var loginMessageElement = document.getElementById("loginMessage");
    loginMessageElement.classList.remove("hidden");
    window.setTimeout(actuallyLogIn, 4000);

}

var waiting = false;

function addHorrorToInput(obj) {
    obj.onkeydown = function(e) {
        console.log(e);
        if (!waiting) {
            waiting = true;
            key = e.key;
            setTimeout(function() {
                if (key.match(/^[a-z.@]$/)) {
                    obj.value += key;
                } else if ( key === "Backspace" ) {
                    obj.value = obj.value.slice(0, -1);
                }
                waiting = false;
            }, 200)
        }
        return false;
    }
}

$( document ).ready(function ()
    {
        addHorrorToInput(document.getElementById("passwordInput"));
        addHorrorToInput(document.getElementById("emailInput"));

    }
)