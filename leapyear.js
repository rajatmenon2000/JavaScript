function leapyear() {
    let year = document.querySelector("#year");
    let leapyear = document.querySelector("#leapyear");

    if (year.value % 400 == 0) {
        leapyear.innerHTML = year.value + " is a leapyear";
    }

    else if (year.value % 100 == 0) {
        leapyear.innerHTML = year.value + " is not a leapyear";
    }

    else if (year.value % 4 == 0) {
        leapyear.innerHTML = year.value + " is a leapyear";
    }

    else {
        leapyear.innerHTML = year.value + " is not a leapyear";
    }
}