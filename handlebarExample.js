//var source = $("#some-template").html();

Handlebars.registerHelper('getStatus', function(data) {
    // console.log(data);
    return data;
    // return users.person.firstName + " " + users.person.lastName;
});



// setTimeout(function() {
var commandHtml = Handlebars.templates.commands(commands);
document.getElementById('commands').innerHTML = commandHtml;
// console.log('ready to show commands panel');
// }, 0);


var descHtml = Handlebars.templates.description(commands);
document.getElementById('description').innerHTML = descHtml;
