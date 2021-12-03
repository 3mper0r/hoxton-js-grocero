

// - Create state
// - Create a render function
// - Update state
// - Rerender

const state = {
    groceries: [
        {
            id: 1,
            name: 'beetroot',
            price: 0.35,
            inCart: 0
        },
        {
            id: 2,
            name: 'carrot',
            price: 0.35,
            inCart: 0
        },
        {
            id: 3,
            name: 'apple',
            price: 0.35,
            inCart: 0
        },
        {
            id: 4,
            name: 'apricot',
            price: 0.35,
            inCart: 0
        },
        {
            id: 5,
            name: 'avocado',
            price: 0.35,
            inCart: 0
        },
        {
            id: 6,
            name: 'bananas',
            price: 0.35,
            inCart: 0
        },
        {
            id: 7,
            name: 'bell-pepper',
            price: 0.35,
            inCart: 0
        },
        {
            id: 8,
            name: 'berry',
            price: 0.35,
            inCart: 0
        },
        {
            id: 9,
            name: 'blueberry',
            price: 0.35,
            inCart: 0
        },
        {
            id: 10,
            name: 'eggplant',
            price: 0.35,
            inCart: 0
        }
    ]
}

function renderStoreItems() {
    const storeUl = document.querySelector('.item-list.store--item-list')
    storeUl.innerHTML = ""

    for (const item of state.groceries) {
        const liEl = document.createElement('li')

        const divEl = document.createElement('div')
        divEl.setAttribute('class', 'store--item-icon')

        const imgEl = document.createElement('img')

        const pathNumber = item.id.toString().padStart(3, "0")
        imgEl.setAttribute('src', `/assets/icons/${pathNumber}-${item.name}.svg`)

        const addButton = document.createElement('button')
        addButton.textContent = 'Add to Cart'

        divEl.append(imgEl)
        liEl.append(divEl, addButton)

        storeUl.append(liEl)
    }
}

function renderCartItems() {
    // clear cart ul
    const cartUl = document.querySelector('.item-list.cart--item-list')
    cartUl.innerHTML = ""


    for (const item of store.groceries) {
        const liElcart = document.createElement('li')

        const imgElcart = document.createElement('img')

        imgElcart.setAttribute('class', 'cart--item-icon')
        const pathNumber = item.id.toString().padStart(3, "0")
        imgElcart.setAttribute('src', `/assets/icons/${pathNumber}-${item.name}.svg`)
        imgElcart.setAttribute('alt', item.name)

        const pElcart = document.createElement('p')
        pElcart.textContent = item.name

        const minusButton = document.createElement('button')
        minusButton.setAttribute('class', 'quantity-btn remove-btn center')
        minusButton.textContent = "-"

        const spanElcart = document.createElement('span')
        spanElcart.setAttribute('class', 'quantity-text center')
        spanElcart.textContent = item.inCart

        const plusButton = document.createElement('button')
        plusButton.setAttribute('class', 'quantity-btn add-btn center')
        plusButton.textContent = "+"


        liElcart.append(imgElcart, pElcart, minusButton, spanElcart, plusButton)
        cartUl.append(liElcart)
    }
}

function render() {
    renderStoreItems()
    renderCartItems()
}


render()