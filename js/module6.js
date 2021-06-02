/*const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});*/

//Задание №1
/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

    orderedItems.forEach(function (number) {
        totalPrice += number;
  })

  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))*/

//Задание №2

/*function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки\

    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number)
        }
        
    });
    // Пиши код выше этой строки
    return filteredNumbers;
  }

console.log(filterArray([1, 2, 3, 4, 5], 3))
console.log(filterArray([1, 2, 3, 4, 5], 4))
console.log(filterArray([1, 2, 3, 4, 5], 5))
console.log(filterArray([12, 24, 8, 41, 76], 38))
console.log(filterArray([12, 24, 8, 41, 76], 20))*/

//Задание №3

/*function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки

    firstArray.forEach(function (element) {
        if (secondArray.includes(element)) {
            commonElements.push(element)
        }
        
    });
  
  
    return commonElements;
    // Пиши код выше этой строки
}
  
console.log(getCommonElements([1, 2, 3], [2, 4]))
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))*/

//Задание №4
/*const calculateTotalPrice = (quantity, pricePerItem) => {

  // Пиши код выше этой строки
  return quantity * pricePerItem;
}*/

//Задание №5

//const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//Задание №6

// Пиши код ниже этой строки
/*const calculateTotalPrice = (orderedItems) =>{
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки

console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))*/

//Задание №7

// Пиши код ниже этой строки
/*const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
console.log(filterArray([1, 2, 3, 4, 5], 3))
console.log(filterArray([1, 2, 3, 4, 5], 4))
console.log(filterArray([1, 2, 3, 4, 5], 5))
console.log(filterArray([12, 24, 8, 41, 76], 38))
console.log(filterArray([12, 24, 8, 41, 76], 20))*/

//Задание №8

// Пиши код ниже этой строки
/*const getCommonElements =(firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach ((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  }*/

  //Задание №9

/*function  changeEven (numbers, value) {
    // Пиши код ниже этой строки
    const newArray = [];

    numbers.forEach(number => {
        if (number % 2 === 0) {
            number += value
        };
        return newArray.push(number)
    });
    
    return newArray;
       
    // Пиши код выше этой строки
}
  
console.log(changeEven([1, 2, 3, 4, 5], 10))
console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
console.log(changeEven([17, 24, 68, 31, 42], 100))
console.log(changeEven([44, 13, 81, 92, 36, 54], 100))*/

  //Задание №10

  /*const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);*/

 //Задание №11

/*const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(book => book.title);
  
console.log(titles)*/

//Задание №12

/*const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
const genres = books.flatMap(book => book.genres );
  

console.log(genres)*/

//Задание №13

/*const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserNames = users => { 
  return users.map(user => user.name) }

console.log(getUserNames)*/

//Задание №14

/*const getUserEmails = users => { return users.map( user => user.email)
};*/

//Задание №15

/*const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 ===0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers)
console.log(oddNumbers)*/

//Задание №16
/*const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
console.log(allGenres)
  
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
  
console.log(uniqueGenres)*/

//Задание №17

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) =>  book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book)=> book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor)*/
  
//Задание №18

/*const getUsersWithEyeColor = (users, color) => { return users.filter(
(user) => user.eyeColor === color)
};*/

//Задание №19

/*const users =[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]


const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter((user) => (user.age >= minAge && user.age <= maxAge)
    )
    
};

console.log(getUsersWithAge(users,20,30))*/

//Задание №20

/*const getUsersWithFriend = (users, friendName) => {
  return  users.filter((user) => user.friends.includes(friendName))
   
};*/

//Задание №21
/*const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

const getFriends = (users) => {
  
    const a = users.flatMap((user) => user.friends)
 
    const b = a.filter((friend, index, array) => array.indexOf(friend) === index)
    
    return b


};

console.log(getFriends(users))*/

//Задание №22

/*const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]
const getActiveUsers = (users) => {
    const activeUsers = users.filter(user => user.isActive);
    return activeUsers
    
};

console.log(getActiveUsers(users))*/

//Задание №23

/*const getInactiveUsers = (users) => {
  const notActiveUsers = users.filter(user => user.isActive === false)
  return notActiveUsers;
   
};*/

//Задание №24
/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);*/

//Задание №25

/*const getUserWithEmail = (users, email) => {
  const getEmail = users.find((user) => user.email === email)
  return getEmail 
};*/

//Задание №26

/*const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value)=> value % 2 === 0 );
const eachElementInFirstIsOdd = firstArray.every((value)=> value % 2 !==  0 ) ;

const eachElementInSecondIsEven = secondArray.every((value)=> value % 2 === 0 );
const eachElementInSecondIsOdd = secondArray.every((value)=> value % 2 !==  0 );

const eachElementInThirdIsEven = thirdArray.every((value)=> value % 2 === 0 );
const eachElementInThirdIsOdd = thirdArray.every((value)=> value % 2 !==  0 );*/

//Задание №27
/*const isEveryUserActive = (users) => {
  const activeUsers = users.every((user) => user.isActive)
  return activeUsers
};*/

//Задание №28

/*const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some((value)=> value %2 === 0) ;
const anyElementInFirstIsOdd = firstArray.some((value)=> value %2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value)=> value %2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value)=> value %2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value)=> value %2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value)=> value %2 !== 0);*/

//Задание №29

/*const isAnyUserActive = users => {
 return  anyActiveUser = users.some((user) => user.isActive) 
  
};*/

//Задание №30

/*const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) => {return previousValue + number;} , 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;*/

//Задание №31

//Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
//Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).


/*const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total,player) => {return total + player.playtime/player.gamesPlayed},0);

console.log(totalAveragePlaytimePerGame)*/

//Задание №32

/*const calculateTotalBalance = users => {
  
  return getBalance = users.reduce((total,user) => {return total + user.balance},0)
};*/

/*//Задание №33
// Пиши код ниже этой строки
const getTotalFriendCount = users => { 
  return totalFriends = users.reduce((total, user) => {
  return total + user.friends.length},0) 
   
};
// Пиши код выше этой строки*/

//Задание №34

/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
console.log(ascendingReleaseDates)

const alphabeticalAuthors = [...authors].sort();
console.log(alphabeticalAuthors)*/

//Задание №35

/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a-b);

const descendingReleaseDates = [...releaseDates].sort((a,b)=> b-a);

console.log(ascendingReleaseDates)
console.log(descendingReleaseDates)*/

//Задание №36

/*const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a,b)=> b.localeCompare(a));

console.log(authorsInAlphabetOrder)
console.log(authorsInReversedOrder)*/

//Задание №37

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName =[...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author) 
);

const sortedByReversedAuthorName =[...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author) 
);

const sortedByAscendingRating = [...books].sort((a,b) => a.rating-b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

console.log(sortedByAuthorName)
console.log(sortedByReversedAuthorName)
console.log(sortedByAscendingRating)
console.log(sortedByDescentingRating)*/

//Задание №38

/*const sortByAscendingBalance = users => {
 return [...users].sort((a,b) => a.balance-b.balance)
};*/

//Задание №39
/*
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

const sortByDescendingFriendCount = users => { 
  
  return [...users].sort((first,second) => second.friends.length-first.friends.length)
   
};*/

//Задание №40

/*const sortByName = users => {
  return [...users].sort((first,second) => first.name.localeCompare(second.name) )
};
*/

//Задание №41

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books].filter((book) => book.rating > MIN_BOOK_RATING)
.map((book) => book.author)
.sort((a,b) => a.localeCompare(b));

console.log(names)*/

//Задание №42

/*const getNamesSortedByFriendCount = users => {
  return [...users]
  .sort((less,more) => less.friends.length-more.friends.length)
  .map((book) => book.name)
};*/

//Задание №43

const users =[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

/*const getSortedFriends = users => {
   return [...users]
       .flatMap((user) => user.friends)
       .filter((friend, index, array) => array.indexOf(friend) === index)
       .sort((a, b) => a.localeCompare(b))
};

console.log(getSortedFriends(users))*/

//Задание №44

const getTotalBalanceByGender = (users, gender) => {
    return [...users]
        
        .flatMap((user) => user.balance)
        .reduce((acc, value) => acc + value, 0);
    

    
   
};

console.log(getTotalBalanceByGender(users))
































 














