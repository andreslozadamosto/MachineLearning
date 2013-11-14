try {
    var reporter = require('nodeunit').reporters.default;
}
catch(e) {
    console.log("Cannot find nodeunit module.");
    process.exit();
}

process.chdir(__dirname);
reporter.run([
                './tests/ValidationUtilsTest.js',
                './tests/zerorTest.js',
                './tests/ConfusionMatrixTest.js',
                './tests/utils/math/DistancesTest.js'
            ]);