const products = {
    name: ["Tomate", "Ananas", "Orange", "Fraise"],
    price: [200, 500, 300, 150],
    picture: [0, 1, 2, 3]
}

// generation aleatoire des noms sur les cards et les images qui y correspondent
const details_name = document.querySelectorAll(".infos-details-name")

const images = document.querySelectorAll(".image")

details_name.forEach(element => {
    const hasard = Math.round(Math.random()*3);

    element.innerText = products.name[hasard]

    element.parentElement.parentElement.parentElement.firstElementChild.style.backgroundImage = `url('images/${parseInt(products.picture[hasard])}.jpg')`
    
    element.parentElement.lastElementChild.lastElementChild.innerText = products.price[hasard];
});
//

const minus = document.querySelectorAll('.infos-count-minus');
const mores = document.querySelectorAll('.infos-count-more');

// le cliaue sur le boutuon plus (+)
mores.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        let unit_price = parseInt(e.target.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild.innerText);
        e.target.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.innerText = parseInt(e.target.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.innerText) + unit_price;
        e.target.parentElement.children[1].innerText = parseInt(e.target.parentElement.children[1].innerText) + 1;
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerText = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerText) + 1;

        // calcul du prix total a l'appuis du bouton plus
        let total_count =0;
        document.querySelectorAll('.infos-price-name').forEach(element => {
            total_count += parseInt(element.innerText);
            return total_count;
        });

        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].lastElementChild.firstElementChild.innerText = total_count;
        //
    });
});
//

// le clique sur le bouton moins(-)
minus.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        let unit_price = parseInt(e.target.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild.innerText);
        if (parseInt(e.target.parentElement.children[1].innerText) > 0) {
            e.target.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.innerText = parseInt(e.target.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.innerText) - unit_price;
            e.target.parentElement.children[1].innerText = parseInt(e.target.parentElement.children[1].innerText) - 1;
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerText = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerText) - 1;

            // calcul du prix total a l'appuis du bouton moins
            let total_count =0;
            document.querySelectorAll('.infos-price-name').forEach(element => {
                total_count += parseInt(element.innerText);
                return total_count;
            });

            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].lastElementChild.firstElementChild.innerText = total_count;
            //
        } else {
            alert('Euh operation IMPOSSIBLE');
        }
    });
});

// Rechercher les elements

const filters = document.querySelectorAll('.infos-details-name')

document.querySelector(".search-img").addEventListener('click', (e)=>{
    if(e.target.parentElement.firstElementChild.value != ""){
        let value_search = _.capitalize(e.target.parentElement.firstElementChild.value);
        filters.forEach(element => {
            if (element.innerText != value_search){
                element.parentElement.parentElement.parentElement.classList.add('search-push')
                return element;
            }
            element.parentElement.parentElement.parentElement.classList.remove('search-push')
        });
    } 
    else{
        filters.forEach(element => {
            if(element.parentElement.parentElement.parentElement.classList.contains('search-push')){
                element.parentElement.parentElement.parentElement.classList.remove('search-push') ;
            }
        });
    }
})