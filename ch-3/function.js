//Passing functions around

//Method-1::

function say(word){
    console.log(word);
}

function execute(someFunction, value){
    someFunction(value);
}

execute(say, "Hello!!");

//Method-2::

function execute1(someFunction, value){
    someFunction(value);
}

execute1(function(word){ console.log(word) }, "Hello!!");