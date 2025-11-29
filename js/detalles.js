
            fetch("../components/header.html")
        .then(resp => resp.text())
        .then(html => {
            document.getElementById("header").innerHTML = html;
        });
        fetch("../components/navbar.html")
        .then(resp => resp.text())
        .then(html => {
            document.getElementById("navbar").innerHTML = html;
        });
        