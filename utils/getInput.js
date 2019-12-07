const fs = require('fs'),
    path = require('path'),
    parseArgs = require('minimist'),
    args = parseArgs(process.argv.slice(2));

module.exports = function getInput(callback) {
    if (args.path) {
        fs.readFile(path.join(process.cwd(), args.path), ((err, data) => {
            callback(data.toString().split(/\n/));
        }));
    } else if (args.input) {
        callback(args.input.split(/\n/));
    }
};
