// 1. Створити об'єкт customer, що містить такі властивості:
// ім'я, 
// прізвище, 
// електронна адреса, 
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 

customer = {
    name: 'Lika',
    surname: 'Hospin',
    sex: 'female',
    email: 'hospingg@gmail.com',
    password: 'qwerty',
    phoneNumber: 964345943,
    adress: {  
        city: 'Zaporizhya',
        street: 'Baker Street, 16',
    },
    // методи: 
    // виведення адреси, 
    showAdress() {  
        console.log(`Адреса: ${this.adress.city}, ${this.adress.street}` );
    },
    // зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
    changeNumber(newNumber) {
        this.phoneNumber = Number(newNumber);
        console.log(`New number: ${this.phoneNumber}`);
    },
    // Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
    isMale() {
        return this.sex === "male";
    },
    // Додатково, по бажанню: Реалізувати картку з відомостями про customer, 
    showInfo() {
        console.log(`Карта клієнта\nІм'я: ${this.name}\nПрізвище: ${this.surname}\nСтать: ${this.sex}\nПошта: ${this.email}\nНомер телефону: ${this.phoneNumber}\nАдреса: ${this.adress.city}, ${this.adress.street}`);
    }
};

// customer.showAdress();
// customer.changeNumber(953241243);
// customer.isMale();
// customer.showInfo();


// Видалити у об'єкта властивість адреса.
delete customer.adress


// Зробити копії об'єкту customer двома різними способами.
let customer1 = {...customer}
// console.log(customer === customer1)


let customer2 = Object.assign({}, customer);
// console.log(customer === customer2)

// 2. Перебрати і вивести властивості об'єкту cat
// циклом for..in.

let cat = {   
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}
for (key in cat){
    console.log(cat[key])
}


// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
// автор, 
// назва, 
// рік видання, 
// видавництво (рядок або *об'єкт з властивостями місто, назва), 
// ціна.
//    Передбачити методи: (* в прототип)
// для обчислення віку книги (у роках),
// для зміни ціни книги.

function Book(author, name, publicationDate, editionName, editionCity, price ){
    this.author = author;
    this.name= name;
    this.publicationDate= publicationDate;
    this.edition = {
        editionName: editionName,
        editionCity: editionCity
    }
    this.price = price
}
let bookProto = {
    findAge(){
        currentDate = new Date();
        return currentDate.getFullYear() - this.publicationDate
    },
    changePrice(newPrice){
        this.price = newPrice
        console.log('Ціну змінено')
    }
}
Book.prototype = bookProto;
book1 = new Book('Аджей Сапковський', 'Останнє Бажання', 1945, 'Ранок', 'Харків', 340)
console.log(book1)

