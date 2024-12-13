const shoppingCart = document.querySelector('.shopping-cart')
const searchBox = document.querySelector('.search-logo-box')
const searchLogo = document.querySelector('.search-logo')
const searchInput = document.querySelector('.search__input')
const searchClear = document.querySelector('.search-clear-icon')
const searchTitle = document.querySelector('.search-title')

function openMenu () {

}

function openShoppingCart () {
    shoppingCart.style.left = '0'
    shoppingCart.style.width = '100%'
}

function openSearchBox () {
    searchInput.style.display = 'block'
    searchInput.focus()

    searchTitle.style.display = 'none'

    searchLogo.style.transform = 'scale(1)'
    searchLogo.style.color = 'var(--coffee-color)'

    searchBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
        
    if (searchInput.value.length > 0) {
        searchClear.style.transform = 'scale(1)'
    } else {
        searchClear.style.transform = 'scale(0)'
    }
}

function clearSearch () {
    searchInput.value = ''
    searchInput.focus()
}

function search () {
    console.log(searchInput.value)
    // searchTitle.innerHTML = searchInput.value
}

function closeBox () {
    shoppingCart.style.left = '-5px'
    shoppingCart.style.width = '0'
}

// searchInput.addEventListener('keyup', event => {

//     if (event.key === 'Enter') {
//         search()
//     }
    
//     if (searchInput.value.length > 0) {
//         searchClear.style.transform = 'scale(1)'
//     } else {
//         searchClear.style.transform = 'scale(0)'
//     }
// })

window.addEventListener('load', () => {
})

// window.addEventListener('click', e => {

//     if (e.target.id !== 'search' && e.target.id !== 'close-box' && e.target.id !== 'search-input') {
//         searchInput.style.display = 'none'
//         searchTitle.style.display = 'block'
//         searchLogo.style.transform = 'scale(0)'
//         searchClear.style.transform = 'scale(0)'
//         searchBox.style.backgroundColor = 'rgba(255, 255, 255, 0.129)'
//     }

// })

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 600) {
//         searchBox.style.display = 'none'
//     } else {
//         searchBox.style.display = 'flex'
//     }
// })

