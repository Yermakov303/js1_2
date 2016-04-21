function pow(){
    var num = prompt('Введите число');
    var exp = prompt('Введите степень');
    var result = num; 
    
if (exp==0){
result = 1;
}

else if(exp==1){
    result=num;
}

else if(exp==-1){
result = 1/result;
}

else if(exp>0){
   for (var i = exp; i>0; i--){
       result = result * num;
} 
}

else if(exp<0){
    var result = 1;
    for (var i = exp; i<0; i++){
     result = result *1/num;
}
}
  
else{
result="это не число";
}
 return result;  
}
var newResult = pow();
console.log('Результат =', newResult);

    
