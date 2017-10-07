/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Sorting series 
 * =========================================================
 */
// import dependencies
var dataForge = require('data-forge');
/** Load dataset */
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

/**
 * Sorting
 */
// Series and dataframes can be sorted using the functions: orderBy and orderByDescending.
var sortedAscending = dataFrame.orderBy(row => row.sepallength);
var sortedDescending = dataFrame.orderByDescending(row => row.sepalwidth);
// show the ordering series
console.log(sortedAscending);
console.log(sortedDescending);

// Use thenBy and thenByDescending to specify additional sorting criteria:
var sorted = dataFrame
    .orderBy(row => row.sepallength)
    .thenByDescending(row => row.sepalwidth)
    .orderBy(row => row.petallength);