(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['story'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h5 class=\"description\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h5>\n";
},"useData":true});
})();