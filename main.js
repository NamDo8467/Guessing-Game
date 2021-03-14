$(document).ready(function () {
    let answer
    let underScore = ''
    let newUnderScore
    let words = ['lifestyle', 'doctor', 'programmer', 'javascript', 'computer',
        'house', 'soccer', 'swim', 'internet', 'python',
        'toronto', 'canada', 'zebra', 'kingdom', 'youth',
        'lobster', 'future', 'vintage', 'rectangle', 'derivative']

    let randomWord = words[Math.floor(Math.random() * 20)]

    let placeHolder = $('#place-holder') //Grab the place holder where the underscore is

    for (const iterator of randomWord) {
        underScore = underScore + '-' //add underscore 
    }
    placeHolder.children('p').append(underScore) // display the underscore on the screen

    //When user hit 'submit' button
    $('#answer-area').on('click', '#submit', function () {
        answer = $('input').val()
        upperCaseAnswer = answer.toUpperCase()
        upperCaseRandomWord = randomWord.toUpperCase()
        $('input').val('')

        if (upperCaseRandomWord.includes(answer) || randomWord.includes(answer)) {
            let occurrences = find(answer, randomWord)
            let upperCaseOccurrences = find(answer, upperCaseRandomWord)
            if (answer == randomWord) {
                alert("Congratulation, you got the right word")
                placeHolder.children('p').empty().append(answer)
            } else {
                if (answer == upperCaseAnswer) {
                    upperCaseOccurrences.forEach(element => {
                        underScore = underScore.substring(0, element) + answer.toLowerCase() + underScore.substring(element + 1)
                    });
                } else if (answer == answer.toLowerCase()) {
                    occurrences.forEach(element => {
                        underScore = underScore.substring(0, element) + answer + underScore.substring(element + 1)
                    });
                }


                placeHolder.children('p').empty().append(underScore)
                check(randomWord)
            }
        }

    })

    //When user hit "Enter" instead of submit button
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            answer = $('input').val()
            upperCaseAnswer = answer.toUpperCase()
            upperCaseRandomWord = randomWord.toUpperCase()
            $('input').val('')
            if (upperCaseRandomWord.includes(answer) || randomWord.includes(answer)) {
                let occurrences = find(answer, randomWord)
                let upperCaseOccurrences = find(answer, upperCaseRandomWord)
                if (answer == randomWord) {
                    alert("Congratulation, you got the right word")
                    placeHolder.children('p').empty().append(answer)
                } else {
                    if (answer == upperCaseAnswer) {
                        upperCaseOccurrences.forEach(element => {
                            underScore = underScore.substring(0, element) + answer.toLowerCase() + underScore.substring(element + 1)
                        });
                    } else if (answer == answer.toLowerCase()) {
                        occurrences.forEach(element => {
                            underScore = underScore.substring(0, element) + answer + underScore.substring(element + 1)
                        });
                    }


                    placeHolder.children('p').empty().append(underScore)
                    check(randomWord)
                }
            }
        }


    })

    //Change to a new random word
    $('#answer-area').on('click', '#restart', function () {
        $('input').val('')
        randomWord = words[Math.floor(Math.random() * 20)]
        underScore = ''
        for (const iterator of randomWord) {
            underScore = underScore + '-' //add underscore 
        }
        placeHolder.children('p').empty().append(underScore)
    })


    //function to check if the word matches the random word
    function check(randomWord) {
        let word = $('p').text()
        if (word == randomWord) {
            alert("Congratulation, you got the right word")
        }
    }


    //Find all occurrence all a letter in the generate random word and return it 
    function find(letter, word) {
        let result = [];
        let occurrence = word.indexOf(letter);
        while (occurrence != -1) {
            result.push(occurrence)
            occurrence = word.indexOf(letter, occurrence + 1);

        }
        return result
    }


})
