const capitalizeWord = (word) => {
    //console.log(word);
    const capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    return capitalizedWord;
}

const capitalizeHeadline = (headline) => {
    console.log(headline);
    
    const words = headline.split(" ");
    //console.log(words);
    
    const capitalizedList = [];
    for (let i = 0; i < words.length; i++) { 
        let iCaps = capitalizeWord(words[i]);
        capitalizedList.push(iCaps);
    }
    //console.log(capitalizedList.length);
    //const capitalizedList = words.map(capitalizeWord);
    console.log(capitalizedList);
    const capitalizedHeadline = capitalizedList.join(" ");
   
    console.log(`Capitalized headline: ${capitalizedHeadline}`);
    return capitalizedHeadline;
}

//tests
console.log(capitalizeHeadline("winter is coming"));
console.log(capitalizeHeadline("THIS IS A BIG HEADLINE"));
console.log(capitalizeHeadline("do Not Use CamelCase In Headlines"));
