console.log("Hello");
$("#home").click(function (event) {
    event.preventDefault();
    console.log($("#main"));
    $("#main").load("home.html");
});

$("#projects").click(function (event) {
    event.preventDefault();
    console.log($("#main"));
    $("#main").load("projects.html");
});

$("#contact").click(function (event) {
    event.preventDefault();
    console.log($("#main"));
    $("#main").load("contact.html");
});

console.log(window.location.href);