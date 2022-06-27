//console.log(this);//keyword "THIS"(wyświetli obiekt w koncoli)
/*
var myCar = {//zmienna war która przechowuje obiekt O(w formi array)

    maxSpeed: 70,//array[0]
    driver: "Sebas",//array[1]
    drive: function(speed, time){//array[2]
        console.log(speed * time);
    },
    test: function(){
        console.log(this);//w konsoli wyświetla sie informacje o obiekcie 
    }
};//wszystko w klamrach żółtych tworzy obiekt
var myCar1 = {

    maxSpeed: 70,
    driver: "Seba",
    drive: function(speed, time){
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};//utworzyliśmy drugi obiekt o takich samych parametrach
*/
/*
var myCar = {

    maxSpeed: 70,
    driver: "Seba",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);//this pobierze informacje z obiektu tutaj imie
    }
};

  myCar.logDriver();      
//myCar.test();
//myCar1.test();
console.log(myCar.maxSpeed);
myCar.drive(50, 3);
*/
//lessos 30 constructor functions
/*
var myCar = {

    maxSpeed: 70,
    driver: "Sebas",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};

var myCar2 = {

    maxSpeed: 70,
    driver: "Sebas",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};

var myCar3 = {

    maxSpeed: 70,
    driver: "Sebas",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};
// te 3 obiekty możemy zastąpić jedna funkcją ze słowem kluczowym this
*/
var Car = function(maxSpeed, driver){// zmienna Car która przechowuje funkcję
    this.maxSpeed = maxSpeed;//keyWord
    this.driver = driver;//keyword
    this.drive = function(speed, time){//keyword
        console.log(speed * time);
    };
    this.logDriver = function(){//keyword
        console.log("driver name is " + this.driver);
    };
}
var myCar = new Car(70, "Seba Man");//zmienna mycar która przechowuje obiekt new Car
var myCar1 = new Car(30, "Humpty Dumpty");
var myCar2 = new Car(110, "James Bond");
var myCar3 = new Car(05, "Sebol");

myCar.drive(3,25);
console.log(myCar1.driver);
myCar2.logDriver();
console.log(myCar3.maxSpeed);