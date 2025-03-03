function knock_and_short(){
    console.log("knock Knock");
    console.log("Who's in the factory");
}

//function call
knock_and_short();

//Example 2
function greet_user(username){
    console.log(`Welcome home ${username}`)
}

greet_user("Peter");
greet_user("Samuel");
greet_user("Jerome");
greet_user("Emmanuel");
greet_user("Wisdom");


function multiply_self(number){
   console.log(`${number} * ${number} = ${number*number}`)
}
multiply_self(7)

function format_name(f_name){
    let new_name = f_name.toUpperCase();
    let names = ["Zelenskyy", "Trump", "Vance", "Jerome"];
    names.push(new_name);
    console.log(`Names of `)
}