const btnColor = document.getElementById("btn-color")
const btnText = document.getElementById("btn-text")

const myArray = [
    '#ff7f50',
    '#87cefa',
    '#da70d6',
    '#32cd32',
    '#6495ed',
    '#ff69b4',
    '#ba55d3',
    '#cd5c5c',
    '#ffa500',
    '#40e0d0'
];
btnColor.addEventListener('click', (e) => {
    const text = document.getElementById("change-text-color")
    // if (text.style.color === "blue") {
    //     text.style.color = 'red'
    // } else {
    //     text.style.color = 'blue'

    // }
    text.style.color = myArray[Math.floor(Math.random() * myArray.length)]
})

btnText.addEventListener('click', (e) => {
    const text = document.getElementById("change-text")

    if (text.textContent === "Hi!") {
        text.textContent = "Ho!"
    } else {
        text.textContent = "Hi!"
    }

});

// make an array with plenty of strings to randomize the text


