// Задача 1
// const extractNumbers = (str) => {
//     return (str.match(/\d/g) || []).map(Number);
// }
// console.log(extractNumbers("a1fg5hj6"))// вернёт [1, 5, 6]


//Задача 2
// const count = () => {
//     let a = 0
//     let b = 1
//
//     const interval = setInterval(() => {
//         console.log(a)
//         const next = a + b
//         a = b
//         b = next
//
//         if (a > 144) {
//             clearInterval(interval)
//         }
//     }, 1000)
// }
// count()


// Задача 3
// const products = async () => {
//     try {
//         const res = await fetch(`https://fakestoreapi.com/products`)
//         const data = await res.json()
//         data.forEach(item => {
//             console.log(item.title)
//         })
//
//     } catch (e) {
//         console.log(e)
//     }
// }
// products()

// Задача 4
// const btn = document.querySelector('.btn')
// const items = document.querySelectorAll('.btn_item')
//
// btn.onclick = (event) => {
//     if (event.target.classList.contains('btn_item')) {
//         const color = event.target.getAttribute('data-color')
//         items.forEach((item) => {
//             item.style.background = ''
//         })
//         event.target.style.background = color
//     }
// }

// Задача 5


// Задача 6
const count = document.querySelector('#counter');
// let counter = 0;
//
// const interval = setInterval(() => {
//     counter++;
//     count.textContent = counter;
//
//     if (counter >= 100) {
//         clearInterval(interval);
//     }
// }, 1);

// Задача 7
const button = document.querySelector('.button')

const getData = async () => {
    try {
        const res = await fetch('data.json')
        const data = await res.json()
        console.log(data)

    } catch (e){
        console.log(e)
    }
}

button.onclick = getData



