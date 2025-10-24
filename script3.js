let i,cont1=0,cont2=0,numero;
for(i=0;i<10;i++){
    numero=Number(prompt("Ingresar numero"));
    if(numero%2==0){
        cont1++;
    }
    if(numero%2==1){
        cont2++;
    }
}
alert("hay "+cont1+" numeros pares");
alert("hay "+cont2+" numeros impares");