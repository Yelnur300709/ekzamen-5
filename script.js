// // tapsyrma 1

// // let num1 = +prompt("1sandi engiziniz")
// // let tanba = prompt("tanba engiziniz")
// // let num2 = +prompt("2sandi engiziniz")

// // switch(tanba) {
// // case "-":
// //     alert(num1-num2)
// // break;
// // case "+":
// // alert(num1+num2)
// // break;
// // case "*":
// //     alert(num1*num2)
// // break;
// // case "/":num1/num2
// // alert(num1/num2)
// // break;
// //     default:
// //         break;
// // } 

// // alert(result(num2))



// tapsyrma 2
// let baha = prompt("Заттың бағасын енгізіңіз:");
// let kanshaZat = prompt("Қанша зат сатып алғыңыз келетінін енгізіңіз:");

// let barlikTenge = baha * kanshaZat;

// let scidka= 0;

// if (barlikTenge > 20000) {
//     scidka = 0.30; 
// } else if (barlikTenge > 10000) {
//     scidka = 0.20; 
// } else if (barlikTenge > 5000) {
//     scidka = 0.10;  
// }

// let barlikAksha = barlikTenge * (1 - scidka);

// alert(`Заттың жалпы құны: ${barlikTenge} теңге`);
// alert(`Жеңілдік: ${scidka * 100}%`);
// alert(`Соңғы төлем: ${barlikAksha} теңге`);


// // tapsyrma 3

// let secretNumber = 46; 
// let attempts = 0;

// function SandiTabiniz() {
//     while (true) {
//         let adamninjaziu = parseInt(prompt("1-100дін кіші болмау керек және одан үлкені болмау керек:"));
//         attempts++;

//         if (adamninjaziu < secretNumber) {
//             alert("kupia sani odan ulkenirek");
//         } else if (adamninjaziu > secretNumber) {
//             alert("kupia sani odan kishirek!");
//         } else if (adamninjaziu === secretNumber) {
//             alert("sen molodec");
//             alert("Сен\сіз " + attempts + "sonshama popitka ketirdiniz");
//             break;
//         } else {
//             alert("0 den nemese 100 den ulken bolmau kerek🤬😡");
//         }
//     }
// }

// SandiTabiniz();