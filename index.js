/* 0. VIÊT CHƯƠNG TRÌNH KIỂM TRA N CÓ PHẢI SỐ NGUYÊN TỐ HAY KHÔNG */
// var inputNumber = Number(prompt("Nhập vào số cần kiểm tra", 0))
// var isPrime = true;
// if (inputNumber < 2) {
//     isPrime = false;
// }
// if (isPrime) {
//     for (var i = 2; i <= Math.sqrt(inputNumber); i++) {
//         if (inputNumber % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     alert(inputNumber + " là số nguyên tố")
// } else {
//     alert(inputNumber + " không phải là số nguyên tố") 
// }

/* 1. VIẾT CHƯƠNG TRÌNH IN RA CÁC SỐ TỪ 1 ĐẾN N */
// var inputNumber = prompt("Nhập vào n", 0)
// console.log("Các số từ 1 đến " + inputNumber + " là:" )
// for (var i = 0; i <= inputNumber; i++) {
//     console.log(i);
// }

/* 2. VIẾT CHƯƠNG TRÌNH IN RA CÁC SỐ LẺ TỪ 1 ĐẾN N */
// var inputNumber = prompt("Nhập vào n", 0)
// console.log("Các số lẻ từ 1 đến " + inputNumber + " là: ")
// for(i = 1; i <= inputNumber; i++) {
//     if(i % 2 != 0)
//     console.log(i);
// }

/* 3. VIẾT CHƯƠNG TRÌNH IN RA CÁC SỐ LẺ TỪ 1 ĐẾN N */
// var inputNumber = prompt("Nhập vào n", 0)
// console.log("Các số chẵn từ 1 đến " + inputNumber + " là: ")
// for(i = 0; i <= inputNumber; i++) {
//     if(i % 2 == 0)
//     console.log(i);
// }

/* 4. VIẾT CHƯƠNG TRÌNH IN RA CÁC SỐ NGUYÊN TỐ TRONG KHOẢNG TỪ 1 ĐẾN N */
// var inputNumber = Number(prompt("Nhập vào n", 0))
// console.log("Các số nguyên tố trong khoảng từ 1 đến " + inputNumber + " là")
// var dem = 0
// Boolean ;isPrime = true
// for (var i = 2; i <= inputNumber; i++) {
//     isPrime = true;
//     for(var j = 2; j <= Math.sqrt(i); j++) {
//         if(i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime) {
//         dem++;
//         console.log(i);
//     }
// }

/* 5. VIẾT CHƯƠNG TRÌNH TÍNH TỔNG TỪ 1 ĐẾN N */
// var inputNumber = prompt("Nhập vào n", 0)
// var total = 0;
// for(var i = 1; i <= inputNumber; i++)  {
//     total = total + i;
// }
// console.log("Tổng từ 1 đến " + inputNumber + " là: " + total)

/* 6. VIẾT CHƯƠNG TRÌNH TÍNH TỔNG BÌNH PHƯƠNG CỦA CÁC SỐ TỪ 1 ĐẾN N */
// var inputNumber = prompt("Nhập vào n", 0)
// var total = 0;
// for(var i = 1; i <= inputNumber; i++) {
//     total = total + i * i;
// }
// console.log("Tổng bình phương từ 1 đến " + inputNumber + " là: " + total)

/* 7. VIẾT CHƯƠNG TRÌNH TÍNH TỔNG SỐ LẺ TRONG KHOẢNG TỪ 1 ĐẾN N*/
// var inputNumber = prompt("Nhập vào n", 0)
// var total = 0;
// for(var i = 1; i <= inputNumber; i++)  {
//     if(i % 2 !=0) {
//         total = total + i;
//     }
// }
// console.log("Tổng từ 1 đến " + inputNumber + " là: " + total)

/* 8. VIẾT CHƯƠNG TRÌNH KIỂM TRA SỐ N CÓ TOÀN SỐ LẺ TẠO THÀNH HAY KHÔNG*/
// var inputNumber = prompt("Nhập vào n", 0)
// var sole = true;
// if(inputNumber % 2 != 0) {
//     sole = false;
//     console.log("YES !")
// }else {
//     console.log("NO !")
// } // Một số trường hợp vẫn sai

/* 9. VIẾT CHƯƠNG TRÌNH IN BẢNG CỬU CHƯƠNG RA MÀN HÌNH*/
// for(var i = 2; i <= 9; i++) {
//     for(var j = 1; j <= 10; j++) {
//         document.write(i + "x" + j + "=" + (i * j));
//         document.write("</br>")
//         document.write("\n");
//     }
//     document.write("</br>")
// }