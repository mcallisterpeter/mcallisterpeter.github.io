function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectregion');
	s.style.display = "block";
	s.textContent = sel.value;
}