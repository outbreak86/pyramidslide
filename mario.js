/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */


var symbol = '#';

function symbolChange(myLey) {
  symbol = myLey;
  drawPyramid(document.getElementById("height").value);
}


function drawPyramid(val) {

  height = val; // first, clear the old content
  document.getElementById("heightLabel").innerHTML = val;
  document.getElementById("pyramid").innerHTML = "";

  // for each row....
  for (var row = 0; row < height; row++) {

    // figure out number of bricks and spaces
    var numBricks = row + 2;
    var numSpaces = height - row - 1;

    // build up a string for this row
    var rowStr = "";
    for (var i = 0; i < numSpaces; i++) {
      var spacer =  "\u00A0";
      rowStr += spacer;
    }
    for (var i = 0; i < numBricks; i++) {
      rowStr += symbol;
    }

    // create a text element with the string of characters
    textElem = document.createTextNode(rowStr);

    // create a <p> element with the text inside
    rowElem = document.createElement("p");
    rowElem.appendChild(textElem);

    // insert the paragraph as a child of the container <div>
    document.getElementById("pyramid").appendChild(rowElem);
  }
}
