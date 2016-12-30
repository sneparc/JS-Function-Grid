//Write your function calls below this line
 function setColor(row, col, color) {
    var cell = $("#t")[0].rows[row].cells[col];
    cell.style.backgroundColor = color;
             }
setColor(0,0, "blue");
setColor(9, 0, "blue");
setColor(0, 9, "blue");
setColor(9, 9, "blue");