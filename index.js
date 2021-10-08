/*
Write a Node.js program to do the following:
1.  Create Directory ( Hint: fs.mkdir )
2.  Remove Directory ( Hint: fs.rmdir )
3.  Write File 
4.  Read File 
5.  Delete File
6.  Append data to file
7.  Update / Replace file with new data
8.  Rename File
*/

/** Including the built-in process object and readline module */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/** To include the File System module, use the require() method */
const fs = require("fs");
var fileName = "";
var content = "";

/** Create File */
var createFile = () => {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File saved successfully!");
        }
        repeat();
    });
};

/** Create directory function */
var createDirWizard = () => {
    rl.question("Enter name of the directory: ", (ans) => {
        if (!fs.existsSync(ans)) {
            fs.mkdirSync(ans);
        } else {
            console.log("Soory! This directory is already exist");
        }
        repeat();
    });
};

/** Remove directory function */
var removeDirWizard = () => {
    rl.question("Enter name of the directory: ", (ans) => {
        if (fs.existsSync(ans)) {
            fs.rmdirSync(ans);
            console.log("Diretory is removed successfully");
        } else {
            console.log("Soory! This directory is not exist");
        }
        repeat();
    });
};

/** Create and write file function */
var writeFileWizard = () => {
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter contect of the file: ", (ans) => {
            content = ans;
            createFile();
        });
    });
};

/** Read file function */
var readFileWizard = () => {
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        fs.readFile(fileName, 'utf8', function(err, data) {
            if (err) {
                console.log("File is not exist");
            } else {
                console.log("OK :" + fileName);
                console.log(data);
            }
            repeat();
        });
    });
};

/** Delete file function */
var deleteFileWizard = () => {
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        fs.unlink(fileName, function(err) {
            if (err) {
                console.log("Sorry! File is not exist");
            } else {
                console.log('File deleted successfully!');
            }
        });
        repeat();
    });
};

/** Appned file function */
var appendToWizard = () => {
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter contect of the file: ", (ans) => {
            content = ans;
            fs.appendFile(fileName, content, function(err) {
                if (err) {
                    console.log("Sorry! File is not exist");
                } else {
                    console.log('File appended successfully!');
                }
                repeat();
            });
        });
    });
};

/** Update file function */
var updateFileWizard = () => {
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter contect of the file: ", (ans) => {
            content = ans;
            fs.writeFile(fileName, content, function(err) {
                if (err) {
                    console.log("Sorry! File is not exist");
                } else {
                    console.log('File updated successfully!');
                }
                repeat();
            });
        });
    });
};

/** Rename file function */
var renameFileWizard = () => {
    rl.question("Enter original file name: ", (ans) => {
        var replacedFileName = "";
        fileName = ans + ".txt";
        rl.question("Enter replaced file name: ", (ans) => {
            replacedFileName = ans + ".txt";
            fs.rename(fileName, replacedFileName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Yuuppyyy! " + fileName + ".txt replaced with " + replacedFileName + ".txt");
                }
                repeat();
            });
        });
    });
};

/** Create function for display chocing message to user */
var instruction = () => {
    console.log("1.  Create Directory ( Hint: fs.mkdir )");
    console.log("2.  Remove Directory ( Hint: fs.rmdir )");
    console.log("3.  Create and write File ");
    console.log("4.  Read File ");
    console.log("5.  Delete File");
    console.log("6.  Append data to file");
    console.log("7.  Update / Replace file with new data");
    console.log("8.  Rename File");
    console.log("9.  Exit");
};

/** Create function for appropriate choosing */
var start = () => {
    rl.question("Enter your choice : ", (answer) => {
        if (answer == "1") {
            createDirWizard();
        } else if (answer == "2") {
            removeDirWizard();
        } else if (answer == "3") {
            writeFileWizard();
        } else if (answer == "4") {
            readFileWizard();
        } else if (answer == "5") {
            deleteFileWizard();
        } else if (answer == "6") {
            appendToWizard();
        } else if (answer == "7") {
            updateFileWizard();
        } else if (answer == "8") {
            renameFileWizard();
        } else if (answer == "9") {
            rl.close();
        } else {
            console.log("Sorry! Wrong input. Please select valid choice");
            repeat();
        }
    });
};

/** Create function for reapeat instructions and choising for users */
var repeat = () => {
    instruction();
    start();
};

console.log("Welocome to file handling system in Node.js");
repeat();