// `getElementById()`
// `addEventListener()`
// `getElementsByTagName()`
// `createElement()`
// `appendChild()`
// `event.target`
// `node.children`
// `Array.from()`
// `mousedown`
// `mouseover`
// `mouseup`

// track the number of rows and columns
// keep track of current # rows
let rows = 0;
// keep track of current # columns
let columns = 0;

const table = document.getElementById("my-table");

// target the add-row-button
const addRowButton = document.getElementById("add-row-button");

// adding a row:
const addRow = () => {
  const newRow = document.createElement("tr");
  // add a row based on columns
  if (columns === 0) {
    // if no columns, add 1 and increase column count
    const newCell = document.createElement("td");
    newRow.appendChild(newCell);
    columns = 1;
  } else {
    // else keep adding a cell for every number of columns
    for (let i = 0; i < columns; i++) {
      const newCell = document.createElement("td");
      newRow.appendChild(newCell);
    }
  }
  //   add new row to the table on page
  table.appendChild(newRow);
  // increase row count
  rows++;
};

// add an eventlistener:
addRowButton.addEventListener("click", (event) => {
  console.log("clicked add row");
  // when clicked:
  // add one row to the table
  addRow();
});
