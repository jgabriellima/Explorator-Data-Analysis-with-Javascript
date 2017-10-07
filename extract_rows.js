/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Extracting rows from a data-frame
 * =========================================================
 */

/** import dependencies */
var dataForge = require('data-forge');

// invoke readfile and parse CSV to Dataframe
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

/**
 * Values can be extracted from a dataframe in several ways.
 */

//To extract rows as arrays of data (ordered by column):
var arrayOfArrays = dataFrame.toRows();
//Show arrayOfArrays
console.log(arrayOfArrays);

// To extract rows as objects (with column names as fields):
var arrayOfObjects = dataFrame.toArray();
// Show dataframe like a array
console.log(arrayOfObjects);

// To extracts index + row pairs: [INDEX,OBJECT]
var arrayOfPairs = dataFrame.toPairs();
// Show array with pairs index-object 
console.log(arrayOfPairs);

/**
 * A new data-frame can also be created from a between of rows:
 */
// To use between your index must already be sorted.
var rowSubset = dataFrame.between(10, 11);
// Show the subset between indexes 10 and 11
console.log(rowSubset.toString());
//Invoke a callback for each row in a dataframe using forEach:
dataFrame.forEach(function(row) {
    // show each row in dataframe
    console.log(row)
});