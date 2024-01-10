// set the correct username and password combination below
let correctUsername = "srimon17";
let correctPassword = "webdev";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE

if(username === correctUsername && password === correctPassword) {
        $(".message").text("Success!");
    } 
    else if(username === correctUsername && password !== correctPassword) {
        $(".message").text("Wrong password.");
    } 
    else if(username !== correctUsername && password === correctPassword) {
        $(".message").text("Wrong username.");
    } 
    else if(username === "" || password === "") {
        $(".message").text("You did not fill in the required fields.");
    }


});