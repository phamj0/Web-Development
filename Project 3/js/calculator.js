
document.getElementById("calButton").onclick = function() {
    var num1 = document.getElementById("num1").value;
    report(summaryStats(num1));
};


var report = function(result) {
    document.getElementById("result").innerHtml = result;
};

/*
function summaryStats(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    
    var min = Math.min(num1, num2, num3);
    
    var median = (num1 + num2 + num3) / 3;
    
    var range = max - min;

    var average = (num1 + num2 + num3) / 3;
    
    return {
      max: max,
      min: min,
      median: median,
      range: range,
      average: average
    };
  }
  */

function summaryStats(num1) {
    return(num1);
}