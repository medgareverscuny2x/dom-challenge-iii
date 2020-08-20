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

// check rows and columns
// if no rows, create a row and add a column
// else add a column to each row
// target all the <tr> elements
// loop over the collection (possibly convert to array first)
// add a column to each row
// increase the column count

const addColumn = () => {
  if (rows === 0) {
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    newRow.appendChild(newCell);
    table.appendChild(newRow);
    rows = 1;
  } else {
    const currentRows = document.getElementsByTagName("tr");
    const rowArr = Array.from(currentRows);
    rowArr.forEach((row) => {
      const newCell = document.createElement("td");
      row.appendChild(newCell);
    });
    rows++;
  }
  columns++;
};

// add an eventlistener:
addRowButton.addEventListener("click", (event) => {
  console.log("clicked add row");
  // when clicked:
  // add one row to the table
  addRow();
});

// target the add column button
const addColumnButton = document.getElementById("add-column-button");
// add eventlistener
addColumnButton.addEventListener("click", (event) => {
  console.log("clicked add column");
  // when clicked:
  // add one column to the table
  addColumn();
});

// const initialRows = 5;

// while (rows < initialRows) {
//   addRow();
// }

// target the remove row button
const removeRowButton = document.getElementById("remove-row-button");

const removeRow = () => {
  // check if there are any rows
  if (rows === 0) return;
  // target the last row
  const currentRows = document.getElementsByTagName("tr");
  const rowArr = Array.from(currentRows);
  const lastRow = rowArr[rowArr.length - 1];
  // remove the row
  lastRow.remove();
  // decrease row count
  rows--;
};

// add event listener to removeRowButton
removeRowButton.addEventListener("click", (event) => {
  console.log("clicked remove row");
  removeRow();
});

// to removeColumn
const removeColumn = () => {
  // check if columns, return if false
  if (columns === 0) return;
  // grab currentRows
  // loop over currentRows
  const currentRows = document.getElementsByTagName("tr");
  const rowArr = Array.from(currentRows);
  // remove the last child element of each Row
  rowArr.forEach((row) => {
    row.lastElementChild.remove();
  });
  // decrease column count
  columns--;
};

// target the remove column button
const removeColumnButton = document.getElementById("remove-column-button");

// add eventlistener to removeColumnButton
removeColumnButton.addEventListener("click", (event) => {
  console.log("clicked remove column");
  removeColumn();
});
