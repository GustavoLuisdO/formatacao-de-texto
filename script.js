var texto = document.getElementById('texto')

/* --------- FORMATAÇÕES DE TEXTO --------- */
// UPPERCASE
function caixaAlta(){
  
    texto.style.textTransform = 'uppercase'
}
  
// LOWERCASE
function caixaBaixa(){
    texto.style.textTransform = 'lowercase'
}
  
// CAPITALIZE
function capitalizar(){
    texto.style.textTransform = 'capitalize'
}

// COR DO TEXTO
function cor(){
  let corTexto = document.getElementById('cor').value

  //console.log(corTexto)
  texto.style.color = corTexto
}

// FONTE UP
function fonteUp(){
    let texto = document.getElementById('texto').style.fontSize
    let tamanhoFonte = document.getElementById('tamanho-fonte')

    texto = texto.replace('px', '')

    if(texto == ""){
        document.getElementById('texto').style.fontSize = '16px'
    }
    else{
        document.getElementById('texto').style.fontSize = (parseInt(texto)+1)+'px'
    }

    tamanhoFonte.innerHTML = texto

    //console.log(texto+'px')
}


// FONTE DOWN
function fonteDown(){
    let texto = document.getElementById('texto').style.fontSize
    let tamanhoFonte = document.getElementById('tamanho-fonte')

    texto = texto.replace('px', '')

    if(texto == ""){
        document.getElementById('texto').style.fontSize = '16px'
    }
    else{
        document.getElementById('texto').style.fontSize = (parseInt(texto)-1)+'px'
    }

    tamanhoFonte.innerHTML = texto

    //console.log(texto+'px')
}

/* --------- ESTILOS DE FONTES --------- */
// FONTE
function altFonte(){

    // ESTILOS DE FONTES
    let fonteSansSerif = document.getElementById('fonte-sansSerif').value
    let fonteMonospace = document.getElementById('fonte-monospace').value
    let fonteCursive = document.getElementById('fonte-cursive').value
    let fonteFantasy = document.getElementById('fonte-fantasy').value

    // SANS SERIF
    //console.log(fonteSansSerif)

    // LOGICA PARA APLICAR A FONTE ESCOLHIDA
    switch(fonteSansSerif)
    {
        case '1': texto.style.fontFamily = 'Arial, sans-serif'
            break
        
        case '2': texto.style.fontFamily = 'Helvetica, sans-serif'
            break
        
        case '3': texto.style.fontFamily = 'Verdana, sans-serif'
            break

        case '4': texto.style.fontFamily = 'Trebuchet MS, sans-serif'
            break
        
        default: document.getElementById('fonte-sansSerif').value = ""
    }

    // MONOSPACE
    //console.log(fonteMonospace)

    // LOGICA PARA APLICAR A FONTE ESCOLHIDA
    switch(fonteMonospace)
    {
        case '1': texto.style.fontFamily = 'Andale Mono, monospace'
            break
        
        case '2': texto.style.fontFamily = 'Courier New, monospace'
            break
        
        case '3': texto.style.fontFamily = 'Courier, monospace'
            break

        case '4': texto.style.fontFamily = 'FreeMono, monospace'
            break
        
        default: document.getElementById('fonte-monospace').value = ""
    }

    // CURSIVE
    //console.log(fonteCursive)

    // LOGICA PARA APLICAR A FONTE ESCOLHIDA
    switch(fonteCursive)
    {
        case '1': texto.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive'
            break
        
        case '2': texto.style.fontFamily = 'Apple Chancery, cursive'
            break
        
        case '3': texto.style.fontFamily = 'Bradley Hand, cursive'
            break

        case '4': texto.style.fontFamily = 'Brush Script MT, Brush Script Std, cursive'
            break
        
        default: document.getElementById('fonte-cursive').value = ""
    }

    // FANTASY
    //console.log(fonteFantasy)

    // LOGICA PARA APLICAR A FONTE ESCOLHIDA
    switch(fonteFantasy)
    {
        case '1': texto.style.fontFamily = 'Impact, fantasy'
            break
        
        case '2': texto.style.fontFamily = 'Luminari, fantasy'
            break
        
        case '3': texto.style.fontFamily = 'Chalkduster, fantasy'
            break

        case '4': texto.style.fontFamily = 'Jazz LET, fantasy'
            break
        
        default: document.getElementById('fonte-fantasy').value = ""
    }

    // LIMPAR CAIXAS DE SELEÇÃO
    document.getElementById('fonte-sansSerif').value = ""
    document.getElementById('fonte-monospace').value = ""
    document.getElementById('fonte-cursive').value = ""
    document.getElementById('fonte-fantasy').value = ""
}

/* --------- ALINHAMENTO DE TEXTO --------- */
// ALINHAR TEXTO A ESQUERDA
function esquerda(){
  texto.style.textAlign = 'left'
}

// ALINHAR TEXTO NO CENTRO
function centro(){
  texto.style.textAlign = 'center'
}

// ALINHAR TEXTO A DIREITA
function direita(){
  texto.style.textAlign = 'right'
}

// JUSTIFY
function justificado(){
    texto.style.textAlign = 'justify'
    texto.style.textJustify = 'inter-word'
}

/* --------- ESTILOS DE TEXTO --------- */
// NORMAL
function normal(){
  texto.style.fontWeight = 'normal'
  texto.style.fontStyle = 'normal'
  texto.style.textDecoration = 'none'
  
}

// NEGRITO
function negrito(){
  texto.style.fontWeight = 'bold'
}

// ITALICO
function italico(){
  texto.style.fontStyle = 'italic'
}

// SUBLINHADO
function sublinhado(){
  texto.style.textDecoration = 'underline'
}
