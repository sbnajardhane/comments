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
            var selectionObject = getSelectedText();
            var text = selectionObject.toString();
            var count = 0;
            $('#description p').mouseup(function(e) {});
            var selectText = function() {
                console.log(text);
                if (text != '') {

                    //open modal
                    //

                    var dialog = $("#dialog");
                    // dialog[0].setAttribute("title", text);
                    // $("#dialog").dialog('title', text);
                    dialog.dialog();
                }
            }

            //

            //create comment element p
            //

            //click on add comment button
            //


            var createNode = function() {
                //create span for the selected text and changes the color
                evn = e;
                a = selectionObject;
                var highlightNode = document.createElement("span");
                highlightNode.setAttribute("class", "green");
                highlightNode.setAttribute("id", count);

                // append it to HTML
                var range = selectionObject.getRangeAt(0);
                range.surroundContents(highlightNode);

                //append created comment element after highlighted span
                // $(#count).after(commentNode);


                count++;
            }
        }


        $("#description").click(function(event) {
            target = event.target;

            // console.log(event.target.nodeName);
            if (target.nodeName === "SPAN") {
                var id = target.attributes.id.value;
                console.log(target.attributes.id);
                // id = parseInt(id);
                // id = id + id;

                //create comment box

                console.log(target);
                target.after(commentNode);

            }

        });

        $('#dialogComment').keyup(function() {
            if ($(this).val().length != 0) {
                $('#addComment').attr('disabled', false);
            } else {
                $('#addComment').attr('disabled', true);
            }
        }) $('#addComment').on('click', function() {
            console.log('click event');
            var commentNode = document.createElement("p");
            commentNode.innerText = $("#dialogComment").val(); //"this is comment regarding to the id " + count; //get the content here from input box
            commentNode.setAttribute("id", "comment_" + count);
            var comments = document.getElementById("comments");
            comments.appendChild(commentNode);
            $("#dialog").dialog('close');
            // displayComment(id);
            // createNode();
        });
    });
});
