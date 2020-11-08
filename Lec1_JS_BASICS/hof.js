// high order function : functions which takes functions as parameters
// call back function : functions which are passed as paramters in another function

function getFirstName(fullName) {
    fullName = fullName.split(" ");
    return fullName[0];
}

function getLastName(fullName) {
    fullName = fullName.split(" ");
    return fullName[fullName.length - 1 ];
}

function fun(cb, fullName) {
    console.log(cb(fullName));
}

fun(getFirstName,"Steve Rogers");
fun(getLastName, "Tony Stark");

// this is an example of callback
