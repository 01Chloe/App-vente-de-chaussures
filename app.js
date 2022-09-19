//faire apparaitre la navigation au click sur le bouton hamburger
const btnHamburger = document.querySelector('.btn-hamburger')
const navbar = document.querySelector('.nav-haut')

btnHamburger.addEventListener('click', handleNavigation)

function handleNavigation() {
     navbar.classList.toggle('active')
     btnHamburger.classList.toggle('active')
}


//changer les photos au click
const thumbnails = document.querySelectorAll('.thumbnail')
const picture = document.querySelector('.picture')

thumbnails.forEach(thumbnail => {
     thumbnail.addEventListener('click', () => {
          let index = thumbnail.getAttribute('data-index')
          picture.src = `chaussure${index}.jpg`;
     })
})


//changer le nombre d'articles
const btnLess = document.querySelector('.less')
const btnMore = document.querySelector('.more')
const number = document.querySelector('.num')
let num = 0

btnMore.addEventListener('click', () => {
     num++;
     if(num > 10) {
          num = 10;
     }
     number.textContent = num;
})

btnLess.addEventListener('click', () => {
     num--;
     if(num < 0) {
          num = 0;
     }
     number.textContent = num;
})

//ajouter au panier
const btnBuy = document.querySelector('.buy')
const congruatAdd = document.querySelector('.pop-up-add')
btnBuy.addEventListener('click', () => {
     if(num >= 1) {
          congruatAdd.classList.add('active')
          setTimeout(() => {
               congruatAdd.classList.remove('active')
          }, 1000)
     }
})
