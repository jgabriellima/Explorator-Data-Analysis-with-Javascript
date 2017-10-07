/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Distinct values on data series
 * =========================================================
 */
var dataForge = require('data-forge');

// invoke readfile and parse CSV to Dataframe
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

// The distinct function for Series and DataFrame works very much.
// The DataFrame version must be supplied a selector that selects which column to use for comparison:
var distinctDataFrame = dataFrame.distinct(function(row) {
    return row.class;
});

console.log(distinctDataFrame.toString());
// The result is a DataFrame with duplicate rows removed. The first index for each group of duplicates is preserved.
// The Series version takes no parameters:
var distinctSeries = dataFrame.getSeries("sepallength").distinct();
//show serie with unique values
console.log(distinctSeries.toString());