/* --------- FORMATAÇÕES DE TEXTO --------- */
// UPPERCASE
function caixaAlta(){
    let texto = document.getElementById('texto')
  
    texto.style.textTransform = 'uppercase'
}
  
// LOWERCASE
function caixaBaixa(){
    let texto = document.getElementById('texto')
  
    texto.style.textTransform = 'lowercase'
}
  
// CAPITALIZE
function capitalizar(){
    let texto = document.getElementById('texto')
  
    texto.style.textTransform = 'capitalize'
}
  
// JUSTIFY
function justificado(){
    let texto = document.getElementById('texto')
  
    texto.style.textAlign = 'justify'
    texto.style.textJustify = 'inter-word'
}

/* --------- ESTILOS DE FONTES --------- */
// FONTE
function altFonte(){
    let texto = document.getElementById('texto')

    // ESTILOS DE FONTES
    let fonteSansSerif = document.getElementById('fonte-sansSerif').value
    let fonteMonospace = document.getElementById('fonte-monospace').value
    let fonteCursive = document.getElementById('fonte-cursive').value
    let fonteFantasy = document.getElementById('fonte-fantasy').value

    // SANS SERIF
    console.log(fonteSansSerif)
    
    // LIMPAR OUTRAS CAIXAS DE SELEÇÃO
    document.getElementById('fonte-monospace').value = ""
    document.getElementById('fonte-cursive').value = ""
    document.getElementById('fonte-fantasy').value = ""

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
    console.log(fonteMonospace)

    // LIMPAR OUTRAS CAIXAS DE SELEÇÃO
    document.getElementById('fonte-sansSerif').value = ""
    document.getElementById('fonte-cursive').value = ""
    document.getElementById('fonte-fantasy').value = ""

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
    console.log(fonteCursive)
    
    // LIMPAR OUTRAS CAIXAS DE SELEÇÃO
    document.getElementById('fonte-monospace').value = ""
    document.getElementById('fonte-sansSerif').value = ""
    document.getElementById('fonte-fantasy').value = ""

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
    console.log(fonteFantasy)
    
    // LIMPAR OUTRAS CAIXAS DE SELEÇÃO
    document.getElementById('fonte-monospace').value = ""
    document.getElementById('fonte-sansSerif').value = ""
    document.getElementById('fonte-cursive').value = ""

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
}

/* --------- ALINHAMENTO DE TEXTO --------- */
// ALINHAR TEXTO A ESQUERDA
function esquerda(){
  let texto = document.getElementById('texto')

  texto.style.textAlign = 'left'
}

// ALINHAR TEXTO NO CENTRO
function centro(){
  let texto = document.getElementById('texto')

  texto.style.textAlign = 'center'
}

// ALINHAR TEXTO A DIREITA
function direita(){
  let texto = document.getElementById('texto')

  texto.style.textAlign = 'right'
}

/* --------- ESTILOS DE TEXTO --------- */
// NORMAL
function normal(){
  let texto = document.getElementById('texto')
  
  texto.style.fontWeight = 'normal'
  texto.style.fontStyle = 'normal'
  texto.style.textDecoration = 'none'
}

// NEGRITO
function negrito(){
  let texto = document.getElementById('texto')

  texto.style.fontWeight = 'bold'
}

// ITALICO
function italico(){
  let texto = document.getElementById('texto')

  texto.style.fontStyle = 'italic'
}

// SUBLINHADO
function sublinhado(){
  let texto = document.getElementById('texto')

  texto.style.textDecoration = 'underline'
}
