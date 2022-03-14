// console.log("Merhaba");
// console.log(1234);
// console.log(true);
// console.log([1, 2, 3]);
// console.error("hata oluştu");
// console.warn("bir uyarı oluştu");

// // tek satırlık yorum satırı

// /*
//     yorum satırları
//     yorum satırları
//     yorum satırları
//     yorum satırları

// */

// console.clear();

// Ders2: Değişkenler

// var age;
// console.log(age);

// age = 20;
// console.log(age);

// var fullname = "İlayda Şeker";
// console.log(fullname);

// fullname = "Mehmet Şeker";
// console.log(fullname);

// // Değişken Tanımlama Kuralları

// // Sayısal ifadeyle başlayamaz

// var yas1;
// var _yas2;
// var $yas3;

// /// Komut isimleriyle tanımlama yapılamaz.

// // Birden fazla kelime

// var ad = "İlayda";
// var soyad = "Şeker";

// var ad_soyad = "İlayda Şeker";
// var adSoyad = "Mehmet Şeker";

// // case sensitive ( büyük küçük duyarlılığı)

// var firstName = "İlayda";
// var FirstName = "Mehmet";

// console.log(firstName);
// console.log(FirstName);

// // var , let , const

// let city = "Kocaeli";
// console.log(city);

// const email = "abc@gmail.com";
// console.log(email);

// email = "bcd@gmail.com";
// console.log(email);

// *************

// Ders3: Değişken Tipleri

// Pritive Types

// // string
// let firstName = "İlayda";

// // Number

// let age = 20;
// let money = 100.5;

// //Boolean

// let isActive = false;

// //null

// let job = null;

// //undefined

// let car;

// console.log(typeof car);

// // Reference Types - Objects

// //Array
// let names = ["Ali", "Ahmet", "Can"];

// // Object

// let address = {
//   city: "Kocaeli",
//   country: "Türkiye",
// };

// // Function

// var calculateAge = function () {
//   return 0;
// };
// console.log(typeof calculateAge);

// Ders4: Tür Dönüşümü

// let val;

// // number to string
// val = String(10);

// // bool to string

// val = String(true);

// //date to string

// val = String(new Date());

// // array to string

// val = String([1, 2, 3, 4]);

// //toString()

// val = (10).toString();
// val = false.toString();

// // string to Number

// val = Number("10");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("a");
// val = Number([1, 2, 3, 4]);

// // parseInt
// //parseFloat

// val = parseInt("10");
// val = parseInt("10.5");
// val = parseFloat("10.5");

// console.log(val);

// console.log(typeof val);

// console.log(val.toFixed(2));

// DErs5 184. Değişkenler

// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

// var customerName = "İlayda";
// var customerLastName = "Şeker";

// var fullName = "İlayda Şeker";
// var musteriId = "12345645645";

// var total = 205.6;
// var gender = false; // erkek true, kadın false

// //object

// var address = {
//   city: "Kocaeli",
//   district: "İzmit",
//   body: "Ömerağa mah. No:45",
// };

// //array
// var hobbies = ["Sinema", "Kitap", "Spor"];

// // ** Aşağıdaki siparişlerin toplamını hesaplayınız.

// var order1 = Number("100");
// var order2 = Number("150");

// var totalOrder = order1 + order2;
// console.log(totalOrder);

// // ** Aşağıdaki siparişlerin toplamını hesaplayınız.

// var order3 = Number("100.2");
// var order4 = Number("150.5");
// var totalOrder2 = order3 + order4;
// console.log(totalOrder2);

// // ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

// var order4 = parseInt("100.2");
// var order5 = parseInt("150.5");

// var totalOrder3 = order4 + order5;
// console.log(totalOrder3);

// // ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.

// const yearOfBirth = 1986;
// // yearOfBirth = 1987;

// console.log(new Date().getFullYear() - yearOfBirth);

// // ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

// let course = "Modern Javascript Kursu";

// console.log(course.length);

// Operatörler

// let val;
// const a = 10;
// const b = 5;
// const c = 5;

// let d = 3;

// // 1- Aritmetik Operaatörler
// val = a + b;
// val = a - b;
// val = a * b;
// val = a / b;
// val = a % b;
// val = d++;
// val = ++d;
// val = --d;
// val = d--;

// // 2- Atama Operatörleri
// val = a;
// val += a; //val = val + a;
// val -= a; // val = val - a;
// val *= a; // val = val * a;
// val /= a; // val = val / a;
// val %= a; // val = val % a;

// // 3- Karşılaştırma Operatörleri

// val = a == b;
// val = b == c;
// val = b === c; // değer kontrolü & type
// val = 5 === "5;";
// val = a != b;
// val = a !== b;
// val = a > b;
// val = b < a;
// val = a >= b;
// val = 5 >= 5;
// val = a <= b;

// // 4- Mantıksal Operatörler

// // && (And)

// // true && true => true
// // true && false => false
// // false && false => false

// val = a > b && a > c;
// val = a > b || a < c;
// val = !(a > b);

// // || (Or)

// // true && true => true
// // true && false => true
// // false && false => false

// // ! (Not)
// // !true => false
// // !false => true
// console.log(val);
// console.log(typeof val);

// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

// let IndexCan;
// let IndexAda;

// const kgCan = 60;
// const kgAda = 40;

// const heigtCan = 1.7;
// const heigtAda = 1.5;

// IndexAda = kgAda / (heigtAda * heigtAda);
// IndexCan = kgCan / (heigtCan * heigtCan);

// console.log(IndexAda.toFixed(2), IndexCan.toFixed(3));

// let adaHigherIndex = IndexAda > IndexCan;
// let canHigherIndex = IndexCan > IndexAda;

// console.log(
//   "Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : " + adaHigherIndex
// );

// console.log(
//   "Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : " + canHigherIndex
// );

// let AdaZayif = IndexAda > 0 && IndexAda <= 18.4;
// let AdaNormal = IndexAda > 18.5 && IndexAda <= 24.9;
// let AdaKilolu = IndexAda >= 25 && IndexAda <= 29.9;
// let AdaSisman = IndexAda >= 30 && IndexAda <= 34.9;

// console.log("Ada zayıf:" + AdaZayif);
// console.log("Ada'nın kilosu normal:" + AdaNormal);
// console.log("Ada kilolu mu:" + AdaKilolu);
// console.log("Ada şişman mı:" + AdaSisman);

//  Date Object

// let d = new Date();
// let birthday = new Date(1990, 1, 5);
// // Set Methods

// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);
// d.setMinutes(45);
// d.setSeconds(20);

// // Get Methods

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());
// console.log(d.getDate() - birthday.getDate());

// console.log(d);
// console.log(typeof d);

// UYGULAMAAA DERS 178

// ** Şimdiki tarihin gün ay ve yıl bilgisini yaazdırınız.

// var dt = new Date();

// console.log(dt);
// console.log(dt.getMonth() + 1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());

// // ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

// var dtA = new Date("8/24/2010 14:50:10");
// var dtB = new Date(2010, 7, 24, 14, 50, 10);

// console.log(dtA);
// console.log(dtB);

// // 1/1/1990 tarihinden bir  gün öncesini gösteriniz.

// var dtC = new Date("1/1/1990");
// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth - 1);

// console.log(dtC);
// // iki tarih arasındakş geçen zamanı bulunuz.

// var start = new Date("1/1/1990");
// var end = new Date("2/10/1992");

// var milisecond = end - start;
// var saniye = milisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gun = saat / 24;

// console.log("milisecond :" + milisecond);
// console.log("saniye :" + saniye);
// console.log("dakika :" + dakika);
// console.log("saat :" + saat);
// console.log("gun :" + gun);

// // Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?

// var annelerGunu = new Date();
// annelerGunu.setHours(0, 0, 0, 0);
// annelerGunu.setFullYear(2019);
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4);

// while (annelerGunu.getDay() != 0) {
//   annelerGunu.setDate(annelerGunu.getDate() + 1);
// }
// annelerGunu.setDate(annelerGunu.getDate() + 7);
// console.log(annelerGunu);

// // * Yaş hesaplama nasıl yapılır?

// var birthday = new Date("8/1/1985");
// var ageDifMs = Date.now() - birthday.getTime();
// var ageDate = new Date(ageDifMs);

// console.log(ageDate.getFullYear() - 1970);

// // console.log(birthday.getTime());
// // console.log(Date.now());

// Numbers

// let val;

// //val= Number ('10');

// // val = parseInt('10');

// // val= parseFloat('10.5');
// // val = parseInt("a10a");

// // val = isNaN("10");

// // val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(5);
// val = num.toFixed(2);

// val = Math.PI;
// val = Math.round(2.4);
// val = Math.round(2.7);
// val = Math.ceil(2.4);
// val = Math.ceil(2.6);
// val = Math.floor(2.4);
// val = Math.floor(2.7);
// val = Math.sqrt(64);
// val = Math.pow(2, 4);
// val = Math.abs(-100);
// val = Math.min(1, 2, 3, 2, 4, 9);
// val = Math.max(4, 5, 6, 4, 98, 7);
// val = Math.floor(Math.random() * 100 + 1);

// // console.log(val);
// // console.log(typeof val);

// //UYGULAMAAAA//

// var num = 15.123456789;

// // toplamda 3 basamaklı sayı kullan
// console.log(num.toPrecision(3));

// // ondalık kısmı 3 basamakta sınırla
// console.log(num.toFixed(4));

// // en yakın sayıya yuvarla
// console.log(Math.round(num));

// // aşağı yuvarla
// console.log(Math.floor(num));

// // yukarı yuvarla
// console.log(Math.ceil(num));

// // 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul
// console.log(Math.min(1, 2, 10, 56, 20));
// console.log(Math.max(1, 2, 10, 56, 20));

// // sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.
// var min = 50;
// var max = 100;

// console.log(Math.floor(min + Math.random() * (max - min)));

// /* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
//    ** Brüt maaş  : 3700 TL
//    ** Brüt mesai : 10.3 TL
//    Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
//    Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
// */

// var brutMaas = 3700;
// var mesaiUcreti = 10.3;
// var mesaiSuresi = 42;

// var toplamBrutMaas = brutMaas + mesaiUcreti * mesaiSuresi;

// var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;

// console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));

// // // Strings

// // const firstName = "Sadık";
// // const lastName = "Turan";
// // let hobbies = "sinema spor kitap yazılım";
// // const age = 35;

// // let val;

// // // string concatenation

// // val = firstName + " " + lastName;
// // val = "Sadık";
// // val += " Turan";

// // val =
// //   "Benim adım " +
// //   firstName +
// //   " " +
// //   lastName +
// //   " ve yaşım " +
// //   age +
// //   " izmit'te yaşıyorum.";

// // //string concat
// // val = firstName.concat(" ", lastName);

// // // string uppercase - lowercase
// // // val = val.toUpperCase();
// // // val = val.toLowerCase();

// // // // string replace
// // // val = "  " + val.replace("sadik", "ilayda") + "     ";

// // // // trim
// // // val = val.trim();

// // // // substring
// // // // val = val.substring(3,8);

// // // // slice
// // // // val = val.slice(6);

// // // //val = val.indexOf('x');

// // // //val = val[1];

// // // //string length
// // // //val = val.length;

// // // val = hobbies.split(" ");

// // // console.log(val);
// // // console.log(typeof val);

// // // Demo : Strings

// // var sentence =
// //   "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

// // var url =
// //   "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// // // cümle kaç karakterlidir ?
// // console.log(sentence.length);

// // // kaç kelimeden oluşuyor ?
// // console.log(sentence.trim().split(" ").length);

// // // Tüm cümleyi küçük harfe çevirin.
// // console.log(sentence.toLowerCase());
// // console.log(sentence.toUpperCase());

// // // Cümlenin başındaki ve sonundaki boşlukları siliniz.
// // console.log(sentence.trim());

// // // '-' karakterini silin.
// // console.log(sentence.replace("-", ""));

// // // url'nin içinden str kısmını çıkarınız.
// // var str = "http://";
// // console.log(url.substr(str.length));
// // console.log(url.slice(str.length));

// // // url hangi protocol'u kullanmaktadır ? (http,https)
// // console.log(url.startsWith("http"));
// // console.log(url.startsWith("https"));

// // // url, '.com' ifadesini içeriyor mu?
// // console.log(url.indexOf(".com"));
// // console.log(url.includes(".com"));

// // // url string ifadesini geçerli bir url olarak düzenleyiniz.

// // console.log(
// //   url
// //     .toLowerCase()
// //     .replace(/ /g, "-")
// //     .replace(/ı/g, "i")
// //     .replace(/ü/g, "u")
// //     .replace(/ö/g, "o")
// //     .replace(/ş/g, "s")
// //     .replace(/ç/g, "c")
// // );

// // Template  Literals

// const fullName = "Sena Turan";
// const city = "Kocaeli";
// const yearOfBirth = 2005;

// let val;

// val =
//   "my name is " +
//   fullName +
//   " I'm " +
//   (2018 - yearOfBirth) +
//   " years old " +
//   " and I live in " +
//   city;

// val = `my name is ${fullName} I'm ${
//   2018 - yearOfBirth >= 18 ? "over 18" : "under 18"
// } and I live in ${city}`;

// console.log(val);

// Arrays

let names = ["çınar", "sena", "ada", "yiğit"];
let years = [2017, 1970, 1990, 1998];
let mix = ["sadık", "turan", 1983, null, undefined, ["sinema", "kitap"]];

// // get array item
// console.log(names[0])
// console.log(names[3])

// // set array item
// names[names.length]='emel';

// // add item
// years.push(1986);
// years.unshift(1986);

// // remove item
// years.pop();
// years.shift();

// //indexof
// let index = names.indexOf('ada');
// console.log(' index : '+index);

// // reverse
// names.reverse();

// // sort
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val);

// splice
// console.log(names);
// names.splice(0,1);

// function over18(year) {
//   let age = 2018 - year;
//   return age >= 18;
// }

// // find
// // let val = years.find(over18);

// // filter
// let val = years.filter(over18);

// console.log(val);

// console.log(names);
// console.log(names.length);
// console.log(typeof names);

// // console.log(years);
// // console.log(mix);

// Demo : Arrays

// // "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

// var arr = ["Bmw", "Merdeces", "Opel", "Mazda"];
// // var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")

// console.log(arr);

// // Dizi kaç elemanlıdır ?
// console.log(arr.length);

// // Dizinin ilk ve son elemanı nedir ?
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[arr.length - 1]);

// // "Renault" değerini dizinin sonuna ekleyin.
// // arr[4] = "Renault";
// arr[arr.length] = "Renault";
// arr[arr.length] = "Fiat";

// arr.push("Toyota");

// // "Toyota" değerini dizinin başına ekleyin.
// arr.unshift("Seat");

// // "Seat" değerini siliniz.
// arr.shift("Seat");

// // "Toyota" değerini siliniz.
// arr.pop("Toyota");

// // Dizi elemanlarını ters çevirin
// arr.reverse();

// // Dizi elemanlarını alfabetik olarak sıralayın.
// arr.sort();

// // [1,2,5,80] dizisini sıralayın.
// var numbers = [1, 2, 5, 80, 15];

// function compare(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// console.log(numbers.sort(compare));

// // "Opel" değeri dizinin bir elemanımıdır ?
// console.log(arr);
// console.log(arr.indexOf("Opel"));
// console.log(arr.includes("Opel"));

// // var str = "Chevrolet,Dacia";
// // ifadesini diziye çeviriniz.

// var str = "Chevrolet,Dacia";
// var arr2 = str.split(",");
// console.log(arr2);

// // Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
// var arr3 = arr.concat(arr2);
// console.log(arr3);

// // Oluşturulan diziden son 2 elemanı siliniz.

// // console.log(arr3.pop());
// // console.log(arr3.pop());

// // console.log(arr3.splice(6,2));
// console.log(arr3.slice(6, 8));

// console.log(arr3);

// /* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

//      studentA : Yiğit Bilgi 2010
//      StudentB : Sena Turan  1999
//      studentC : Ahmet Turan 1998

// */

// var studentA = ["Yiğit", "Bilgi", 2010];
// var studentB = ["Sena", "Turan", 1999];
// var studentC = ["Ahmet", "Turan", 1998];

// var students = [studentA, studentB, studentC];

// console.log(students[0]);

// console.log(students[0][0]);
// console.log(students[0][1]);
// console.log(students[0][2]);

// console.log(students[1][0]);
// console.log(students[1][1]);
// console.log(students[1][2]);

// console.log(students[2][0]);
// console.log(students[2][1]);
// console.log(students[2][2]);

// console.log(students);

// // if/else statements

// const firstName = "Sena";
// const age = 19;
// const isStudent = false;
// const school = "university";

// // if(firstName === 'Sena'){
// //     console.log('Merhaba Sena');
// // }

// // if (age === 19){
// //     console.log('yaşınız 19');
// // }

// // if (isStudent){
// //     console.log('Merhaba öğrenci');
// // }else{
// //     console.log('Merhaba işler nasıl');
// // }

// // if (age>=18){

// //     if ((school == 'university') || (school == 'high school')){
// //         console.log('ehliyet alabilirsiniz');
// //     } else{
// //         console.log('eğitim durumunuz yetersiz');
// //     }

// // }else{
// //     console.log('ehliyet alamazsınız');
// // }

// // if (age > 0  && age<12 ){
// //     console.log(`${firstName} is a child`);
// // }else if (age >=13 && age <=19){
// //     console.log(`${firstName} is a teenager`);
// // }else{
// //     console.log(`${firstName} is an adult`);
// // }

// //undefined

// if (typeof id !== "undefined") {
//   console.log("id: " + id);
// } else {
//   console.log("no id");
// }

// switchhhhh

// switch statements

// let category = 'beyaz eşya';

// switch(category){

//     case 'telefon':
//        console.log('telefon kategorisi');
//     break;

//     case 'bilgisayar':
//        console.log('bilgisayar kategorisi');
//     break;

//     default:
//        console.log('yanlış kategori');
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = 'Hafta Sonu';
//         break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day = 'Hafta içi';
//         break;
// }

// console.log(`bugün ${day}`);

// const age = 9;
// const firstName = "Sena";

// switch (true) {
//   case age >= 0 && age <= 12:
//     console.log(`${firstName} is a child`);
//     break;
//   case age >= 13 && age <= 19:
//     console.log(`${firstName} is a teenager`);
//     break;
//   default:
//     console.log(`${firstName} is an adult`);
// }

// var trafigeCikis = new Date('04/20/2014');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun =Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
//     console.log('2.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log('3.servis bakım süreniz gelmiştir.')
// }else{
//     console.log('bilinmeyen bir süre');
// }

// console.log(trafiktekiGun);

// var result = prompt("who's there ? ");

// if (result == "cancel") {
//   console.log("cancelled");
// } else if (result == "Admin") {
//   var password = prompt("enter your password : ");

//   if (password == "cancel") {
//     console.log("cancelled");
//   } else if (password == "1234") {
//     console.log("welcome Admin");
//   } else {
//     console.log("wrong password");
//   }
// } else {
//   console.log("I dont know you");
// }

// // Object Literals

// let val;

// let person = {
//     firstName : 'Çınar',
//     lastName : 'Turan',
//     age : 7,
//     hobbies : ['music','game'],
//     address : {
//         city : 'Kocaeli',
//         country : 'Türkiye'
//     },
//     getBirthYear : function(){
//         return 2018- this.age;
//     }
// };

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city'];
// val = person.getBirthYear();

// let people = [
//                 {firstName : 'Çınar',lastName:'Turan'},
//                 {firstName : 'Sena',lastName:'Turan'},
//                 {firstName : 'Seda',lastName:'Turan'}
//              ];

// val = people[2];
// val = people[2].firstName;

// for(let i =0; i<people.length;i++){
//     console.log(people[i].firstName);
// }

// // console.log(val);
// // console.log(typeof people);

/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/

// var aracBilgileri = [
//   {
//     id: "bmw116d_123",
//     model: "bmw 116d",
//     yil: 2015,
//     renk: "Beyaz",
//     servisKayitlari: [
//       {
//         id: "bmw116d_123_1",
//         tarih: "20.01.2016",
//         km: "13000",
//         ucret: 900,
//         detay: [
//           { id: "bmw116d_123_1_1", aciklama: "yağ değişimi", ucret: 300 },
//           { id: "bmw116d_123_1_2", aciklama: "filtre değişimi", ucret: 300 },
//           { id: "bmw116d_123_1_3", aciklama: "fren hidroliği", ucret: 300 },
//         ],
//       },
//       {
//         id: "bmw116d_123_2",
//         tarih: "10.01.2017",
//         km: "28000",
//         ucret: 1800,
//         detay: [
//           { id: "bmw116d_123_2_1", aciklama: "yağ değişimi", ucret: 350 },
//           { id: "bmw116d_123_2_2", aciklama: "filtre", ucret: 350 },
//           { id: "bmw116d_123_2_3", aciklama: "fren hidroliği", ucret: 300 },
//           { id: "bmw116d_123_2_3", aciklama: "balata", ucret: 800 },
//         ],
//       },
//     ],
//   },
//   {
//     id: "bmw118i_123",
//     model: "bmw 118i",
//     yil: 2015,
//     renk: "Beyaz",
//     servisKayitlari: [
//       {
//         id: "bmw118i_123_1",
//         tarih: "20.01.2016",
//         km: "13000",
//         ucret: 900,
//         detay: [
//           { id: "bmw118i_123_1_1", aciklama: "yağ değişimi", ucret: 300 },
//           { id: "bmw118i_123_1_2", aciklama: "filtre değişimi", ucret: 300 },
//           { id: "bmw118i_123_1_3", aciklama: "fren hidroliği", ucret: 300 },
//         ],
//       },
//       {
//         id: "bmw116d_123_2",
//         tarih: "10.01.2017",
//         km: "28000",
//         ucret: 1800,
//         detay: [
//           { id: "bmw116d_123_2_1", aciklama: "yağ değişimi", ucret: 350 },
//           { id: "bmw116d_123_2_2", aciklama: "filtre", ucret: 350 },
//           { id: "bmw116d_123_2_3", aciklama: "fren hidroliği", ucret: 300 },
//           { id: "bmw116d_123_2_3", aciklama: "balata", ucret: 800 },
//         ],
//       },
//     ],
//   },
//   {
//     id: "bmw320d_123",
//     model: "bmw 320d",
//     yil: 2015,
//     renk: "Beyaz",
//     servisKayitlari: [
//       {
//         id: "bmw320d_123_1",
//         tarih: "20.01.2016",
//         km: "13000",
//         ucret: 900,
//         detay: [
//           { id: "bmw320d_123_1_1", aciklama: "yağ değişimi", ucret: 300 },
//           { id: "bmw320d_123_1_2", aciklama: "filtre değişimi", ucret: 300 },
//           { id: "bmw320d_123_1_3", aciklama: "fren hidroliği", ucret: 300 },
//         ],
//       },
//       {
//         id: "bmw116d_123_2",
//         tarih: "10.01.2017",
//         km: "28000",
//         ucret: 1800,
//         detay: [
//           { id: "bmw116d_123_2_1", aciklama: "yağ değişimi", ucret: 350 },
//           { id: "bmw116d_123_2_2", aciklama: "filtre", ucret: 350 },
//           { id: "bmw116d_123_2_3", aciklama: "fren hidroliği", ucret: 300 },
//           { id: "bmw116d_123_2_3", aciklama: "balata", ucret: 800 },
//         ],
//       },
//     ],
//   },
// ];

// console.log(aracBilgileri[0]);
// console.log(aracBilgileri[0].id);
// console.log(aracBilgileri[0].model);
// console.log(aracBilgileri[0].renk);
// console.log(aracBilgileri[0].servisKayitlari);
// console.log(aracBilgileri[0].servisKayitlari[0]);

// console.log(aracBilgileri[0].servisKayitlari[0].km);
// console.log(aracBilgileri[0].servisKayitlari[0].ucret);
// console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);

// // console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);

// Loops

// for loop

// for(let i=1; i<=10; i++){

//      if(i==3){
//          console.log('en sevdiğim rakam :'+i);
//          continue;
//      }

//      if (i==6){
//          console.log('en sevmediğim rakam : 6');
//          break;
//      }

//      console.log(i);
// }

// while loop

// for (let i=0; i<10;i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// do-While loop

// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<10)

// let sonuc=1;
// for (let i=10;i>0;i--){
//     if(i%2==1){
//         sonuc*=i;
//     }
// }

// console.log(sonuc);

let val = "\n";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    val += "* ";
  }
  val += "\n";
}

console.log(val);

// Loops in Array & Objects

// let cars = ["Bmw", "Mercedes", "Toyota"];
// let people = [
//   { firstName: "Ada", lastName: "Bilgi" },
//   { firstName: "Yiğit", lastName: "Bilgi" },
//   { firstName: "Çınar", lastName: "Turan" },
// ];

// Arrays

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// Objects

// for (let i=0; i<people.length;i++){
//     console.log(people[i].firstName);
// }

// for-in

// Arrays

// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }

//Objects
// for (let i in people){
//     console.log(`index : ${i} value : ${people[i].firstName}`);
// }

// foreach

// cars.forEach(function(item){
//     console.log(item);
// });

// people.forEach(function(item){
//    console.log(item.firstName);
// });

// map : returns an array

// let val = people.map(function(item){
//      return item.firstName + ' ' + item.lastName;
// });

// console.log(val);

// let numbers = [1, 5, 6, 8, 10];

// let num = numbers.map(function (n) {
//   return n * n;
// });

// console.log(num);

/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak, can;
var tahmin,
  sayac = 0;
var sayi = Math.floor(Math.random() * 10 + 1);
can = Number(prompt("kaç kerede bileceksiniz ?"));
hak = can;

console.log(sayi);

while (hak > 0) {
  hak--;
  sayac++;
  tahmin = Number(prompt("bir sayı giriniz"));

  if (sayi == tahmin) {
    console.log(`Tebrikler ${sayac} defada bildiniz.`);
    console.log(`puan : ${100 - (100 / can) * (sayac - 1)}`);
    break;
  } else if (sayi > tahmin) {
    console.log("yukarı");
  } else {
    console.log("aşağı");
  }

  if (hak == 0) {
    console.log("hakkınız bitti. sayı :" + sayi);
  }
}

// Functions

function yasHesapla(dogumYili) {
  return 2018 - dogumYili;
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);

function EmekligeKacYilKaldi(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let emeklilik = 65 - yas;

  if (emeklilik > 0) {
    console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
  } else {
    console.log("Zaten emekli oldunuz");
  }
}

EmekligeKacYilKaldi(2012, "Ada");
EmekligeKacYilKaldi(2010, "Yiğit");
EmekligeKacYilKaldi(1950, "Çınar");

// Function Declarations

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions

// const sum = function(a,b){

//     if(typeof a === 'undefined'){ a=0; }
//     if(typeof b === 'undefined'){ b=0; }

//     var c = a+b;
//     return c;
// }

// ES6 Default Parameters
const sum = function (a = 0, b = 0) {
  var c = a + b;
  return c;
};

function sumAll() {
  var total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(10, 30));
console.log(sum(10)); // NaN
console.log(sum(10, 30, 40, 50));
console.log(sumAll(10, 20, 30, 10, 30));

// Demo : Functions

var bakiye = 2000;
var adsoyad = "sena turan";

var hesapA = {
  ad: "Sena Turan",
  hesapNo: "12345678",
  bakiye: 2000,
  ekHesap: 1000,
};

var hesapB = {
  ad: "Emel Turan",
  hesapNo: "12356479",
  bakiye: 3000,
  ekHesap: 2000,
};

function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}`);

  if (hesap.bakiye >= miktar) {
    hesap.bakiye = hesap.bakiye - miktar;
    console.log("paranızı alabilirsiniz");
  } else {
    var toplam = hesap.bakiye + hesap.ekHesap;

    if (toplam >= miktar) {
      if (confirm("ek hesabınızı kullanmak istermisiniz")) {
        console.log("paranızı alabilirsiniz");
        var bakiye = hesap.bakiye;
        var ekhesap = miktar - bakiye;
        hesap.bakiye = 0;
        hesap.ekhesap = hesap.ekhesap - ekhesap;
      } else {
        console.log(
          `${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`
        );
      }
    } else {
      console.log("üzgünüz bakiye yetersiz");
    }
  }
}

paraCek(hesapA, 2000);
paraCek(hesapA, 1100);
// paraCek(hesapB,2000);

// Window Object

let val;
var a = 10;
function abc() {
  return 0;
}

val = window;

// alert
// alert('Merhaba');

// prompt
// var val = prompt('bir sayı giriniz ');

// confirm
// val = confirm('emin misiniz ?');

// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll
// val = window.scrollX;
// val = window.scrollY;

// location

val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;
val = window.location.search;

// window.location.href='http://sadikturan.com';
// window.location.reload();

console.log(val);

// Scopes

// ** Global Scopes
var name = "Çınar";
var age = 25;

function logName() {
  var name = "Ada";
  var age = "12";
  console.log("function scope", name, age);
}

if (true) {
  var age = 30;
  console.log("block scope", name, age);
}

console.log(age);

logName();
console.log(name);

// ** Local Scopes

// Fonksiyonlar kendi scope 'larını oluşturur.
// **Block'lar yeni scope oluşturmaz.
// ES6 ile gelen let ve const block scope oluşturur.

console.log("*********************");

if (true) {
  var model = "Opel";
  let year = 2016;
  const color = "white";
  console.log("block scope", model, year, color);
}
console.log(model);
//console.log(color);

var i = 1;

for (let i = 0; i < 10; i++) {
  console.log("i", i);
}

console.log(i);

// // DERS 211 DOCUMENT OBJECT MODELİ TANIYALIM

// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute("src");

// console.log(val);

// Selecting Elements

// *** Single Elements

// document.getelementById()
// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';
// // val.style.display='none';

// document.getElementById('header').innerText='my ToDo App';

// document.getElementById('header').innerText='<b>my ToDo App</b>';

// document.getElementById('header').innerHTML='<b>my ToDo App</b>';
//console.log(val);

// document.querySelector()

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header"));
console.log(document.querySelector("div"));

document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(2)").style.color = "yellow";
document.querySelector("li:nth-child(3)").textContent = "task item";
document.querySelector("li:nth-child(4)").textContent = "task item";

// document.querySelector('li').className='list-group-item list-group-item-primary';

document.querySelector("li").classList.add("active");

// *** Multiple Elements
