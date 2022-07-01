// do {
//     let numero1 = parseFloat(prompt("ingresa la edad de tu mascota"))
//     let numero2 = parseFloat(prompt("ingrese el tamaño de su mascota"))
//     let operacion =prompt("ingrese suma")}
// while (isNaN(edad) || isNaN(numero2))


// switch (operacion) {
//     case "+":
//         alert(numero1+ numero2)
//     case "2":
//         alert(edad * 7 + 2)
//     case "3":
//         alert("28")
//     case "4":
//         alert("32")
//     case "5":
//         alert("36")
//     case "6":
//         alert("40")
//     case "7":
//         alert("44")
//     case "8":
//         alert("48")
//     case "9":
//         alert("52")
//     case "10":
//         alert("56")
//     case "11":
//         alert("60")
//     case "12":
//         alert("64")
//     case "13":
//         alert("68")
//     case "14":
//         alert("72")
//     case "15":
//         alert("76")
//     case "16":
//         alert("80")

//     default:
//         alert("Edad no calculable")
//         break
// }


let numero1, numero2, operacion
do {
    numero1 = parseFloat(prompt("ingrese edad de su mascota"))
    numero2 = prompt("ingrese 1 si es pequeño y dos si es grande")
    operacion = prompt("ingrese  el nombre de su mascota")
} while (isNaN(numero1) || isNaN(numero2))


if (numero2 === 1) {
    switch (numero2) {
        case "1":
            alert("15")
            break
        case "2":
            alert("23")
            break
        case "3":
            alert("28")
            break
        case "4":
            alert("32")
            break
        case "5":
            alert("36")
            break
        case "6":
            alert("40")
            break
        case "7":
            alert("44")
            break
        case "8":
            alert("48")
            break
        case "9":
            alert("52")
            break
        case "10":
            alert("56")
            break
        case "11":
            alert("60")
            break
        case "12":
            alert("64")
            break
        case "13":
            alert("68")
            break
        case "14":
            alert("72")
            break
        case "15":
            alert("76")
            break
        case "16":
            alert("80")
            break

    }
}
else
    switch (numero2) {
        case "1":
            alert("14")
            break
        case "2":
            alert("17")
            break
        case "3":
            alert("30")
            break
        case "4":
            alert("36")
            break
        case "5":
            alert("40")
            break
        case "6":
            alert("42")
            break
        case "7":
            alert("46")
            break
        case "8":
            alert("50")
            break
        case "9":
            alert("54")
            break
        case "10":
            alert("58")
            break
        case "11":
            alert("62")
            break
        case "12":
            alert("66")
            break
        case "13":
            alert("70")
            break
        case "14":
            alert("74")
            break
        case "15":
            alert("75")
            break
        case "16":
            alert("82")
            break
    }

