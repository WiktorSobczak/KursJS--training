//lesson 16
/*
var age = 5;//zmienna nazywa się age i ma wartość 5. Pętla będzie zaczynac się od 5

while(age < 10) {//pętla while=do kiedy. Do kiedy age będzie mniejsze od 10 będzie dizałać. Jeśli age będzie 10 skończy się
    console.log("You age is less than 10");//jeśli age będzie mniejsze od 10 będzie wyświetlał sie napis z wiersza
    age++;//oznacza to że do zmiennej age po każdym obrocie pętli będzie dodawać się 1
}
document.write("you are now over 10");//gdy pętla nię będzie spełniać warunku podanego w nawiasie wyskoczy z pętki i pojawi się napis z tej liijki
*/
/*
for( age = 0; age < 10; age++) {
    console.log("You age is less than 10");
}
console.log("You are now over 10");
*/
//lesson 17
/*
var links = document.getElementsByTagName("a")//zmienna o nazwie links która przechowuje linki znajdujące się w dokumencie

for(i = 1; i <= links.length; i++){// pętla for zaczyna się od 1, odnosi się do długości(ilości) linków w dokumencie, dodajemy + 1
    console.log("this is link number" + i);// wyświetli się napis plus "i" czyli cyfra linku
}
document.write("all links now looped");//po wyjściu z petli wyświetli się ta linijka
*/