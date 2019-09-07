function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#blah')
				.attr('src', e.target.result);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

function DownloadFile() {
	file = document.getElementById("fileSelector").files[0];

	var blob = new Blob([file], { type: "application/png" });

	var objectURL = window.URL.createObjectURL(blob);

	var link = document.createElement('a');
	link.href = objectURL;
	link.download = "myFileName.png";
	link.click();
	window.URL.revokeObjectURL(objectURL);
	link.remove();
}