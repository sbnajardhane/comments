//var source = $("#some-template").html();

Handlebars.registerHelper('getStatus', function(data) {
    // console.log(data);
    return data;
    // return users.person.firstName + " " + users.person.lastName;
});

// setTimeout(function() {
var templateScript = Handlebars.templates.flight(data);
document.getElementById('ia-container').innerHTML = templateScript;
// console.log("fligth container executation completed");
// }, 0);


// setTimeout(function() {
var commandHtml = Handlebars.templates.commands(commands);
document.getElementById('commands').innerHTML = commandHtml;
// console.log('ready to show commands panel');
// }, 0);
