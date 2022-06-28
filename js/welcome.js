function getCookie(username) {
    let name = `Username=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function popup() {
    let username = getCookie("Username")

    if (document.cookie != "") {
        console.log(`Welcome ${username}`);
        document.getElementById("welcomeT").innerHTML = `Hello ${username}, We hope you enjoy your shopping experience. \n All feedback is welcome!`;
        document.getElementById("audiomusic").style.display = "block";

    } else {
        document.getElementById("modal").style.display = "block";
    }
}

function closepop() {
    const usernameinput = document.getElementById("nameinput").value;

    if (usernameinput != "") {
        document.cookie = `Username=${usernameinput}; expires=Fri, 20 Jan 5050 12:00:00 GMT; path=/`;
        document.getElementById("modal").style.display = "none";
        document.getElementById("welcomeT").innerHTML = `Hello ${usernameinput}, We hope you enjoy your shopping experience. \n All feedback is welcome!`;
        document.getElementById("audiomusic").style.display = "block";
    } else {
        console.log("Name input is empty...")
        document.getElementById("error").innerHTML = `You didn't enter a name :(`
    }
}

function clearcookies() {

    document.cookie.replace(`Username=${usernameinput}; expires=Fri, 20 Jan 5050 12:00:00 GMT; path=/`, ``);
}