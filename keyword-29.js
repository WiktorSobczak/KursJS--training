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