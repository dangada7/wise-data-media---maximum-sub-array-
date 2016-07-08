function get_startIndex_and_endIndex(arr) {
    console.log("arr = [" + arr + "]");

    if (arr.length == 0)
        return null;

    var currentSum        = 0;
    var currentStartIndex = 0;

    var maxSum            = 0;
    var maxStartIndex     = 0;
    var maxEndIndex       = 0;

    //run in O(n)
    for (i = 0; i < arr.length; i++) {

        currentSum = currentSum + arr[i];

        if (arr[i] >= currentSum) {
            currentSum = arr[i];
            currentStartIndex = i;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxStartIndex = currentStartIndex;
            maxEndIndex = i;
        }

    }

    if (maxSum == 0){
      maxStartIndex = -1;
      maxEndIndex   = -1;
    }

    return {
        maxStartIndex: maxStartIndex,
        maxEndIndex:   maxEndIndex,
        maxSum:        maxSum
    };
}
