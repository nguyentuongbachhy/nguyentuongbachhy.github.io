const dishes = [
    ['Italian pasta', 9.55],
    ['Rice with veggies', 8.65],
    ['Chicken with potatoes', 15.55],
    ['Vegetarian Pizza', 6.45]
]

function showInfoOfDishes(includeTax) {
    if (includeTax) {
        console.log('Prices with 20% tax:')
        dishes.forEach(item => {
            console.log(`Dish: ${item[0]} Price (incl.tax): $ ${item[1] * 1.2}`)
        })
    } else {
        console.log('Prices without tax:')
        dishes.forEach(item => {
            console.log(`Dish: ${item[0]} Price: $${item[1]}`)
        })
    }
}

showInfoOfDishes(true)
console.log('\n')
showInfoOfDishes(false)