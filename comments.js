function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}

var anchorNode;
$(document).ready(function() {
    var comments = (function() {
        var selectionObject; // = getSelectedText();

        var text; // = selectionObject.toString();
        var range;
        var count = $("#comments p").length;
        bootstrap_alert = function() {}

        var __createNode = function(selectionObject) {
            //create span for the selected text and changes the color
            var highlightNode = document.createElement("span");
            highlightNode.setAttribute("class", "green");
            highlightNode.setAttribute("id", count);
            range.surroundContents(highlightNode);
        };

        var __saveChanges = function(event) {

            var index = $(event.target).index();
            index = parseInt(index);
            var text = $("#description p")[index].innerHTML;
            text = text.trim();

            url = 'cgi-bin/update_json.py';
            data = {
                'index': index,
                'text': text
            };

            __sendData(data, url);
        };

        var __saveComments = function(comment) {
            console.log(count);
            url = 'cgi-bin/update_comment.py';
            data = {
                'index': count,
                'text': comment
            }
            __sendData(data, url);
        };

        var __sendData = function(data, url) {
            $.ajax({
                type: 'post',
                url: url,
                data: data,
                success: function(data) {
                    console.log(data);
                }
            });
        };

        var selectText = function(event) {
            selectionObject = getSelectedText();
            anchorNode = selectionObject;
            text = selectionObject.toString();
            range = selectionObject.getRangeAt(0);
            if (text != '') {
                var dialog = $("#dialog");
                if (!getCommentId(event)) {
                    setTimeout(function() {
                        dialog.modal('show');
                    }, 0);

                    __createNode();
                    __saveChanges(event);
                } else {
                    viewComment(event);
                }
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
            var commentNode = document.createElement("div");
            // commentNode.innerHTML = CKEDITOR.instances.dialogComment.getData();
            commentNode.innerHTML = $("#dialogComment").val();
            commentNode.setAttribute("id", "comment_" + count);
            var comments = $("#comments");
            comments.append(commentNode);
            console.log(commentNode.outerHTML);
            $("#dialog").modal('toggle');
            __sendData(data, url);
            __saveComments(commentNode.outerHTML);
            count++;
        };

        var revertSelection = function() {
            var node = $("#" + count)[0];
            var comment = $("#comment_" + count);
            // if (!comment.text() == "") {
            node.outerHTML = node.innerHTML;
            console.log('modal closed event');
            // }
        }

        var viewComment = function(event) {
            var id = getCommentId(event);
            if (id) {
                var comment = $("#comment_" + id).text();
                bootstrap_alert.warning(comment);
                var whichOffset = getAlertBoxPosition(event);
                var floating_alert = $("#floating_alert");
                floating_alert.css({
                    position: "absolute",
                    top: event.pageY + 10,
                    "width": "50%",
                    "max-width": "500px"
                });
                if (whichOffset === "left") {
                    var left = event.pageX;
                    if ((left - (floating_alert.width() / 2)) > 0) {
                        left = left - floating_alert.width() / 2;
                    } else {
                        left = 0;
                    }
                    floating_alert.css({
                        left: left,
                        right: ""
                    });
                } else {
                    var right = $(window).width() - event.pageX;
                    if (right - floating_alert.width() / 2 > 0) {
                        right = right - floating_alert.width() / 2;
                    } else {
                        right = 0;
                    }
                    floating_alert.css({
                        right: right,
                        left: ""
                    });
                }
            }
        };

        var getCommentId = function(event) {
            target = event.target;
            var id;
            if (target.nodeName === "SPAN") {
                var id = target.attributes.id.value;
            }

            return id;
        };

        var getAlertBoxPosition = function(event) {
            var windowWidth = $(window).width();
            var whichOffset = "";
            if (event.pageX < (windowWidth / 2)) {
                whichOffset = "left";
            } else {
                whichOffset = "right";
            }
            return whichOffset;
        };

        var closeAlert = function() {
            $("#floating_alert").hide();
        };

        bootstrap_alert.warning = function(message) {
            var alertBox = $("#floating_alert");
            alertBox.find("p")[0].innerText = message;
            alertBox.show();
        };

        var bindFunctions = function() {
            $('#description').on('mouseup', selectText);
            $('#dialogComment').on('keyup', disabledButton);
            $('#addComment').on('click', addComment);
            $("#description").on('click', viewComment);
            $('#close_floating_alert').on('click', closeAlert);
            $('#modalCross').on('click', revertSelection);
            $('#modalClose').on('click', revertSelection);
        };

        var init = function() {
            $("#floating_alert").hide();
            bindFunctions();
        };

        return {
            init: init,
        };
    })();
    comments.init();
});
