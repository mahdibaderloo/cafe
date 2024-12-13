

// ==================
//     Hot Coffee
// ==================


let sadRobosta = [
    { id: 1, product: "اسپرسو", price: 35_000, disc: 'یه شات عصاره قهوه'},
    { id: 2, product: "اسپرسو ماکیاتو", price: 40_000, disc: 'اسپرسو + فوم شیر'},
    { id: 3, product: "کاپوچینو مخصوص", price: 65_000, disc: 'اسپرسو + شیر گرم + کرم خامه'},
    { id: 4, product: "کافه لاته", price: 65_000, disc: 'اسپرسو + شیر گرم'},
    { id: 5, product: "موکا", price: 70_000, disc: 'اسپرسو + فوم شیر + سس شکلات'},
    { id: 6, product: "پینک لاته", price: 70_000, disc: 'اسپرسو + توت فرنگی فراوری شده + شیر گرم'},
    { id: 7, product: "فندق ماکیاتو", price: 70_000, disc: 'اسپرسو + سیروپ فندق + شیر گرم'},
    { id: 8, product: "کارامل ماکیاتو", price: 70_000, disc: 'اسپرسو + سیروپ کارامل + شیر گرم'},
    { id: 9, product: "آمریکانو", price: 55_000, disc: 'اسپرسو + آب داغ'},
    { id: 10, product: "لاته وانیل", price: 70_000, disc: 'اسپرسو + سیروپ وانیل + شیر گرم'},
    { id: 11, product: "لاته دارچین عسل", price: 70_000, disc: 'اسپرسو + دارچین + عسل + شیر گرم'},
    { id: 12, product: "لاته شکلات", price: 70_000, disc: 'اسپرسو + سیروپ شکلات + شیر گرم'},
]

let vaftad30Robosta = [
    { id: 13, product: "اسپرسو", price: 40_000, disc: 'یه شات عصاره قهوه'},
    { id: 14, product: "اسپرسو ماکیاتو", price: 45_000, disc: 'اسپرسو + فوم شیر'},
    { id: 15, product: "اسپرسو چاکلت لیلو", price: 80_000, disc: ''},
    { id: 16, product: "کاپوچینو", price: 60_000, disc: 'اسپرسو + شیر گرم + کرم خامه'},
    { id: 17, product: "کاپوچینو مخصوص", price: 70_000, disc: 'اسپرسو + شیر گرم + کرم خامه'},
    { id: 18, product: "کافه لاته", price: 70_000, disc: 'اسپرسو + شیر گرم'},
    { id: 19, product: "موکا", price: 75_000, disc: 'اسپرسو + فوم شیر + سس شکلات'},
    { id: 20, product: "پینک لاته", price: 75_000, disc: 'اسپرسو + توت فرنگی فراوری شده + شیر گرم'},
    { id: 21, product: "فندق ماکیاتو", price: 75_000, disc: 'اسپرسو + سیروپ فندق + شیر گرم'},
    { id: 22, product: "کارامل ماکیاتو", price: 75_000, disc: 'اسپرسو + سیروپ کارامل + شیر گرم'},
    { id: 23, product: "آمریکانو", price: 60_000, disc: 'اسپرسو + آب داغ'},
    { id: 24, product: "قهوه ترک", price: 60_000, disc: 'پودر قهوه + آب سرد'},
    { id: 25, product: "قهوه عربی شکلاتی", price: 65_000, disc: ''},
    { id: 26, product: "قهوه یونانی", price: 65_000, disc: 'پودر قهوه + شیر + شکر'},
    { id: 27, product: "قهوه فرانسه", price: 60_000, disc: 'پودر قهوه + آب داغ'},
    { id: 28, product: "لاته وانیل", price: 75_000, disc: 'اسپرسو + سیروپ وانیل + شیر گرم'},
    { id: 29, product: "لاته دارچین عسل", price: 75_000, disc: 'اسپرسو + دارچین + عسل + شیر گرم'},
    { id: 30, product: "لاته شکلات", price: 75_000, disc: 'اسپرسو + سیروپ شکلات + شیر گرم'},
]

let vaftad30Arabica = [
    { id: 31, product: "اسپرسو", price: 50_000, disc: 'یه شات عصاره قهوه'},
    { id: 32, product: "اسپرسو ماکیاتو", price: 55_000, disc: 'اسپرسو + فوم شیر'},
    { id: 33, product: "کاپوچینو مخصوص", price: 75_000, disc: 'اسپرسو + شیر گرم + کرم خامه'},
    { id: 34, product: "کافه لاته", price: 75_000, disc: 'اسپرسو + شیر گرم'},
    { id: 35, product: "موکا", price: 80_000, disc: 'اسپرسو + فوم شیر + سس شکلات'},
    { id: 36, product: "پینک لاته", price: 80_000, disc: 'اسپرسو + توت فرنگی فراوری شده + شیر گرم'},
    { id: 37, product: "فندق ماکیاتو", price: 80_000, disc: 'اسپرسو + سیروپ فندق + شیر گرم'},
    { id: 38, product: "کارامل ماکیاتو", price: 80_000, disc: 'اسپرسو + سیروپ کارامل + شیر گرم'},
    { id: 39, product: "آمریکانو", price: 65_000, disc: 'اسپرسو + آب داغ'},
    { id: 40, product: "لاته وانیل", price: 80_000, disc: 'اسپرسو + سیروپ وانیل + شیر گرم'},
    { id: 41, product: "لاته دارچین عسل", price: 80_000, disc: 'اسپرسو + دارچین + عسل + شیر گرم'},
    { id: 42, product: "لاته شکلات", price: 80_000, disc: 'اسپرسو + سیروپ شکلات + شیر گرم'},
]

let sadArabica = [
    { id: 122, product: "اسپرسو", price: 55_000, disc: 'یه شات عصاره قهوه'},
    { id: 123, product: "اسپرسو ماکیاتو", price: 60_000, disc: 'اسپرسو + فوم شیر'},
    { id: 124, product: "کاپوچینو مخصوص", price: 80_000, disc: 'اسپرسو + شیر گرم + کرم خامه'},
    { id: 125, product: "کافه لاته", price: 80_000, disc: 'اسپرسو + شیر گرم'},
    { id: 126, product: "موکا", price: 85_000, disc: 'اسپرسو + فوم شیر + سس شکلات'},
    { id: 127, product: "پینک لاته", price: 85_000, disc: 'اسپرسو + توت فرنگی فراوری شده + شیر گرم'},
    { id: 128, product: "فندق ماکیاتو", price: 85_000, disc: 'اسپرسو + سیروپ فندق + شیر گرم'},
    { id: 129, product: "کارامل ماکیاتو", price: 85_000, disc: 'اسپرسو + سیروپ کارامل + شیر گرم'},
    { id: 130, product: "آمریکانو", price: 70_000, disc: 'اسپرسو + آب داغ'},
    { id: 131, product: "لاته وانیل", price: 85_000, disc: 'اسپرسو + سیروپ وانیل + شیر گرم'},
    { id: 132, product: "لاته دارچین عسل", price: 85_000, disc: 'اسپرسو + دارچین + عسل + شیر گرم'},
    { id: 133, product: "لاته شکلات", price: 85_000, disc: 'اسپرسو + سیروپ شکلات + شیر گرم'},
]




// ==================
//     Hot Drink
// ==================


let hot = [
    { id: 43, product: "شیر گرم", price: 55_000, disc: ''},
    { id: 44, product: "شیر عسل", price: 60_000, disc: ''},
    { id: 45, product: "شیر نسکوئیک", price: 65_000, disc: ''},
    { id: 46, product: "شیر لوتوس", price: 75_000, disc: ''},
    { id: 47, product: "هات چاکلت", price: 65_000, disc: ''},
    { id: 48, product: "وایت چاکلت", price: 65_000, disc: ''},
    { id: 49, product: "چای ماسالا", price: 65_000, disc: ''},
    { id: 50, product: "پینک چاکلت", price: 65_000, disc: ''},
]




// ==================
//     Cold Coffee
// ==================


let coldCoffee_100r = [
    { id: 51, product: "آیس لاته", price: 65_000, disc: ''},
    { id: 52, product: "آیس آمریکانو", price: 55_000, disc: ''},
    { id: 53, product: "آیس فندق", price: 70_000, disc: ''},
    { id: 54, product: "آیس کارامل ماکیاتو", price: 70_000, disc: ''},
    { id: 55, product: "آیس موکا", price: 70_000, disc: ''},
    { id: 56, product: "کوک اسپرسو", price: 65_000, disc: ''},
    { id: 57, product: "هایپ اسپرسو", price: 80_000, disc: ''},
    { id: 58, product: "آفوگاتو", price: 80_000, disc: ''},
    { id: 59, product: "کافه گلاسه", price: 90_000, disc: ''},
]

let coldCoffee_7030r = [
    { id: 60, product: "آیس لاته", price: 70_000, disc: ''},
    { id: 61, product: "آیس کاپوچینو", price: 65_000, disc: 'اسپرسو + شیر گرم + کرم خامه'},
    { id: 62, product: "آیس آمریکانو", price: 60_000, disc: ''},
    { id: 63, product: "آیس فندق", price: 75_000, disc: ''},
    { id: 64, product: "آیس کارامل ماکیاتو", price: 75_000, disc: ''},
    { id: 65, product: "آیس موکا", price: 75_000, disc: ''},
    { id: 66, product: "کوک اسپرسو", price: 70_000, disc: ''},
    { id: 67, product: "هایپ اسپرسو", price: 85_000, disc: ''},
    { id: 68, product: "آفوگاتو", price: 85_000, disc: ''},
    { id: 69, product: "کافه گلاسه", price: 95_000, disc: ''},
    { id: 70, product: "کلد برو", price: 75_000, disc: ''},
]

let coldCoffee_7030a = [
    { id: 71, product: "آیس لاته", price: 75_000, disc: ''},
    { id: 72, product: "آیس آمریکانو", price: 65_000, disc: ''},
    { id: 73, product: "آیس فندق", price: 80_000, disc: ''},
    { id: 74, product: "آیس کارامل ماکیاتو", price: 80_000, disc: ''},
    { id: 75, product: "آیس موکا", price: 80_000, disc: ''},
    { id: 76, product: "کوک اسپرسو", price: 75_000, disc: ''},
    { id: 77, product: "هایپ اسپرسو", price: 90_000, disc: ''},
    { id: 78, product: "آفوگاتو", price: 90_000, disc: ''},
    { id: 79, product: "کافه گلاسه", price: 100_000, disc: ''},
]

let coldCoffee_100a = [
    { id: 134, product: "آیس لاته", price: 80_000, disc: ''},
    { id: 135, product: "آیس آمریکانو", price: 70_000, disc: ''},
    { id: 136, product: "آیس فندق", price: 85_000, disc: ''},
    { id: 137, product: "آیس کارامل ماکیاتو", price: 85_000, disc: ''},
    { id: 138, product: "آیس موکا", price: 85_000, disc: ''},
    { id: 139, product: "کوک اسپرسو", price: 80_000, disc: ''},
    { id: 140, product: "هایپ اسپرسو", price: 95_000, disc: ''},
    { id: 141, product: "آفوگاتو", price: 95_000, disc: ''},
    { id: 142, product: "کافه گلاسه", price: 105_000, disc: ''},
]




// ==================
//     Shake
// ==================


let shake = [
    { id: 80, product: "شیک وانیل", price: 95_000, disc: ''},
    { id: 81, product: "شیک نوتلا", price: 110_000, disc: ''},
    { id: 82, product: "شیک قهوه", price: 105_000, disc: ''},
    { id: 83, product: "شیک بادام زمینی", price: 105_000, disc: ''},
    { id: 84, product: "شیک لوتوس", price: 110_000, disc: ''},
    { id: 85, product: "شیک چاکلت براونی", price: 110_000, disc: ''},
    { id: 86, product: "شیک چانکی مانکی", price: 110_000, disc: ''},
    { id: 87, product: "شیک موز شکلات", price: 110_000, disc: ''},
    { id: 88, product: "شیک موز توت فرنگی", price: 110_000, disc: ''},
    { id: 89, product: "شیک موز لوتوس", price: 120_000, disc: ''},
    { id: 90, product: "شیک موز نوتلا", price: 120_000, disc: ''},
    { id: 91, product: "شیک نوستالژی", price: 105_000, disc: ''},
    { id: 92, product: "شیک مخصوص لیلو", price: 125_000, disc: ''},
]




// ==================
//     Cold Drink
// ==================


let cold = [
    { id: 93, product: "لیموناد", price: 65_000, disc: ''},
    { id: 94, product: "لیموناد توت فرنگی", price: 70_000, disc: ''},
    { id: 95, product: "بلو هاوایی", price: 75_000, disc: ''},
    { id: 96, product: "کوکوپاین", price: 75_000, disc: ''},
    { id: 97, product: "لوکا", price: 75_000, disc: ''},
    { id: 98, product: "اسپایسی ماکتل", price: 75_000, disc: ''},
    { id: 99, product: "موهیتو", price: 75_000, disc: ''},
    { id: 100, product: "موهیتو توت فرنگی", price: 80_000, disc: ''},
]




// ==================
//     Cake & Coocki
// ==================


let cake = [
    { id: 101, product: "کیک روز", price: 70_000, disc: ''},
    { id: 102, product: "کیک بستنی", price: 80_000, disc: ''},
    { id: 103, product: "کوکی", price: 35_000, disc: ''},
    { id: 104, product: "موچی", price: 65_000, disc: ''},
    { id: 105, product: "کروسان", price: 60_000, disc: ''},
]




// ==================
//     Snack
// ==================


let snack = [
    { id: 106, product: "تست کره بادام زمینی", price: 55_000, disc: ''},
    { id: 107, product: "تست نوتلا", price: 65_000, disc: ''},
    { id: 108, product: "اسنک مخصوص لیلو", price: 90_000, disc: ''},
    { id: 109, product: "چیپس و پنیر", price: 100_000, disc: ''},
    { id: 110, product: "چیپس و پنیر مخصوص", price: 115_000, disc: ''},
]




// ==================
//     Tea
// ==================


let tea_1 = [
    { id: 111, product: "چای داغ", price: 35_000, disc: ''},
    { id: 112, product: "چای دارچین", price: 37_000, disc: ''},
    { id: 113, product: "چای دارچین عسل", price: 40_000, disc: ''},
    { id: 114, product: "چای سبز", price: 40_000, disc: ''},
    { id: 115, product: "چای ترش", price: 40_000, disc: ''},
    { id: 116, product: "دمنوش سرماخوردگی", price: 50_000, disc: ''},
    { id: 117, product: "دمنوش گل گاو زبان", price: 50_000, disc: ''},
    { id: 118, product: "دمنوش هل و بهار نارنج", price: 50_000, disc: ''},
    { id: 119, product: "دمنوش به لیمو گلمحمدی", price: 50_000, disc: ''},
    { id: 120, product: "دمنوش زنجبیل", price: 50_000, disc: ''},
    { id: 121, product: "دمنوش دارچین", price: 50_000, disc: ''},
]

let tea_2 = [
    { id: 157, product: "چای داغ", price: 40_000, disc: ''},
    { id: 158, product: "چای دارچین", price: 42_000, disc: ''},
    { id: 159, product: "چای دارچین عسل", price: 45_000, disc: ''},
    { id: 160, product: "چای سبز", price: 45_000, disc: ''},
    { id: 161, product: "چای ترش", price: 45_000, disc: ''},
    { id: 162, product: "دمنوش سرماخوردگی", price: 55_000, disc: ''},
    { id: 163, product: "دمنوش گل گاو زبان", price: 55_000, disc: ''},
    { id: 164, product: "دمنوش هل و بهار نارنج", price: 55_000, disc: ''},
    { id: 165, product: "دمنوش به لیمو گلمحمدی", price: 55_000, disc: ''},
    { id: 166, product: "دمنوش زنجبیل", price: 55_000, disc: ''},
    { id: 167, product: "دمنوش دارچین", price: 55_000, disc: ''},
]




// ==================
//     Bubble Tea
// ==================


let bubbleTea = [
    { id: 143, product: "شیک اسپرسو بوبا", price: 130_000, disc: ''},
    { id: 144, product: "شیک نوتلا بوبا", price: 135_000, disc: ''},
    { id: 145, product: "شیک نوتلا موز بوبا", price: 145_000, disc: ''},
    { id: 146, product: "شیک لوتوس بوبا", price: 135_000, disc: ''},
    { id: 147, product: "شیک لوتوس موز بوبا", price: 145_000, disc: ''},
    { id: 148, product: "شیک توت فرنگی بوبا", price: 130_000, disc: ''},
    { id: 149, product: "شیک مخصوص بوبا", price: 160_000, disc: ''},
    { id: 150, product: "آیس کافی بوبا", price: 100_000, disc: ''},
    { id: 151, product: "آیس موکا بوبا", price: 105_000, disc: ''},
    { id: 152, product: "آیس موکا فندقی بوبا", price: 110_000, disc: ''},
    { id: 153, product: "آیس کارامل ماکیاتو بوبا", price: 105_000, disc: ''},
    { id: 154, product: "آیس وانیل بوبا", price: 105_000, disc: ''},
    { id: 155, product: "آیس پیناکولادا بوبا", price: 105_000, disc: ''},
    { id: 156, product: "آیس توت فرنگی بوبا", price: 105_000, disc: ''},
]



// ###############################
//         Last ID : 167
// ###############################



export {
    sadRobosta,
    vaftad30Robosta,
    vaftad30Arabica,
    sadArabica,
    hot,
    coldCoffee_100r,
    coldCoffee_7030r,
    coldCoffee_7030a,
    coldCoffee_100a,
    shake,
    cold,
    cake,
    snack,
    tea_1,
    tea_2 ,
    bubbleTea
} 
