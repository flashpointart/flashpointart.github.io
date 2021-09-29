var fs = require('fs');
var fs_Extra = require('fs-extra');
var path = require('path');

var sourceDir = path.join(__dirname, "./build");
var destinationDir = path.join(__dirname, "../flashpointart.github.io")

if (!fs.existsSync(destinationDir)){
    fs.mkdirSync(destinationDir, { recursive: true });
}

fs_Extra.copy(sourceDir, destinationDir, function(error) {
    if (error) {
        throw error;
    } else {
      console.log("success!");
    }
});

var Git = require('nodegit');