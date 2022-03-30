function lcm() {
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let value = document.querySelector("#value");

    if (num1.value > num2.value) {
        let big = num1.value;
        let small = num2.value;
        for (let i = big; i <= big * small; i++) {
            if (i % big == 0 && i % small == 0) {
                value.innerHTML = i;
                break;
            }
            else {
                continue;
            }
        }
    }
    else if (num1.value < num2.value) {
        let small = num1.value;
        let big = num2.value;
        for (let i = big; i <= big * small; i++) {
            if (i % big == 0 && i % small == 0) {
                value.innerHTML = i;
                break;
            }
            else {
                continue;
            }
        }
    }
    else if (num1.value == num2.value) {
        value.innerHTML = num1.value;
    }
}
