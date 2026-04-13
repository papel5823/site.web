<script>
let panier = [];

function ajouter(nom, prix) {
    let produit = panier.find(p => p.nom === nom);

    if (produit) {
        produit.qte++;
    } else {
        panier.push({nom, prix, qte:1});
    }

    afficherPanier();
}

function afficherPanier() {
    let liste = document.getElementById("liste");
    liste.innerHTML = "";

    let total = 0;

    panier.forEach((p, index) => {
        total += p.prix * p.qte;

        let li = document.createElement("li");
        li.innerHTML = `${p.nom} x${p.qte} - ${p.prix*p.qte} FCFA 
        <button onclick="supprimer(${index})">❌</button>`;
        liste.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function supprimer(i) {
    panier.splice(i,1);
    afficherPanier();
}


function commander() {
    let message = "Commande NIANG & FRÈRE:%0A";

    panier.forEach(p => {
        message += `${p.nom} x${p.qte}%0A`;
    });

    window.open("https://wa.me/221763804557?text=" + message);
}

</script>

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({name, email, message});

    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message envoyé !");
    this.reset();
});


// FORMULAIRE
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({name, email, message});

    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message envoyé !");
    this.reset();
});

// ANIMATION SCROLL
let elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    let triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;

        if(top < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
// FORMULAIRE
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({name, email, message});

    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message envoyé !");
    this.reset();
});

// ANIMATION SCROLL
let elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    let triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;

        if(top < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);


