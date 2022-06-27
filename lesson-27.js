//lesson27 introduction to objects
/*
//var myCar = new Car()//wyświetli się błąd
var myCrar = new String()//tutaj nadajemy zmiennej myCar wartośdo przechowania new String to będzie działać
var myString = new String()//-||- będzie działać

myString = "hello"//zmienna mystring ma wartość "hello"
console.log(myString);//wyświetli się 'hello'
console.log(myString.length);// wyświetli się: 5
console.log(myString.toUpperCase());// wyświetli'HELLO'

var myString2 = "hi there"//zmienna myString2 ma wartośc "hi there"
console.log(myString2)
*/
//lesson28 cerating
/*//przypomnienie z poprzedniej lekcji 
var myArray = new Array();//nowa tablica
myArray[0] = 8;//miejsce 0 w tablicy będzie równe 8
myArray[1] = "hello";//miejsce 1 w tablicy bedzie równe hello
myARRAY[2] = true; //miejsce 2 w tablicy będzie równe true
*/

var myCar = new Object();//zmienna myCar przechowuje nowy obiekt
//new Object działa tak samo jak tablica 
myCar.maxSpeed = 150;//argument przypisany zerowemu miejscu w tablicy(miejsce zerowe nazywa sie maxspeed)
myCar.driver = "Wiktor";//argument na 1 miejscu w tablicy
myCar.minspeed = 40;//agrument na 2 miejscu w tablicy
myCar.drive = function(){ 
    console.log("new driving");//
};
myCar.drive();//wywoanie funkcji o nazwie myCar.drive
//console.log(myCar);// wyświetli się maxSpeed 150, driver Wiktor i minspeed 40
//console.log(myCar.maxSpeed);// wyświetli sie to co wyżej oraz w kolumnie 
//console.log(myCar.driver);// wiktor
//console.log(myCar.minspeed);//40

//var myArray2 = [true, 15, "hi"];//inny zapis argumentów w tablicy

var myCar2 = {//poprawny zapis nowego objektu (to samo co myCar = new Objrct)
    maxSpeed: 20, 
    driver:"Seba", 
    //drive: function(){
        //console.log("driving now");
    //}//funkcja może byc pusta i wyświetlać string
    drive: function(speed, time){
        console.log(speed * time)//funkcja może zawierac parametry(w wywołaniu funkcji możemy wykonac zadanie)
    }
};  

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive(50, 3);