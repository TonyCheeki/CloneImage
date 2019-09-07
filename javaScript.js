function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#blah').attr('src', e.target.result);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

function DownloadFile() {
	var file = document.getElementById("fileSelector").files[0];
	var uploadedFileBlob = new Blob([file], { type: "image/jpeg" });
	var objectURL;
	var link = document.createElement('a');
	var zip = new JSZip();
	var filesNamesArr = document.getElementById("filesNames").value.split(",");// als je een textarea gebruikt moet je innerText gebruiken inplaats van value
	filesNamesArr.forEach(function (element) {
		zip.file(element + ".jpg", uploadedFileBlob);
	});
	zip.generateAsync({type: "blob"}).then(function (blob) {
		objectURL = window.URL.createObjectURL(blob);
		link.href = objectURL;
		link.download = "clonedImages.zip";
		link.click();
		window.URL.revokeObjectURL(objectURL);
		link.remove();
	});
}

//TODO: regex toevoegen voor kommas