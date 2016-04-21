var names = [];

 for (var i=0; i<5; i++) {
 names[i]= prompt('Введите имя');
 console.log(names);
} 
var login = prompt('Введите Ваше имя');

for(var i=0; i<names.length; i++){
        
    if (login==names[i]){
      
        alert(login + ', вы успешно вошли');
        var flag = true;
        break;
}
    else {
        var flag = false;
}
}

if (flag==!true){
 alert('Ошыбка');   
}
