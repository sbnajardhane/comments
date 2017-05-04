function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
var a;
var evn = "shubham";

var anchorNode;
$(function() {
    var comments = (function() {
        var selectionObject; // = getSelectedText();
        var text; // = selectionObject.toString();
        var range;
        var count = 0;
        bootstrap_alert = function() {}

        var __createNode = function(selectionObject) {

            //create span for the selected text and changes the color
            var highlightNode = document.createElement("span");
            highlightNode.setAttribute("class", "green");
            highlightNode.setAttribute("id", count);
            // append it to HTML
            console.log(selectionObject);
            //range = selectionObject.getRangeAt(0);
            range.surroundContents(highlightNode);

            //append created comment element after highlighted span
            // $(#count).after(commentNode);
        };

        var selectText = function() {
            console.log(selectionObject);
            selectionObject = getSelectedText();
            anchorNode = selectionObject;
            text = selectionObject.toString();
            range = selectionObject.getRangeAt(0);
            console.log(selectionObject);
            if (text != '') {
                var dialog = $("#dialog");
                setTimeout(function() {
                    // var dialog = $("#dialog").show();
                    // dialog[0].setAttribute("title", text);
                    // $("#dialog").dialog('title', text);
                    dialog.modal('show');
                }, 0);
                __createNode();
            }
        };

        //enable diseable button
        //todo : pass button id 
        var disabledButton = function() {
            if ($(this).val().length != 0) {
                $('#addComment').attr('disabled', false);
            } else {
                $('#addComment').attr('disabled', true);
            }
        };

        var addComment = function() {
            console.log('click event');
            var commentNode = document.createElement("p");
            commentNode.innerText = $("#dialogComment").val();
            commentNode.setAttribute("id", "comment_" + count);
            var comments = document.getElementById("comments");
            comments.appendChild(commentNode);
            $("#dialog").modal('toggle');
            console.log(selectionObject);
            count++;
        };

        var viewComment = function() {
            target = event.target;
            if (target.nodeName === "SPAN") {
                var id = target.attributes.id.value;
                // target.after(commentNode);
                console.log(id);
                console.log($("#comment_" + id).text());
                var comment = $("#comment_" + id).text();
                bootstrap_alert.warning(comment);
                // __showPopup(comment);
            }
        };

        // var __showPopup = function(comment) {
        bootstrap_alert.warning = function(message) {
                console.log("called");
                $('<div id="floating_alert" class="alert alert-success fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + message + '&nbsp;&nbsp;</div>').appendTo('body');
            }
            // }
        var bindFunctions = function() {
            // $('#description p').mouseup({ selectionObject: selectionObject }, selectText);
            $('#description p').mouseup(selectText);
            $('#dialogComment').on('keyup', disabledButton);
            $('#addComment').on('click', addComment);
            $("#description").on('click', viewComment);
        };

        var init = function() {
            bindFunctions();
        };

        return {
            init: init,
        };
    })();
    comments.init();
});
