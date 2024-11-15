function changeHeroTitle(choice) {
    // this code is only executed when invoked 
    // by some HTML event such as onclick 
    // variable choice contains a string 'sent' 
    // by the invocation on line 30 or 32.
    if (choice == 'es') {

        // we change the HTML of myImage 
        // and re-assign the file where the image sits.
        document.getElementById('myHeroTitle').innerHTML = "Un banco de pruebas para funciones JS que modifican páginas"
    
    } else {
    
        // it must be Italian
        document.getElementById('myHeroTitle').innerHTML = "Un banco di prova per funzioni JS che modificano  le pagine"
    
    }
} // end of changeHeroTitle function

function changebg(choice) {
    /* Check out the details here:
    https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
    */
    
    document.body.style.backgroundColor = choice

} // end of changebg function

