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
