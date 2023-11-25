function showModal(c) {
	let ModalElList = [].slice.call(document.querySelectorAll('.modal-info'));
    let ModalList = ModalElList.map(function(ModalEl) {
        return new bootstrap.Modal(ModalEl);
    });
    ModalList[c].show();
}