/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Working with Columns: extracting columns and series from a data-frame
 * =========================================================
 */
var dataForge = require('data-forge');

// invoke readfile and parse CSV to Dataframe
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

/**
 * Extracting columns and series from a data-frame
 */

//Get the names of the columns:
var arrayOfColumnNames = dataFrame.getColumnNames();

// show the column names
console.log(arrayOfColumnNames);

//Get a Series of all columns:
var columns = dataFrame.getColumns();

// convert columns to array
var arrayOfColumns = columns.toArray();

// show array
console.log(arrayOfColumns);

/**
 * Extract values from a series
 */

// get serie by column name
var series_sepallength = dataFrame.getSeries('sepallength');

//Extract the values from the series as an array:
console.log(series_sepallength.toArray());

//Extract index + value pairs from the series as an array:
console.log(series_sepallength.toPairs());

//Invoke a callback for each value in the series using forEach:
series_sepallength.forEach(function(value) {
    // Callback function invoked for each value.
    console.log(value);
});

//Create a new data-frame from a subset of columns:
var columnSubset = dataFrame.subset(["sepalwidth", "petalwidth"]);

// show subset with just two columns "sepalwidth" and "petalwidth"
console.log(columnSubset.toArray())

/**
 * Adding a column
 */
// New columns can be added to a dataframe. This doesn't change the original dataframe, it generates a new one with the additional column.
var newDf = dataFrame.withSeries("NEWCOLUMN", function() {
    return new dataForge.Series({
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    })
});
//show dataframe with new column called NEWCOLUMN
console.log(newDf.toArray());

/**
 * Replacing a column
 */
// withSeries can also replace an existing column:
var newDf = dataFrame.withSeries("sepalwidth", series_sepallength);
// show new dataframe with the column "sepalwidth" replaced
console.log(newDf.toString());

/**
 *  Generating a column
 */
// withSeries can be used to generate a new column from an existing data frame by passing in a function:
var newDf = dataFrame.withSeries("SomeNewColumn",
    df => dataFrame.getSeries("sepalwidth")
    .select(value => transformValue(value))
);

// There is a also a convenient generateSeries function:
var newDf = dataFrame.generateSeries({
    // creating new serie
    "SomeNewColumn": function(row) {
        // we can use a existing value to create the new serie
        return row["sepalwidth"];
    },
});
// show new dataframe
console.log(newDf.toArray());

/**
 * Transforming a column
 */

// auxiliar function to generate new values
function transformValue(row) {
    return row * 1000;
}

// withSeries can be used to transform an existing column by passing in a function:
var newDf = dataFrame.withSeries("sepalwidth",
    // get sepalwidth series inside dataFrame, apply the transformValue function for each value and replace original "sepalwidth" with the new values
    dataFrame => dataFrame.getSeries("sepalwidth").select(row => transformValue(row))
);
//show new dataframe
console.log(newDf.toString());

// There is also a convenient transformSeries function:
var newDf = dataFrame.transformSeries({
    // another way to transform series and so much easy to use, just using a arrow function to invoke transformValue function
    "sepalwidth": row => transformValue(row)
});

//show new dataframe
console.log(newDf.toString());