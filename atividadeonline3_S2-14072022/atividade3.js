const pesodapecaemgramas = 50;

if (pesodapecaemgramas >= 100){

console.log(pesodapecaemgramas + ' gramas' + ' Peso suficiente para cadastrar\n');}

else {

console.log(pesodapecaemgramas + ' gramas' + ' Peso insuficiente para cadastrar\n')}

listaDePecas = ['AAA', 'BBB', 'CC'];

if (listaDePecas.length > 10){

    console.log('A caixa não tem capacidade suficiente\n');
}
else{

    for (let index = 0; index < listaDePecas.length; index++){
        const pecaatual = listaDePecas[index];

        if (pecaatual.length < 3){

            console.log(pecaatual + ' A peça possui um nome com 3 caracteres ou menos\n');

        }
        else{
            console.log(pecaatual + ' A peça pode ser cadastrada\n');
        }
    }
}