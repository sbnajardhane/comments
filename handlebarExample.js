$.getJSON("description.json", function(data) {
    var description = data;
    console.log(data);
    var descHtml = Handlebars.templates.description(description);
    document.getElementById('description').innerHTML = descHtml;
});

$.getJSON("comments.json", function(data) {
    var comments = data;
    console.log("comments json");
    console.log(data);
    var commentsHtml = Handlebars.templates.comments(comments);
    document.getElementById('comments').innerHTML = commentsHtml;
});
