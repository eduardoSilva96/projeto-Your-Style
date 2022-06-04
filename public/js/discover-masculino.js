// Iniciando o Formulario
function start(){
    document.getElementById('iniciar_teste').style.display = 'none'
    document.getElementById('formulario_etapa1').style.display = 'flex'
}

// -------vetor para armazenar as respostas de cada etapa---------//
var respostas = [];

// -------variaveis para receber as pontuações---------//
var tradicional = 0;
var sofisticado = 0;
var esportivo = 0;
var romantico = 0;

// ---------------------VERIFICANDO CADA ETAPA E ARMAZENANDO A RESPOSTA EM UM VETOR------------------//
function verificar_etapa1(){
    if (document.getElementById('etapa1_r1').checked){
        respostas.push(etapa1_r1.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'

    } else if (document.getElementById('etapa1_r2').checked){
        respostas.push(etapa1_r2.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'
        
    } else if (document.getElementById('etapa1_r3').checked){
        respostas.push(etapa1_r3.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'

    } else if (document.getElementById('etapa1_r4').checked){
        respostas.push(etapa1_r4.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'
    
    } else if (document.getElementById('etapa1_r5').checked){
        respostas.push(etapa1_r5.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'

    } else if (document.getElementById('etapa1_r6').checked){
        respostas.push(etapa1_r6.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'
    
    } else if (document.getElementById('etapa1_r7').checked){
        respostas.push(etapa1_r7.value);
        console.log(respostas)
        document.getElementById('formulario_etapa1').style.display = 'none'
        document.getElementById('formulario_etapa2').style.display = 'flex'

    } else {
        alert ('Selecione Uma Opção Antes de prosseguir !')
    }
}

function verificar_etapa2(){
    if (document.getElementById('etapa2_r1').checked){
        respostas.push(etapa2_r1.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'

    } else if (document.getElementById('etapa2_r2').checked){
        respostas.push(etapa2_r2.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'
        
    } else if (document.getElementById('etapa2_r3').checked){
        respostas.push(etapa2_r3.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'

    } else if (document.getElementById('etapa2_r4').checked){
        respostas.push(etapa2_r4.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'
    
    } else if (document.getElementById('etapa2_r5').checked){
        respostas.push(etapa2_r5.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'
    
    } else if (document.getElementById('etapa2_r6').checked){
        respostas.push(etapa2_r6.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'
    
    } else if (document.getElementById('etapa2_r7').checked){
        respostas.push(etapa2_r7.value);
        console.log(respostas)
        document.getElementById('formulario_etapa2').style.display = 'none'
        document.getElementById('formulario_etapa3').style.display = 'flex'

    } else {
        alert ('Selecione Uma Opção Antes de prosseguir !')
    }
}

function verificar_etapa3(){
    if (document.getElementById('etapa3_r1').checked){
        respostas.push(etapa3_r1.value);
        console.log(respostas)
        document.getElementById('formulario_etapa3').style.display = 'none'
        document.getElementById('formulario_etapa4').style.display = 'flex'

    } else if (document.getElementById('etapa3_r2').checked){
        respostas.push(etapa3_r2.value);
        console.log(respostas)
        document.getElementById('formulario_etapa3').style.display = 'none'
        document.getElementById('formulario_etapa4').style.display = 'flex'
        
    } else if (document.getElementById('etapa3_r3').checked){
        respostas.push(etapa3_r3.value);
        console.log(respostas)
        document.getElementById('formulario_etapa3').style.display = 'none'
        document.getElementById('formulario_etapa4').style.display = 'flex'

    } else if (document.getElementById('etapa3_r4').checked){
        respostas.push(etapa3_r4.value);
        console.log(respostas)
        document.getElementById('formulario_etapa3').style.display = 'none'
        document.getElementById('formulario_etapa4').style.display = 'flex'
    
    } else if (document.getElementById('etapa3_r5').checked){
        respostas.push(etapa3_r5.value);
        console.log(respostas)
        document.getElementById('formulario_etapa3').style.display = 'none'
        document.getElementById('formulario_etapa4').style.display = 'flex'

    } else {
        alert ('Selecione Uma Opção Antes de prosseguir !')
    }
}

function verificar_etapa4(){
    if (document.getElementById('etapa4_r1').checked){
        respostas.push(etapa4_r1.value);
        console.log(respostas)
        document.getElementById('formulario_etapa4').style.display = 'none'
        document.getElementById('formulario_etapa5').style.display = 'flex'

    } else if (document.getElementById('etapa4_r2').checked){
        respostas.push(etapa4_r2.value);
        console.log(respostas)
        document.getElementById('formulario_etapa4').style.display = 'none'
        document.getElementById('formulario_etapa5').style.display = 'flex'
        
    } else if (document.getElementById('etapa4_r3').checked){
        respostas.push(etapa4_r3.value);
        console.log(respostas)
        document.getElementById('formulario_etapa4').style.display = 'none'
        document.getElementById('formulario_etapa5').style.display = 'flex'

    } else if (document.getElementById('etapa4_r4').checked){
        respostas.push(etapa4_r4.value);
        console.log(respostas)
        document.getElementById('formulario_etapa4').style.display = 'none'
        document.getElementById('formulario_etapa5').style.display = 'flex'

    } else {
        alert ('Selecione Uma Opção Antes de prosseguir !')
    }
}

function verificar_etapa5(){
    if (document.getElementById('etapa5_r1').checked){
        respostas.push(etapa5_r1.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('loading_resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r2').checked){
        respostas.push(etapa5_r2.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('loading_resultado').style.display = 'flex'
        
    } else if (document.getElementById('etapa5_r3').checked){
        respostas.push(etapa5_r3.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('loading_resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r4').checked){
        respostas.push(etapa5_r4.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('loading_resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r5').checked){
        respostas.push(etapa5_r5.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('loading_resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r6').checked){
        respostas.push(etapa5_r6.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('loading_resultado').style.display = 'flex'

    } else {
        alert ('Selecione Uma Opção Antes de prosseguir !')
    }

    setInterval(function () {
        document.getElementById("loading_resultado").style.display = "none";
        document.getElementById("resultado").style.display = "flex";
    }, 4000);

    resultado();
}




// -------------VERIFICANDO AS RESPOSTAS QUE ESTÃO NO VETOR & COM BASE NELAS DAR UMA PONTUAÇÃO AO ESTILO--------------//
function resultado(){

    if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)'){
        tradicional += 1;
        sofisticado += 1;
        esportivo += 1;

    } else if (respostas[0] == 'Tons monocromáticos e discretos'){
        sofisticado += 1;

    } else if (respostas[0] == 'Cor de rosa e tons pastéis'){
        romantico += 1;
        esportivo += 1;

    } else if (respostas[0] == 'Tons terrosos (bege, marrom, nude)'){
        sofisticado += 1;

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)'){
        tradicional += 1;
        sofisticado += 1;
        esportivo += 1;

    } else if (respostas[0] == 'Cores escuras'){
        tradicional += 1;
        sofisticado += 1;
    }
    

    if (respostas[1] == 'Jeans e camiseta básica'){
        tradicional +=1;
        esportivo += 1;

    }else if (respostas[1] == 'Roupas discretas e sem muito detalhes'){
        tradicional += 1;
        esportivo += 1;

    }else if (respostas[1] == 'Peças com estampa'){
        romantico += 1;
        esportivo += 1;

    }else if (respostas[1] == 'Peças de Alfaiataria'){
        sofisticado += 1;

    }else if (respostas[1] == 'Camisa e Bermuda/Short'){
        romantico += 1;

    }else if (respostas[1] == 'Roupas Sociais, (Ternos ou Camisas)'){
        sofisticado += 1;
    }
    

    if (respostas[2] == 'Prefiro jóias verdadeiras e semijoias, prezo por acessórios duráveis e de boa qualidade'){
        sofisticado += 1;

    } else if (respostas[2] == 'Gosto de peças práticas e simples, acessórios naturais, artesanais ou couro'){
        romantico += 1;

    }else if (respostas[2] == 'Prefiro acessórios pequenos e discretos'){
        tradicional += 1;
        sofisticado += 1;
        romantico += 1;

    }else if (respostas[2] == 'Não uso acessórios'){
        tradicional += 1;
        romantico += 1;
        esportivo += 1;
    }
   

    if (respostas[3] == 'Prefiro roupas justas'){
        tradicional += 1;
        sofisticado += 1;

    }else if (respostas[3] == 'Caimento mais Solto'){
        esportivo += 1;
        romantico += 1;

    }else if (respostas[3] == 'Caimento Alinhado (tecidos leves)'){
        tradicional += 1;
        sofisticado += 1;
        esportivo += 1;
    }
    
    
    if (respostas[4] == 'Sapato Social'){
        sofisticado += 1;

    }else if (respostas[4] == 'Sapatenis'){
        romantico += 1;

    }else if (respostas[4] == 'Tênis Esportivos'){
        tradicional += 1;

    }else if (respostas[4] == 'Tênis Casual'){
        esportivo += 1;
        tradicional += 1;

    }else if (respostas[4] == 'Botas'){
        romantico += 1;

    }else if (respostas[4] == 'Mocassim'){
        romantico += 1;
        sofisticado += 1;
        esportivo += 1;
    }
    
// ---------------------------VERIFICANDO AS PONTUAÇÕES E APLICANDO O RESULTADO----------------------------------------------------
    if (tradicional > sofisticado &&
        tradicional > esportivo &&
        tradicional > romantico)
        {
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (sofisticado > tradicional &&
        sofisticado > esportivo &&
        sofisticado > romantico)
        {
        text_resultado.innerHTML = `Seu estilo é: Elegante Sofisticado`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_elegante').style.display = "flex";

    } else if (esportivo > tradicional &&
        esportivo > sofisticado &&
        esportivo > romantico)
        {
        text_resultado.innerHTML = `Seu estilo é: Esportivo Casual`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_esportivo').style.display = "flex";

    } else if (romantico > tradicional &&
        romantico > sofisticado &&
        romantico > esportivo)
        {
        text_resultado.innerHTML = `Seu estilo é: Romântico`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_romantico').style.display = "flex";


// ---------------------------EM CASO DE EMPATE NAS PONTUAÇÕES----------------------------------------------------
    } else if (tradicional == esportivo){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (tradicional == sofisticado){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (tradicional == romantico){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_tradicional').style.display = "flex";


    } else if (sofisticado == esportivo){
        text_resultado.innerHTML = `Seu estilo é: Esportivo Casual`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_esportivo').style.display = "flex";

    } else if (sofisticado == romantico){
        text_resultado.innerHTML = `Seu estilo é: Elegante / Sofisticado`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_elegante').style.display = "flex";

    } else if (romantico == esportivo){
        text_resultado.innerHTML = `Seu estilo é: Esportivo Casual`
        document.getElementById('instrucao').style.display = "none";
        document.getElementById('img_esportivo').style.display = "flex";

    }
    
}