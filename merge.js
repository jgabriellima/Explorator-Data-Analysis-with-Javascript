/**
 * Exploratory Data Analysis with Javascript
 * Author: João Gabriel Lima
 * =========================================================
 * Example: Merge Data frames: Concatenation and Join
 * =========================================================
 */
// import dependencies
var dataForge = require('data-forge');

// invoke readfile and parse CSV to Dataframe
var dataFrame = dataForge.readFileSync('data/iris.csv').parseCSV();

// Concatenation
// This examples show how Series and dataframes can be concatenated:
// creating two dataframes. In real application you will have two or more datasets
var df1 = dataFrame;
var df2 = dataFrame;
// you can invoke concat function passing the data frame with parameter
var concatenated = df1.concat(df2);
// Or an array may be used:
var toConcat = [df2];
// this way is most used if you have a lot datasets to concat 
var concatenated = df1.concat(toConcat);
// You can also concatenate by passing an array of series or dataframes to the global data-forge functions concatSeries or concatDataFrames:
var toConcat = [df1, df2];
var concatenated = dataForge.concatDataFrames(toConcat);

/**
 * Join data frames
 * This example show how you can join information from twt different data frames
 */
/** Create the first data frame */
var df_a = new dataForge.DataFrame({
    columnNames: [
        'id',
        'name',
        'email'
    ],
    values: [
        [1, 'Alana', 'alana@contact.me'],
        [2, 'Aline', 'aline@contact.me']
    ],
});

/** Create the second data frame */
var df_b = new dataForge.DataFrame({
    columnNames: [
        'id',
        'name',
        'email'
    ],
    values: [
        [3, 'Celia', 'celia@contact.me'],
        [4, 'Alaide', 'alaide@contact.me']
    ],
});

/** 
 * concat two data frames 
 * Now we have a data frame with 4 registers
 */
var df_new = df_a.concat(df_b);
// show the new data frame
console.log(df_new.toString());

/** 
 * Create data frame with ages informations
 * 
 * */
var df_ages = new dataForge.DataFrame({
    columnNames: [
        "id",
        "age",
    ],
    values: [
        [1, 25],
        [2, 28],
        [3, 50],
        [4, 62]
    ],
});

/**
 * Join function get 4 parameters:
 * 1 - Data frame for join
 * 2 - How attribute we use to join in left side (ages)
 * 3 - How attribute we use to join in right side (another informations)
 * 4 - Function with two sides to get the informations and create new data frame
 */
var df_merged = df_new.join(
    df_ages,
    left => left.id,
    right => right.id,
    (left, right) => {
        return {
            subject_id: left.id,
            name: left.name,
            email: left.email,
            age: right.age
        };
    }
);
// show joined data frame
console.log(df_merged.toString());