const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
var filename="";
var content="";

var createDirWizard = () => {
    rl.question("Enter Name For the Directory: ", (ans) => {
        if (!fs.existsSync(ans)) {
            fs.mkdirSync(ans);
        } else {
            console.log("Directory is already exist.");
        }
        repeat();
    });
};

var removeDirWizard = () => {
    rl.question("Enter Name for remove Directory: ", (ans) => {
        if (fs.existsSync(ans)) {
            fs.rmdirSync(ans);
            console.log("Diretory is removed.");
        } else {
            console.log("Directory is not exist.");
        }
        repeat();
    });
};

var createFile=()=>{
    fs.writeFile(filename,content,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("file save successfully.");
        }
        repeat();
    });
};

var createFileWizard=()=>{
    console.log("Welcome to file creation wizard.");
    rl.question("Name of the file",(ans)=>{
        filename=ans + ".txt";
        rl.question("Content of the file",(ans)=>{
            content=ans;
            createFile();
        });
    });
};

var readFileWizard=()=>{
    rl.question("Enter Name of File:",(ans)=>{
        filename=ans+".txt";
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                console.log("File is Not exist.");
            }
            else{
                console.log("Done :" + filename);
                console.log(data);
            }
            repeat();
        });
    });
};

var appendToFileWizard=()=>{
    rl.question("Enter Name of File: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter Contect of the File: ", (ans) => {
            content = ans;
            fs.appendFile(fileName, content, function(err) {
                if (err) {
                    console.log("File is not exist");
                } else {
                    console.log('File appended successfully!');
                }
                repeat();
            });
        });
    });
};

var renameFileWizard=()=>{
    rl.question("Enter Original File Name: ", (ans) => {
        var replacedFileName = "";
        fileName = ans + ".txt";
        rl.question("Enter Name for Replaced File Name: ", (ans) => {
            replacedFileName = ans + ".txt";
            fs.rename(fileName, replacedFileName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Your File" + fileName + ".txt replaced with " + replacedFileName + ".txt");
                }
                repeat();
            });
        });
    });
};

var deleteFileWizard=()=>{
    rl.question("Enter Name for the File: ", (ans) => {
        fileName = ans + ".txt";
        fs.unlink(fileName, function(err) {
            if (err) {
                console.log("File is not exist.");
            } else {
                console.log('File deleted.');
            }
        });
        repeat();
    });
};

var updateFileWizard = () => {
    rl.question("Enter name for the File: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter Contect for the File: ", (ans) => {
            content = ans;
            fs.writeFile(fileName, content, function(err) {
                if (err) {
                    console.log("File is not exist.");
                } else {
                    console.log('File updated.');
                }
                repeat();
            });
        });
    });
};

var instruction=()=>{
    console.log("Enter 1 to create a new text file.");
    console.log("Enter 2 to read the contents of a file.");
    console.log("Enter 3 to append to an existing file.");
    console.log("Enter 4 to rename of a file.");
    console.log("Enter 5 to Delete a file.");
    console.log("Enter 6 to Create a Directry.");
    console.log("Enter 7 to Delete a Directory.");
    console.log("Enter 8 to Update a file.");
    console.log("Enter 0 Exit.");
};

var start = () => {
    rl.question("Enter Your Choice:", (answer) => {
        if (answer === "1") {
            createFileWizard();
        }
        else if(answer==="2"){
            readFileWizard();
        }
        else if(answer==="3"){
            appendToFileWizard();
        }
        else if(answer==="4"){
            renameFileWizard();
        }
        else if(answer==="5"){
            deleteFileWizard();
        }
        else if(answer==="6"){
            createDirWizard();
        }
        else if(answer==="7"){
            removeDirWizard();
        }
        else if(answer==="8"){
            updateFileWizard();
        }
        else if(answer==="0"){
            rl.close();
        }
        else{
            console.log("Wrong Choice! Please try again.");
            start();
        }
    });
};

var repeat=()=>{
    instruction();
    start();
};
console.log("Welcome to Dhruv File System\n");
repeat();