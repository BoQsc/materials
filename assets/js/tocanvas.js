function tocanvas() {
	html2canvas(document.querySelector(".flyer")).then(canvas => {
		document.querySelector(".flyer").remove();
		canvas.title = "Test";
	    //document.body.appendChild(canvas)
		//console.log("canvas added");
	    var img = canvas.toDataURL("image/png");
		console.log("img created");
	
		var link = document.createElement("A");
		//var linkText = document.createTextNode("my title text");
		link.href = img;
		link.target = "other";
		link.appendChild(canvas);
		//link.appendChild(linkText);
		document.body.appendChild(link);
	});
}

tocanvas();
