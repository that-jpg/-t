const generateRandom = (n) => Math.floor(Math.random() * n);

const destroyConcept = () => {
    // I don't want this to be happening everyday, once every 1000 page visits seems good enough
    if (666 === generateRandom(1000)) { // 666 because why not
        const allComments = document.querySelectorAll('.comment p');
        if (allComments.length > 0) {
            // pick one at random 
            const cursedElement = allComments[generateRandom(allComments.length)];
            const cursedElementWords = cursedElement.textContent.split(" ");
            const forgottenWord = cursedElementWords[generateRandom(cursedElementWords.length)];
            console.log('The original word was: ' + forgottenWord)
            const newCursedText = cursedElement.textContent.replace(forgottenWord, "Ѭ͏̷̛t");
            cursedElement.textContent = newCursedText;
        }
    }
}

destroyConcept();