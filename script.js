// // 1) конвертор
// const usdToEur = 0.88
// let usd = prompt("Введите сумму в долларах")
// alert(`В евро это: ${usd * usdToEur} €`)

// // 2) Флешка
// let volume = prompt("Введите объем флешки в ГБ")
// const volume2 = 820
// let amount = Math.floor((volume * 1024) / volume2)
// alert(`На такую флешку поместиться ${amount} файла/(ов) по 820 мб`)

// // 3) Шоколадка
// let totalMoney = prompt("Богач, сколько же у тебя денег в кармане? (грн)")
// let chocoCost = prompt("Сколько стоит шоколадка? (грн)")
// let chocoAmount = Math.floor(totalMoney / chocoCost)
// let change = totalMoney - chocoCost * chocoAmount
// alert(`Поздравляю! Ты можешь позволить купить себе ${chocoAmount} таких шоколадок, сдачи останется ${change} грн`)

// // 4) Задом наперед
// let userNumber = prompt("Введите 3-значное число")
// let cutNumber1 = Math.floor(userNumber / 10)
// alert(`Задом наперед - ${userNumber % 10}` + `${cutNumber1 % 10}` + `${Math.floor(userNumber / 100)}`)

// 5) Четность
let userNumber = prompt("Введите целое число")
let even = (userNumber % 2 !== 1) && alert("Четное")
let odd = (userNumber % 2 !== 0) && alert("Нечетное")
