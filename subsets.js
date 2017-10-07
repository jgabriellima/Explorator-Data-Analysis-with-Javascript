/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Work with data subsets
 * =========================================================
 */
// import dependencies
var dataForge = require('data-forge');

/** Load dataset */
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

// between(Index start, Index end): return rows between indexes 
var rowSubset = dataFrame.between(10, 11);
console.log(rowSubset.toArray());

// There are multiple ways to extract a subset of data from a series or dataframe.
// At the most basic skip and take allow a specified number of values to be skipped or taken.
var newSubset = dataFrame.skip(10).take(15);
console.log('newSubset', newSubset.toString());

// head and tail are handy functions that can extract X elements at the start or end of the sequence:
var head = dataFrame.head(10);
var tail = dataFrame.tail(5);
console.log('head', head.toString());
console.log('tail', tail.toString());

// A bit more advanced are skipWhile, takeWhile, skipUntil and takeUntil. 
// These all skip or take values according to the boolean result of a predicate function:
var newSeries = dataFrame.skipUntil(row => (row) => {
    console.log(row)
    return row.class !== 'Iris-virginica';
});
// show the filtered serie
console.log('skipUntil', newSeries.toString());