/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Data frame transformation
 * =========================================================
 */
var dataForge = require('data-forge');

// invoke readfile and parse CSV to Dataframe
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

// auxiliar function
function rand(start, end) {
    // this function just return a value between start and end values
    return start + parseInt(Math.random() * (100 - start));
}

// A dataframe can be transformed using the select function:
var transformedDataFrame = dataFrame
    .select(function(row) {
        return {
            NewColumn: row.sepalwidth * 2, // <-- Transform existing column to create a new column.
            AnotherNewColumn: Math.random() // <-- Create a new column (in this cause just use random data).
        };
    });
// show the transformed dataframe
console.log("transformedDataFrame: ", transformedDataFrame.toString());