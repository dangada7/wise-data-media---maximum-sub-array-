function runTests() {
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
    test7();
    test8();
    test9();
    test10();
    test11();
    test12();
}

function test1() {
    var arr = [1, 2, 3, 4, 5];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 0,
        maxEndIndex: 4,
        maxSum: 15
    });

    if (rightAnsStr == ansStr)
        console.log("test1 success - " + ansStr);
    else {
        console.log("test1 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }
}

function test2() {
    var arr = [-1, -1, -1, -1];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: -1,
        maxEndIndex: -1,
        maxSum: 0
    });

    if (rightAnsStr == ansStr)
        console.log("test2 success - " + ansStr);
    else {
        console.log("test2 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test3() {
    var arr = [];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = "null";

    if (rightAnsStr == ansStr)
        console.log("test3 success - " + ansStr);
    else {
        console.log("test3 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test4() {
    var arr = [1, 2, 3, -1, -1];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 0,
        maxEndIndex: 2,
        maxSum: 6
    });

    if (rightAnsStr == ansStr)
        console.log("test4 success - " + ansStr);
    else {
        console.log("test4 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test5() {
    var arr = [-1, -2, 3, 4, 5];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 2,
        maxEndIndex: 4,
        maxSum: 12
    });

    if (rightAnsStr == ansStr)
        console.log("test5 success - " + ansStr);
    else {
        console.log("test5 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test6() {
    var arr = [-1, -2, 3, 4, 5, -1, -1];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 2,
        maxEndIndex: 4,
        maxSum: 12
    });

    if (rightAnsStr == ansStr)
        console.log("test6 success - " + ansStr);
    else {
        console.log("test6 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test7() {
    var arr = [1, 2, 3, 4, 5, -50, 100];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 6,
        maxEndIndex: 6,
        maxSum: 100
    });

    if (rightAnsStr == ansStr)
        console.log("test7 success - " + ansStr);
    else {
        console.log("test7 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test8() {
    var arr = [-1, -2, 3, -4, -5];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 2,
        maxEndIndex: 2,
        maxSum: 3
    });

    if (rightAnsStr == ansStr)
        console.log("test8 success - " + ansStr);
    else {
        console.log("test8 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test9() {
    var arr = [1, 2, 3, 4, 5, -16, 20, 1, 2, 3];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 6,
        maxEndIndex: 9,
        maxSum: 26
    });

    if (rightAnsStr == ansStr)
        console.log("test9 success - " + ansStr);
    else {
        console.log("test9 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test10() {
    var arr = [1, 2, 3, 4, 5, -15, 20];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 6,
        maxEndIndex: 6,
        maxSum: 20
    });

    if (rightAnsStr == ansStr)
        console.log("test10 success - " + ansStr);
    else {
        console.log("test10 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }
}

function test11() {
    var arr = [10, 10, -10, -10, 10, 10, -40, -40, 30, 30];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 8,
        maxEndIndex: 9,
        maxSum: 60
    });

    if (rightAnsStr == ansStr)
        console.log("test11 success - " + ansStr);
    else {
        console.log("test11 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}

function test12() {
    var arr = [10, -20, 7, 7];
    var ansStr = JSON.stringify(get_startIndex_and_endIndex(arr));
    var rightAnsStr = JSON.stringify({
        maxStartIndex: 2,
        maxEndIndex: 3,
        maxSum: 14
    });

    if (rightAnsStr == ansStr)
        console.log("test12 success - " + ansStr);
    else {
        console.log("test12 failed:")
        console.log("current answer\t: " + ansStr);
        console.log("right answer\t: " + rightAnsStr);
    }

}
