const wordsWithSpace = document.getElementById("word_with_space_no");
const wordsCount = document.getElementById("words-count");
const sentencesCount = document.getElementById("sentences-count");
const paragraphsCount = document.getElementById("paragraphs-count");
const textInput = document.getElementById("input-text");

textInput.addEventListener("input", () => {
    wordsWithSpace.textContent = textInput.value.length;

    let text = textInput.value.trim();

    wordsCount.textContent = text.split(/\s+/).filter((item)=> item).length;
    
    sentencesCount.textContent = text.split(/[.|!|?]+/g).length - 1;


    paragraphsCount.textContent = text.replace(/\n$/g, '').split(/\n/).length;
});

// let car = [1,2,3]
// console.log(car[1])

// const day = 2 > 3 ? console.log()