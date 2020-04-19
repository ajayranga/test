const autoComplete = () => {
	let autoComplete = new google.maps.places.Autocomplete(document.getElementById('inputLoc'));
	google.maps.event.addListener(autoComplete, 'place-changed', () => {
		let nearPlace = autoComplete.getPlacePredictions();
	});
}
autoComplete();