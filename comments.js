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

        var __saveChanges = function(event) {
            //get the innerText
            //send it to the server and save it
            console.log($(event.target).index());
            var index = $(event.target).index();
            var text = "shubham";
            // var text = $("#description p")[index].innerText;
            __sendData(index, text);
        }

        var __sendData = function(index, text) {
            $.ajax({
                type: 'post',
                url: 'cgi-bin/senddata',
                // data: JSON.stringify({
                //     index: index,
                //     text: text
                // }),
                data: {
                    'index': index,
                    'text': text
                },

                // async: 'true',
                // cache: 'false',
                success: function(data) {
                    console.log(data)
                }
            });
        }

        var selectText = function(event) {
            // console.log(selectionObject);
            selectionObject = getSelectedText();
            anchorNode = selectionObject;
            text = selectionObject.toString();
            range = selectionObject.getRangeAt(0);
            // console.log(selectionObject);
            if (text != '') {
                var dialog = $("#dialog");
                if (!getCommentId(event)) {
                    setTimeout(function() {
                        // var dialog = $("#dialog").show();
                        // dialog[0].setAttribute("title", text);
                        // $("#dialog").dialog('title', text);
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
            // console.log('click event');
            var commentNode = document.createElement("p");
            commentNode.innerText = $("#dialogComment").val();
            commentNode.setAttribute("id", "comment_" + count);
            // var comments = document.getElementById("comments");
            var comments = $("#comments");
            comments.append(commentNode);
            $("#dialog").modal('toggle');
            // console.log(selectionObject);
            count++;
        };

        var viewComment = function(event) {
            // console.log(event);
            var id = getCommentId(event);
            if (id) {
                // console.log(id);
                // console.log($("#comment_" + id).text());
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
                    // console.log("left offset value is assigned");
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
                    // console.log("right offset value is assigned");
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
                // __showPopup(comment);
            }
        };

        var getCommentId = function(event) {
            target = event.target;
            var id;
            if (target.nodeName === "SPAN") {
                var id = target.attributes.id.value;
            }
            // console.log("get comment id");
            // console.log(id)
            return id;
        }

        var getAlertBoxPosition = function(event) {
            var windowWidth = $(window).width();
            var whichOffset = "";
            if (event.pageX < (windowWidth / 2)) {
                whichOffset = "left";
            } else {
                whichOffset = "right";
            }
            return whichOffset;
        }
        var closeAlert = function() {
            // console.log("ca;;ed");
            $("#floating_alert").hide();
        }

        bootstrap_alert.warning = function(message) {
            // console.log("called");
            var alertBox = $("#floating_alert");
            alertBox.find("p")[0].innerText = message;
            alertBox.show();
            // $('#floating_alert').css({ 'top': mouseY, 'left': mouseX }).fadeIn('slow');
        }

        // }
        var bindFunctions = function() {
            // $('#description p').mouseup({ selectionObject: selectionObject }, selectText);
            $('#description p').mouseup(selectText);
            $('#dialogComment').on('keyup', disabledButton);
            $('#addComment').on('click', addComment);
            $("#description").on('click', viewComment);
            $('#close_floating_alert').on('click', closeAlert);
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
