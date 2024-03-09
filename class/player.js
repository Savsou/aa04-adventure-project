const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory
        // if (itemName === this.currentRoom.getItemByName(itemName)) {
        //     this.items.push()
        // }
        let item = this.currentRoom.getItemByName(itemName);
        let itemIndex = this.currentRoom.items.findIndex(item => item.name.toLowerCase() ===
            itemName.toLowerCase())

        if (item) {
            this.currentRoom.items.splice(itemIndex, 1)
            this.items.push(item);
            console.log(`You took ${item}`)
        }

    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room
        let item = this.getItemByName(itemName);
        let itemIndex = this.items.findIndex(item => item.name.toLowerCase() ===
            itemName.toLowerCase())

        if (item) {
            this.items.splice(itemIndex, 1)
            this.currentRoom.items.push(item);
            console.log(`You dropped ${item}`)
        }

    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        // Your code here
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name
        return this.items.find(item => item.name.toLowerCase() === name.toLowerCase())
    }
}

module.exports = {
    Player,
};
