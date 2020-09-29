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
/* CHỮA BÀI */
// var n = 7513
// var check = true
// while (n > 0) {
//     var remain = n % 10
//     if (remain % 2 == 0) {
//         check = false;
//         break;
//     }
//     n = Math.floor(n / 10)
//     console.log("n: ", n, "remain: " + remain)
// }
// if(check) {
//     alert("N is combine of odd numbers")
// } else {
//     alert("N is not OKE !")
// }

/* 9. VIẾT CHƯƠNG TRÌNH IN BẢNG CỬU CHƯƠNG RA MÀN HÌNH*/
// for(var i = 2; i <= 9; i++) {
//     for(var j = 1; j <= 10; j++) {
//         document.write(i + " x " + j + " = " + (i * j));
//         document.write("</br>")
//     }
//     document.write("</br>")
// }


// BÀI TẬP BUỔI 8 (PHẦN 2)
/* 11. ĐẾM CÓ BAO NHIÊU KHOẢNG TRẮNG TRONG MỘT CHUỖI */
// function demKhoangTrang(str) {
//     var output = " Hello  world";
//     return str.split(" ").length;
// }
// document.write(demKhoangTrang(output));

/* 12. HÃY REMOVE TẤT CẢ CÁC KHOẢNG TRẮNG, SPACE VÀ ENTER TRONG MỘT CHUỖI */
// function xoaKhoangTrang() {
//     var output = "	Hello world   ";
//     output = output.replace(/ +/g, "");
//     document.write(output.trim());
// }
// xoaKhoangTrang();

/* 13. HÃY VIẾT CHƯƠNG TRÌNH ĐẢO NGƯỢC SAU S */
// function daonguocsau(str) {
//     return str.split("").reverse().join("");
// }
// document.write(daonguocsau("This is a beautiful day"));

/* 14. NHẬP VÀO CHUỖI S1 VÀ S2, CHO BIẾT VỊ TRÍ CỦA CHUỖI S2 TRONG S1 */
// function demvitri() {
//     var s1 = "This is a beautiful day";
//     var s2 = "is";
//     document.write(s1.indexOf(s2));
// }
// demvitri();

/* 15. VIẾT CHƯƠNG TRÌNH CHUẨN HÓA HỌ TÊN */
// function chuanHoaHoTen() {
//     var str="NguyeN THI tho tHu hA"
//     var chuanHoa=str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
//     document.write(chuanHoa);
// }
// chuanHoaHoTen();

/* 16. VIẾT CHƯƠNG TRÌNH LẤY ID NAME CỦA FACEBOOK*/
// function layID() {
//     var urlFB = "https://www.facebook.com/ngothucdat"
//     document.write(urlFB.slice(25));
// }
// layID();

/* 17. VIẾT HÀM SỐ TÍNH MIN, MAX CỦA 3 SỐ*/
// function maxOfArray(array) {
//     return Math.max.apply(Math, array);
//   }

// let array = [2,4,7];
// document.write(maxOfArray(array));

