function check(){
    console.log("sdsd");
    let num=parseInt(document.querySelector("#text").value);
    if(checkint(num)){
        if(num<0){
            document.querySelector("#header").innerHTML="Wprowadzona liczba jest ujemna";
        }
        if(num>0){
            document.querySelector("#header").innerHTML="Wprowadzona liczba jest dodatnia";
        }
    }else{
        document.querySelector("#header").innerHTML="Wprowadzony tekst nie jest liczbą!";
    }
}

function checkint(arg){
    if(parseInt(arg)){
        return 1;
    }else{
        return 0;
    }
}

//elo
//sadsadas