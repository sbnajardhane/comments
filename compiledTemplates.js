(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['commands'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p>\n    First install Handlebar npm package<pre> '"
    + alias4(((helper = (helper = helpers.handlebarInstall || (depth0 != null ? depth0.handlebarInstall : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"handlebarInstall","hash":{},"data":data}) : helper)))
    + "' </pre>\n</p>\n<p>\n    Write different template in different files with '.handlebars' as a file extension. (like template/flight.handlebars, template/demo.handlebars)\n</p>\n<p>\n    <pre>'"
    + alias4(((helper = (helper = helpers.handlebarCompile || (depth0 != null ? depth0.handlebarCompile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"handlebarCompile","hash":{},"data":data}) : helper)))
    + "' </pre> This command will compile all the templates files in templates folder and write the compiled template output to templatesCompiled.js\n</p>\n<p>\n    <p>Include templatesCompiled.js in HTML script and you can access your compiled template by the name of template. For ex: flight.handlebar template can be accessed like <pre>'"
    + alias4(((helper = (helper = helpers.HandlebarTemplate || (depth0 != null ? depth0.HandlebarTemplate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"HandlebarTemplate","hash":{},"data":data}) : helper)))
    + "'</pre>\n    </p>\n</p>\n<p>\n    First install Handlebar npm package\n<p>\n    Write different template in different files with '.handlebars' as a file extension. (like template/flight.handlebars, template/demo.handlebars)\n</p>\n<p>\n     This command will compile all the templates files in templates folder and write the compiled template output to templatesCompiled.js\n</p>\n<p>\n    <p>Include templatesCompiled.js in HTML script and you can access your compiled template by the name of template. For ex: flight.handlebar template can be accessed like.\n    </p>\n</p>\n";
},"useData":true});
templates['flight'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"flights\">\n    <div class=\"row name-status\">\n        <div class=\"pull-left name\">\n            "
    + alias4(((helper = (helper = helpers.airlineName || (depth0 != null ? depth0.airlineName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"airlineName","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.flightNumber || (depth0 != null ? depth0.flightNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flightNumber","hash":{},"data":data}) : helper)))
    + "\n        </div>\n        <div class=\"pull-right status\">\n            "
    + alias4((helpers.getStatus || (depth0 && depth0.getStatus) || alias2).call(alias1,(depth0 != null ? depth0.status_text : depth0),{"name":"getStatus","hash":{},"data":data}))
    + "\n        </div>\n    </div>\n    \n    <div class=\"row cities\">\n        <div class=\"pull-left source-city city\">\n            "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n        </div>\n        <div class=\"pull-right destination-city city\">\n            "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n        </div>\n    </div>\n    <table class=\"row position\">\n        <td class=\"pull-left source-abbr abbr\">\n            "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.airport : stack1), depth0))
    + "\n        </td>\n        <td class=\"position\">\n            <div class=\"plane\" style=\"left:"
    + alias4(((helper = (helper = helpers.planePosition || (depth0 != null ? depth0.planePosition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"planePosition","hash":{},"data":data}) : helper)))
    + "%;margin-left:"
    + alias4(((helper = (helper = helpers.marginLeft || (depth0 != null ? depth0.marginLeft : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marginLeft","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n            <div class=\"path-pending path\" style=\"left:"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.normalized : depth0)) != null ? stack1.progress_percent : stack1), depth0))
    + "%\">\n            </div>\n            <div class=\"path-completed path\">\n            </div>\n        </td>\n        <td class=\"pull-right destination-abbr abbr\">\n            "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.airport : stack1), depth0))
    + "\n        </td>\n    </table>\n    <div class=\"row times\">\n        <div class=\"pull-left source-time time\">\n            <span class=\"time\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.departureTime : stack1), depth0))
    + "<span class=\"comma\">,</span></span>\n            <span class=\"date\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.month : stack1), depth0))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.day : stack1), depth0))
    + "</span>\n        </div>\n        <div class=\"pull-right destination-time time\">\n            <span class=\"date\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.month : stack1), depth0))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.day : stack1), depth0))
    + "<span class=\"comma\">,</span></span>\n            <span class=\"time\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.arrivalTime : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"row gates\">\n        <div class=\"pull-left source-gate gate\">\n            "
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.terminal : stack1), depth0)) != null ? stack1 : "")
    + ", "
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.departing : depth0)) != null ? stack1.gate : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"pull-right destination-gate gate\">\n            "
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.terminal : stack1), depth0)) != null ? stack1 : "")
    + ", "
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.arriving : depth0)) != null ? stack1.gate : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.flights : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();