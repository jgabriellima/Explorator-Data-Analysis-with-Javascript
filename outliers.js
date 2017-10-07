/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Work with Outliers
 * =========================================================
 */
// import dependencies
var stats = require("stats-analysis");
var dataForge = require('data-forge');
/** Load dataset */
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();
/** Identify outliers indexes */
indexOfOutliers = stats.indexOfOutliers(dataFrame.getSeries("class").toArray());
/** show outliers indexes array */
console.log(indexOfOutliers.toString());
/** Remove outliers  */
filterOutliers = stats.filterOutliers(dataFrame.getSeries("class").toArray());
/** show filtered array*/
console.log(filterOutliers.toString());