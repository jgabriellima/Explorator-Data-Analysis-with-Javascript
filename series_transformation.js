/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Series transformation
 * =========================================================
 */
// import dependencies
var dataForge = require('data-forge');

/** Load dataset */
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

//auxiliar function for transform values
function transform(value) {
    return value * 100;
}

//Series can be transformed using select:
var oldSeries = dataFrame.getSeries("sepallength");
var newSeries = oldSeries
    .select(function(value) {
        // Apply a transformation to each value in the column.
        return transform(value);
    });

// Plug the modified series back into the data-frame.
var newDf = dataFrame.withSeries("sepallength_2", newSeries);
console.log(newDf.orderBy(row => row.sepallength).between(10, 15).toString());

/**
 * Transform a series in a dataframe
 */
var newDf = dataFrame.transformSeries({
    sepallength: function(value) {
        return transform(value);
    }
});
// show transform data frame
console.log(newDf.toString());

/** 
 *  Adding, replacing, generating and transforming multiple columns
 */
function computeColumn1(df) {
    return df;
}
// Any of the previous examples of withSeries can work with multiple columns by passing in a column spec, the following example adds two new
// This syntax can be used to add, generate and transform any number of colums at once.
var columnSpec = {
    Column1: df => computeColumn1(df),
    Column2: df => computeColumn2(df),
};
var newDf = dataFrame.withSeries(columnSpec);
// show data frame with two new columns
console.log(newDf);

/**
 * Removing columns
 */
// One or more columns can easily be removed:
var newDf = dataFrame.dropSeries(['sepallength', 'sepalwidth']);
// show data frame without two series
console.log(newDf.between(0, 2).toString());

// Also works for single columns:
var newDf = dataFrame.dropSeries('sepallength');
// show data frame without sepallength serie
console.log(newDf.between(0, 2).toString());

// Alternatively you can select the columns to keep and drop the rest:
var newDf = dataFrame.subset(["petallength", "petalwidth"]);
// show the new subset with just two series
console.log(newDf.between(0, 2).toString());