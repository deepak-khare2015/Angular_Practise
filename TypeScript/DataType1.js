function Test() {
    var marks = 33;
    var result = "pass";
    if (marks < 35) {
        var result = "fail";
        console.log("Inside Result: " + result);
    }
    //let result = "srikanth";
    console.log("Outside Result: " + result);
}
Test();
