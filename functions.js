function lcm(num1, num2) {
    if (num1 > num2) {
        let big = num1;
        let small = num2;
        for (let i = big; i < big * small; i++) {
            if (i % big == 0 && i % small == 0) {
                console.log(i);
                break;
            }
            else {
                continue;
            }
        }
    }
    else if (num1 < num2) {
        let small = num1;
        let big = num2;
        for (let i = big; i < big * small; i++) {
            if (i % big == 0 && i % small == 0) {
                console.log(i);
                break;
            }
            else {
                continue;
            }
        }
    }
    else if (num1 == num2) {
        console.log(num1);
    }
}