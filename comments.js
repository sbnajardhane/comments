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
        var count = 0;
        //bind event on mouse up
        //function to select the text from the html desc
        //select and open dialog box

        var __createNode = function() {
            //create span for the selected text and changes the color
            var highlightNode = document.createElement("span");
            highlightNode.setAttribute("class", "green");
            highlightNode.setAttribute("id", count);
            // append it to HTML
            console.log(selectionObject);
            var range = selectionObject.getRangeAt(0);
            range.surroundContents(highlightNode);

            //append created comment element after highlighted span
            // $(#count).after(commentNode);


            count++;
        };

        var selectText = function() {
            selectionObject = getSelectedText();
            text = selectionObject.toString();
            range = selectionObject.getRangeAt(0);
            console.log(text);
            if (text != '') {
                var dialog = $("#dialog");
                console.log(text);
                // dialog[0].setAttribute("title", text);
                // $("#dialog").dialog('title', text);
                dialog.dialog();
            }
        };

        //create span element


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
            commentNode.innerText = $("#dialogComment").val(); //"this is comment regarding to the id " + count; //get the content here from input box
            commentNode.setAttribute("id", "comment_" + count);
            var comments = document.getElementById("comments");
            comments.appendChild(commentNode);
            $("#dialog").dialog('close');
            __createNode();
        };

        var viewComment = function() {
            target = event.target;
            if (target.nodeName === "SPAN") {
                var id = target.attributes.id.value;
                target.after(commentNode);
            }
        };

        var bindFunctions = function() {
            $('#description p').mouseup(selectText);
            $('#dialogComment').on('keyup', disabledButton);
            $('#addComment').on('click', addComment);
            $("#description").click(function(event) {});
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
