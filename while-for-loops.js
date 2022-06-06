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

// lesson 18 BREAK AND CONTINUES
/*
for (i = 1; i <= 10; i++){ // Pętla for która zaczyna się do 1. Posiada zbiór elementów mniejszych lub równych 10 oraz po każdym obrociee powiększa się o jeden
    console.log(i);//wywołanie zmiennej i (parametru i)
    
    if(i === 7){//jeśli "i" osiągnie siedem  
    //jeśli użyjemy console.log w tym miejscy wyświetli sie tylko 7        
        break;//wtedy pętla zostanie złamana przerwie się.Pętla osiagając liczbę 7 skonczy się
    }
    //Jeśli użyjemy console.log w tym miejscu to pętla przerwie się na 6 (skonczy się przed 7)
}
console.log("i have broken out the loop");//Gdy pętla osiągnie cyfrę 7 skończy się a wtedy wyświetli się ten napis

for(i = 1; i <= 10; i++){//Petla ze zmienną i która zaczyna sie od 1. Zbiór elementów które bierze pod uwagę to wszystkie mniejjsze lub równe 10 i po każdym okrażeniu "i" powiekszane jest o 1
          // jeśli console.log wyświetlisie w tym miejscu wyświetlą sie wszystkie cyfry z pętli   
    if(i===5 || i===3){//jeśli i jest równe 5 lub 3 
         //jeśli console log wystapi w tym miejscu wyświetlą sie tylko 5 and 3
        continue;//przeskocz (kontynuuj pomijając)   
}
console.log(i);//wywołaj zmienna i(console log zawsze musi być po funkcji continue żeby uzyskać chciany efekt)
}
*/