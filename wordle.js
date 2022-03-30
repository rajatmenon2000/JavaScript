/*JavaScript function
implementing a wordle game*/

function wordle(target, guess) {
    if (target.length == 5 && guess.length == 5) {
        if (target.charAt(0) == guess.charAt(0)) {
            first = "The first letter is in the correct position";
        }
        else if (target.includes(guess.charAt(0)) && target.charAt(0) != guess.charAt(0)) {
            first = "The first letter appears in the word, but in a different position";
        }
        else {
            first = "The first letter does not appear in the word";
        }
        if (target.charAt(1) == guess.charAt(1)) {
            second = "the second letter is in the correct position";
        }
        else if (target.includes(guess.charAt(1)) && target.charAt(1) != guess.charAt(1)) {
            second = "the second letter appears in the word, but in a different position";
        }
        else {
            second = "the second letter does not appear in the word";
        }
        if (target.charAt(2) == guess.charAt(2)) {
            third = "the third letter is in the correct position";
        }
        else if (target.includes(guess.charAt(2)) && target.charAt(2) != guess.charAt(2)) {
            third = "the third letter appears in the word, but in a different position";
        }
        else {
            third = "the third letter does not appear in the word";
        }
        if (target.charAt(3) == guess.charAt(3)) {
            fourth = "the fourth letter is in the correct position";
        }
        else if (target.includes(guess.charAt(3)) && target.charAt(3) != guess.charAt(3)) {
            fourth = "the fourth letter appears in the word, but in a different position";
        }
        else {
            fourth = "the fourth letter does not appear in the word";
        }
        if (target.charAt(4) == guess.charAt(4)) {
            fifth = "the fifth letter is in the correct position";
        }
        else if (target.includes(guess.charAt(4)) && target.charAt(4) != guess.charAt(4)) {
            fifth = "the fifth letter appears in the word, but in a different position";
        }
        else {
            fifth = "the fifth letter does not appear in the word";
        }
        console.log(first + ", " + second + ", " + third + ", " + fourth + ", " + fifth);
    }

    else {
        result = "Both arguments must be length of 5 letters!";
        console.log(result);
    }
}
