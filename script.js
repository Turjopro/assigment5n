const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"


/* LOGIN */

function login() {

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username === "admin" && password === "admin123") {

        document.getElementById("loginPage").classList.add("hidden")
        document.getElementById("mainPage").classList.remove("hidden")

        loadIssues()

    }

    else {

        alert("Invalid Credentials")

    }

}