const QUOTES = document.querySelector(".quote")


const arr = [

    "May the Force be with you.” -Star Wars, 1977",
    "There's no place like home.” -The Wizard of Oz, 1939",
    "i'm the king of the world!” -Titanic, 1997",
    "Carpe diem. Seize the day, boys. Make your lives extraordinary -Dead Poets Society, 1989",
    "Elementary, my dear Watson.” -The Adventures of Sherlock Holmes, 1939",
    "It's alive! It's alive! -Frankenstein, 1931",
    "My mama always said life was like a box of chocolates. You never know what you're gonna get.” -Forrest Gump, 1994",
    "I'll be back.” -The Terminator, 1984",
    "You're gonna need a bigger boat.” -Jaws, 1975",
    "Here's looking at you, kid.” -Casablanca, 1942",

]


arr.sort(function(){
    return Math.random() - 0.5
})

QUOTES.textContent = arr[0]