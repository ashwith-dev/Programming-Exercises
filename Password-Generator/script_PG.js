function passwordGenerator() {

    const upperCase = Number(document.getElementById("upperCase").checked) ;
    const lowerCase = Number(document.getElementById("lowerCase").checked) ;
    const numbers = Number(document.getElementById("numbers").checked) ;
    const symbols = Number(document.getElementById("symbols").checked);

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz" ;
    const numberChars = "0123456789" ;
    const specialChars = "!@#$%^&*():<?+=~" ; 

    const length = Number(document.getElementById("length").value) ; 
    let includeUpperCase = true ; 
    let includeLowerCase = true ;
    let includeNumbers = true ;
    let includeSymbols = true ;

    includeUpperCase = (upperCase === 1 ) ? true : false ;
    includeLowerCase = (lowerCase === 1 ) ? true : false ;
    includeNumbers = (numbers === 1 ) ? true : false ;
    includeSymbols  = (symbols === 1 ) ? true : false ;
    
    let allowedChars = "";
    let password = "" ;

    allowedChars += includeUpperCase ? upperCaseChars : "" ;
    allowedChars += includeLowerCase ? lowerCaseChars : "" ;
    allowedChars += includeNumbers ? numberChars : "" ;
    allowedChars += includeSymbols ? specialChars : "" ;

    if ( allowedChars.length === 0 ) {
         alert("At least 1 character set should be selected") ;
         document.getElementById("result").textContent = "" ;
    }

    
    for ( let i = 0; i < length ; i++ ) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length) ;
        password += allowedChars[randomIndex] ;
    }

    console.log(`Your Password is ${password}`) ;

    document.getElementById("result").textContent = password ;   

}
