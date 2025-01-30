// Base class (Animal)
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color
        this.energy = energy
    }

    isActive() {
        if (this.energy > 0) {
            this.energy -= 20
            console.log('Energy is decreasing, currently at:', this.energy)
        } else {
            this.sleep()
        }
    }

    sleep() {
        this.energy += 20
        console.log('Energy is increasing, currently at:', this.energy)
    }

    getColor() {
        console.log('Color:', this.color)
    }
}


// Sub-class (Cat)
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimbTrees = canClimbTrees
    }

    makeSound() {
        console.log('Sound:', this.sound)
    }
}


// Sub-class (Bird)
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }

    makeSound() {
        console.log('Sound:', this.sound)
    }
}


// Sub-class (HouseCat)
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound
    }

    makeSound(option) {
        if (option) {
            super.makeSound()
        } else {
            console.log('Sound:', this.houseCatSound)
        }
    }
}


// Sub-class (Tiger)
class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }

    makeSound(option) {
        if (option) {
            super.makeSound()
        } else {
            console.log('Sound:', this.tigerSound)
        }
    }
}


// Sub-class Parrot
class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy)
        this.canTalk = canTalk
    }

    makeSound(option) {
        if (option) {
            super.makeSound()
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}