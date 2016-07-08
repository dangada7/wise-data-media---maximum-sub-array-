document.addEventListener('DOMContentLoaded', function() {

    // var sll = new LinkedList();
    var arr = []

    var eBtn_add = document.getElementById("add");
    //add button
    eBtn_add.addEventListener('click', function() {
        var eDiv_array = document.getElementById("array");

        var inputVal = document.getElementById("input-search").value;
        // check input
        if (inputVal == "") {
            alert("Input is empty, please insert a new value at the input bar above");
            return;
        }
        //check input
        if (isNaN(inputVal)) {
            if (inputVal == "tests"){
              runTests();
            }else{
              alert("Input isn't a number, please insert a number");
            }
            return;
        }

        //div id equal to location of the current insert value in the array
        var eDiv_newCell = createHtmlElement("div", [{
            name: "id",
            value: arr.length
        }, {
            name: "class",
            value: "label label-default col-xs-1"
        }]);
        var eP_newCell = createHtmlElement("p", null);
        var tn_num = document.createTextNode(inputVal);

        arr.push(parseInt(inputVal));

        eP_newCell.appendChild(tn_num);
        eDiv_newCell.appendChild(eP_newCell);
        eDiv_array.appendChild(eDiv_newCell);

    });

    //calculate button
    var eBtn_calculate = document.getElementById("calculate");
    eBtn_calculate.addEventListener('click', function() {

        var ans = get_startIndex_and_endIndex(arr);
        if (ans!=null){
          for(i=0; i<arr.length; i++){
            var eDiv_cell = document.getElementById(i);
            if(i >= ans.maxStartIndex && i <= ans.maxEndIndex){
              eDiv_cell.setAttribute("class", "label label-success col-xs-1");
            }else{
              eDiv_cell.setAttribute("class", "label label-danger col-xs-1");
            }
          }
          var eDiv_maxSum = document.getElementById("maxSum");
          var tn_maxSum = document.createTextNode("maxSum = " + ans.maxSum)
          eDiv_maxSum.innerHTML = '';
          eDiv_maxSum.appendChild(tn_maxSum);

        }
    });

    //reset button
    var eBtn_reset = document.getElementById("reset");

    eBtn_reset.addEventListener('click', function() {
        arr = [];
        var eDiv_array = document.getElementById("array");
        eDiv_array.innerHTML = '';

        var eDiv_maxSum = document.getElementById("maxSum");
        eDiv_maxSum.innerHTML = '';
    });

});

// create html element function
function createHtmlElement(s_elementName, propertyArr) {
    var newTagElement = document.createElement(s_elementName);
    if (propertyArr == null) {
        return newTagElement;
    }
    for (var i = 0; i < propertyArr.length; i++) {
        newTagElement.setAttribute(propertyArr[i].name, propertyArr[i].value);
    }
    return newTagElement;
};
