#!/usr/bin/env node

const capitalizeName = (name) => {
    console.log(name);
    
    /*const firstLetter = name.slice(0, 1);
    console.log(firstLetter);
    
    const restOfName = name.slice(1);
    console.log(restOfName);
    
    const capitalizedName = firstLetter.toUpperCase() + restOfName.toLowerCase(); */
    
    const capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    console.log(`Capitalized: ${capitalizedName}`);
    return(capitalizedName);
}

capitalizeName("KAISA"); // test case 1
capitalizeName("kaisa"); // test case 2
capitalizeName("kAISA"); // test case 3
capitalizeName("KaIsa"); // test case 4
capitalizeName("kAiSa"); // test case 5