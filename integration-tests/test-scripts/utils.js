function selectRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function selectUser(users) {
    return selectRandom(users);
}

export function selectPet(user) {
    const pets = user.pets;
    return selectRandom(pets);
}

function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

export function currentDate() {
    const date = new Date();
    return `${date.getUTCFullYear()}-${padDigits(date.getUTCMonth(), 2)}-${padDigits(date.getUTCDay(), 2)}`
}

export function generateDescription() {
    let description = [];
    for (var i = 0; i < 3; i++) {
        description.push(selectRandom(descriptions))
    }

    return description.join('\\n')
}

const descriptions = [
    "Feels good",
    "Eats well",
    "Has problems with toilet",
    "Has allergy",
    "Requires new food",
    "Lazy",
    "Sleeps too much",
    "Requires additional visit",
    "Needs medication",
    "Has problems with behaviour",
    "Pregnant"
]

export function normalize(s) {
    while (s.includes('\\n')) {
        s = s.replace('\\n', '\n')
    }
    return s
}

export function hasId(entities, id) {
    return entities.find(element => element.id == id)
}
