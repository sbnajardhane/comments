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
var count = 0;
var anchorNode;
$(function() {
    $('#description p').mouseup(function(e) {
        var selectionObject = getSelectedText();
        var text = selectionObject.toString();
        console.log(text);
        if (text != '') {

            //open modal
            //

            var dialog = $("#dialog");

            dialog[0].setAttribute("title", text);
            dialog.dialog();
            dialog[0].setAttribute("title", "");

            //

            //create comment element p
            //
            $('#dialogComment').on('click', function() {
                var commentNode = document.createElement("p");
                commentNode.innerText = $("#dialogComment").val(); //"this is comment regarding to the id " + count; //get the content here from input box
                commentNode.setAttribute("class", "hidden");
                commentNode.setAttribute("id", count + "desc");
            });
            //click on add comment button
            //



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
    });

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
    })

});
