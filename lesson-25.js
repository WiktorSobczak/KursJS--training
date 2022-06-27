//lesson24
/*
var str = "hello, world";
console.log(str);//wywołanie hello, world

var str2=str.slice(2,9);//zmiena str2 przechowująca zmienna str pocięta od 2 do 9 miejsca 
console.log(str2);//wyświetli sie: llo, wo

var str3=str.slice(2);//zmianna str3 przechowująca zmienna str pociąta od 2 miejsca
console.log(str3);//wyświetli sie: llo, world

var tags = "meat, ham, salami, pork, beef, chicken";//zmienna tags przechowująca wszystkie słowa 
console.log(tags);// wywołanie słow ze zmiennej

var tagsArray=tags.split(", ");//zmienna tagsArray przechowujaca zmienna tags pociętą na osobne części (osobne słowa)
console.log(tagsArray);//wyświetli się: 'meat', 'ham', 'salami', 'pork', 'beef', 'chicken'
*/
//lesson25 arrows
//var myArray = [];

var myArray = [];//zmienna myArray
myArray[0] = 25 
myArray[1] = 35
myArray[2] = true
myArray[3] = "hello"
console.log(myArray);//wyświetli się:[25, 35, true, 'hello']

myArray[2] = false
console.log(myArray);//wyświetli się:[25, 35, false, 'hello']

var myArray2 = [10,20,"hi",false]
console.log(myArray2);//wyświetli się:[10, 20, 'hi', false]

var myArray3 = new Array();//ładniejsza wersja var myArray3 = []
var myArray4 = new Array(5);//dlekaracja tablicy pięcioelementowej czyli dokładnie 5 elementów

console.log(myArray4);
console.log(myArray3);

console.log(myArray2);//wyświetli się: [10, 20, 'hi', false]
console.log(myArray2.length);//wyświetli się ilość obiektów czyli 4

console.log(myArray2.sort());//wyświetli się w kolejności alfabetycznej :[10, 20, false, 'hi']
console.log(myArray2.reverse());//wyświetli sie w kolejności alabetycznej od konca: ['hi', false, 20, 10]
var myArray2 =[10,9,20,"hi","false",true,"true"]

console.log(myArray2.length);// wyświetli się: 7
console.log(myArray2.sort());//[10, 20, 9, 'false', 'hi', true, 'true']
