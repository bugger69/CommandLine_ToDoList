let command;
let array = [];
while(command != "quit") {
    command = prompt("Enter a command: ");
    if(command === "new") {
        let varb;
        while(varb !== "stop"){
            varb = prompt("Enter a list item or press stop to stop input: ");
            if(varb !== "stop") {
                array.push(varb);
                console.log(`${varb} was added to the to do list.`);
            }
        }
        console.log("************************");
    } else if (command === "list") {
        for(let i = 0; i != array.length; i++) {
            console.log(`${i}: ${array[i]}`);
        }
        console.log("************************");
    } else if (command === "delete") {
        let index = parseInt(prompt("Enter the index you want to delete: "));
        if(!Number.isNaN(index)) {
            array.splice(index, 1);
            console.log("To-Do removed");
            console.log("************************");
        } else {
            console.log("Unknown index.");
        }
    } else if (command === "quit") {
        continue;
    } else {
        continue;
    }
}
console.log("You've successfully exited the app.");