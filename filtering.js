/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Filtering a data-frame
 * =========================================================
 */

var dataForge = require('data-forge');

/** LOAD DATASET by CSV file */
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

// Dataframes and series can be filtered using the where function:
// The predicate function must return truthy to keep the row, or falsy to filter it out, for example:
var newDf = dataFrame
    .where(function(row) {
        return row.class == 'Iris-versicolor'
    });
//the result is a new dataframe with the filtered values
console.log(newDf.toString());