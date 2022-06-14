//lesson-23-NaN-Not-a-Number
/*
var a = "7";//zmienna a która zawiera sttinga 7 9napis o wartości 7
var b = 5;//zmienna b która zawiera cyfrę 5

console.log(a + b);//("7" + 5)wywolanie które tworzy stringa o wartości 75
console.log(a * b);//("7" * 5) wywołanie które wyświetli wynik mnożenia 35 JS wykonuje działanie które jako jedyna może być poprawne
*/
/*
var a = "appLe";//zmienna a która zawiera sringa (napis)appLe
var b = 5;//zmienna b która zawiera cyfrę 5

console.log(a * b);//("appLe" * 5)wywołanie które wykonuje dzialanie mnożenia wynikiem będzie NaN (NotaNumber) ponieważ JS nie jeśt w stanie wykonac działania
console.log(a + b);//("appLe" + 5)wywołanie którego wynikeim będzie appLe5
*/
/*
var a = "appLe";//zmienna a przechowująca napis "appLe"
var b = 5;//zmienna b przechowująca cyfrę 5

if(isNaN(a)){//jeśli zmienna a jest NaN
    console.log("that ain't even a number, thickie");//wyświetli się ten napis
}else{//jeśli nie
    console.log("meaning of life is " + (a * b));//wyświetli sie ten napis + działanie w nawiasie 
}
*/
/*
var a = "appLe";
var b = 5;

if(!isNaN(a)){//jeśli dodamy do (!isNan(a)) wykrzyknik to musimy czytać tę komende jako fałsz więc wyświetli się else 
    
    console.log("meaning of life is " + (a * b))
}else{
   
    console.log("that ain't even a number. thickie");
}
*/