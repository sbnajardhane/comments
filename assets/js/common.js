function preventPhotoRightClick(elementId) {
	var element = $(elementId);
	element.on("contextmenu", function() event ) {
		event.preventDefault();
	});
}