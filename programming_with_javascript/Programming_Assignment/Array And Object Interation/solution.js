// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (const item of dairy) {
        console.log(item)
    }
}

// logDairy()

// Task 2
const animal = {
    canJump: true
}

const bird = Object.create(animal)

bird.canFly = true

bird.hasFeathers = true

function birdCan() {
    for (const item of Object.entries(bird)) {
        console.log(`${item[0]}: ${item[1]}`)
    }
}

// Task 3
function animalCan() {
    for (item in bird) {
        console.log(`${item}: ${bird[item]}`)
    }
}