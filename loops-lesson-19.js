/*
var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){
    links[i].className = "link-" + i;
}
*/
//lesson-20-functions
/*
function getAverage (a,b){//funkcje tworzy się przez słowo kluczowe "funkction" nastepnie jest nazwa funkcji  i parametry funkcji

    var average = (a + b) / 2;//tworzymy zmienną o nazwie average która przechowuje działanie "średnią"
    console.log(average);//wywołanie zmiennej
}//funkcja getAvetage zawiera to wszystko powyżej 
getAverage(2,7);//wywołanie funkcji w nawiasie parametry które są wartości a i b
//alert("hello");// to też jest funskcja różni sie tym że prametrem jest napis i wyświetla sie w innym miejscu
*/
/*
function getAverage(a,b,c,d,e,f){//funkcja o nazwie getAverage odnosząca się do parametrów podanych w nawiasie

    var average = (a+b+c+d+e+f)/6;//funkacja zawiera zmienna average której wartośc to średnia z elemantów w nawiasie
    console.log(average);//wywołanie zmiennej average
    return average;// jest to komenda umożwiająca użycie zmiennej poza blokiem kodu ??
}

var myResult = getAverage(7,8,9,10,11,12);//utworzenia zmiennej o nazwie my Result która zawiera funkcje getAverage
console.log("the average is " + myResult);//wywołanie zmiennej myResult wraz ze stringiem
*/
//lesson-22
/*
var a = 5;//zmienna a równa 5 number
var b = 5;//zmienna b równa 5 number
console.log(a + b);//(5+5) wywołanie wyświetla wynik dodawania wynik 10

var a = "7";// zmienna a przechowująca napis 7 string
var b = 5;// zmienna b przechowująca cyfre 5 numbers
console.log(a + b);//("7"+ 5) wywołanie suma napisu i cyfry robi napis wynik 75
console.log(typeof (a + b) );//wywołanie które wspazuje typ działania w nawiasie tutaj wynik to string
*/
/*
Math.round();//słowo kluczowe podstawa to math. ...()

console.log(Math.round(7.4));//wynik 7 -> math.round jest to zaokrąglenie 
console.log(Math.floor(9.8));//wynik 9 -> math.floor najniższe 
console.log(Math.ceil(6.1));//wynik 7 -> math.ceil zaokrąglenie do góry
console.log(Math.max(7,4,5,1,2));//wynik 7 -> math.max wyświetla najwyższą
console.log(Math.min(7,4,1,-2));// wynik -2 -> math.min wyświetla najniższą
console.log(Math.PI);// wynik 3,141592653... -> mat.PI wyświetli liczbe Pi
*/