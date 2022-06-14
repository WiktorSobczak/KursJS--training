//lesson-24
/*
//var myString = 'I\'m a "fun" string'; //nie zadziała zapis "I'am "fun" string " nie zadziala także zapis 'I 'am a "fun" string'
var myString = "I'm a \"fun\" string";//tak może wygladać drugi zapis (używa się sleszy żeny oznaczyc koniec cytatu)
//nie można użyc ych samyh znaków cydzysłowia dwa razy w jednym stringu
console.log(myString)
console.log(myString.length);//policzy wszystkie znaki (wyświetli 18) //jak niebieskie to właściwość
console.log(myString.toUpperCase());// wyświetli napis w wielkich literach (wszystkir litery wielkie)//jak zieloine to metoda albo funkcja (dlatego trzena nawias na końcu)
console.log(myString.toLowerCase());//wyświetli napis wszystko z małych liter
console.log(myString.indexOf("string"));//wywołanie które pokazuje od którego znaku zaczyna się słowo w nawiasie(string)
console.log(myString.indexOf("I"));//litera I znajduje się na poczatku ale liczymy od zera 0
console.log(myString.indexOf("ninja")); //wyświetli się minus 1 (-1) ponieważ słowo ninja nie występuje i nie ma swojego początku w zmiennej myString
//Obsługa -1 czyli braku słowa w zmiennej
if(myString.indexOf("ninja") === -1){//jeśli string ninja nie znajduje się w zmiennej (czyli ma wartość -1)
    console.log(" the word ninja is not in the string")//wyświetli się napis
}else{
    console.log("the word ninja start at position " + myString.indexOf("ninja"));
}//jesli słow ninja znajdzie sie w zmiennej myString wyświetli sie ten napis oraz pozycja w stringu
*/
/*
var string1 = "abc";
var string2 = "Abc";

console.log(string1 === string2);//wyświetli sie false ponieważ string2 przechowuje zmienna Abc z wielkiej litery
console.log(string1 === string2.toLowerCase());//wyświetli się prawda ponieważ wprowadziliśmy do string2 aby wyświetlał się wszystko z małej litery
*/
 var string1 = "abc";
 var string2 = "bcd";
 var srting3 = "Bcd";

 console.log(string1 < string2);//wyświetli się true ponieważ wg tablic litera b ma wyższą wartość
 console.log(string1 > srting3);//wyświetli się false ponieważ to wynika z tablic że mniejsze litery przypisane sa wo wyższych artości