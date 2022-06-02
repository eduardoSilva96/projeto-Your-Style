
// -------vetor para armazenar as respostas de cada etapa---------//
var respostas = [];

 

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
        document.getElementById('resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r2').checked){
        respostas.push(etapa5_r2.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('resultado').style.display = 'flex'
        
    } else if (document.getElementById('etapa5_r3').checked){
        respostas.push(etapa5_r3.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r4').checked){
        respostas.push(etapa5_r4.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('resultado').style.display = 'flex'

    } else if (document.getElementById('etapa5_r5').checked){
        respostas.push(etapa5_r5.value);
        console.log(respostas)
        document.getElementById('formulario_etapa5').style.display = 'none'
        document.getElementById('resultado').style.display = 'flex'

    } else {
        alert ('Selecione Uma Opção Antes de prosseguir !')
    }

    resultado();
}

// -------------VERIFICANDO AS RESPOSTAS QUE ESTÃO NO VETOR & COM BASE NELAS DAR UM RESULTADO(ESTILO)--------------//
function resultado(){

    // ---------------------------TRADICIONAL----------------------------------------//
    if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Jeans e camiseta básica' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual'
        ){       
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Jeans e camiseta básica' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual'
        ){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Roupas discretas e sem muito detalhes' &&
        respostas[2] == 'Não gosto de acessórios' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Roupas discretas e sem muito detalhes' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Roupas discretas e sem muito detalhes' &&
        respostas[2] == 'Não gosto de acessórios' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual'
        ){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Roupas discretas e sem muito detalhes' &&
        respostas[2] == 'Não gosto de acessórios' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Roupas discretas e sem muito detalhes' &&
        respostas[2] == 'Não gosto de acessórios' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Tradicional`
        document.getElementById('img_tradicional').style.display = "flex";

    // ---------------------------ELEGANTE / SOFISTICADO----------------------------------------//
    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Peças de Alfaiataria' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Sapatos Sociais'
        ){
        text_resultado.innerHTML = `Seu estilo é: Elegante / Sofisticado`
        document.getElementById('img_elegante').style.display = "flex";

    } else if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Roupas Sociais, Ternos e camisa' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Sapatos Sociais'
        ){
        text_resultado.innerHTML = `Seu estilo é: Elegante / Sofisticado`
        document.getElementById('img_elegante').style.display = "flex";
    
    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Roupas Sociais, Ternos e camisa' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Sapatenis'
        ){
        text_resultado.innerHTML = `Seu estilo é: Elegante / Sofisticado`
        document.getElementById('img_elegante').style.display = "flex";

    } else if (respostas[0] == 'Cores Acromáticas (Preto, Branco, Cinza)' &&
        respostas[1] == 'Roupas Sociais, Ternos e camisa' &&
        respostas[2] == 'Prefiro jóias verdadeiras e semijoias, prezo por acessórios duráveis e de boa qualidade' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Sapatos Sociais'
        ){
        text_resultado.innerHTML = `Seu estilo é: Elegante / Sofisticado`
        document.getElementById('img_elegante').style.display = "flex";
    
    // ---------------------------ESPORTIVO / CASUAL----------------------------------------//
    } else if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Bermuda e camisa' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual' || respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Esportivo / Casual`
        document.getElementById('img_esportivo').style.display = "flex";

    } else if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Bermuda e camisa' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual' || respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Esportivo / Casual`
        document.getElementById('img_esportivo').style.display = "flex";

    } else if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Bermuda e camisa' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual' || respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Esportivo / Casual`
        document.getElementById('img_esportivo').style.display = "flex";

    } else if (respostas[0] == 'Cores neutras (preto, branco, azul marinho)' &&
        respostas[1] == 'Bermuda e camisa' &&
        respostas[2] == 'Prefiro acessórios pequenos e discretos' &&
        respostas[3] == 'Caimento Alinhado (tecidos leves)' &&
        respostas[4] == 'Tênis Casual' || respostas[4] == 'Tênis Esportivos'
        ){
        text_resultado.innerHTML = `Seu estilo é: Esportivo / Casual`
        document.getElementById('img_esportivo').style.display = "flex";

    }
}