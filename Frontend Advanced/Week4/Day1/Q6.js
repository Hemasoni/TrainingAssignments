function getMax() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var s = 0;
    console.log("Numbers given by the user:");
    for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
        var n = ar_1[_a];
        console.log(n);
        if (s < n)
            s = n;
    }
    console.log("Maximum of the given numbers : " + s);
}
getMax(10, 20, 70, 80);
getMax(200, 300, 700);
