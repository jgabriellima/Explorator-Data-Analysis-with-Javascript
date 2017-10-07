/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Load File to Dataframe
 * =========================================================
 */

// import dependencies
var dataForge = require('data-forge');

// invoke readfile and parse CSV to Dataframe
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

// Show the Dataframe object
console.log(dataFrame);