var Modal = (function () {
    function Modal() {
        this.modalOverlay = document.querySelector('.modal-overlay');
        this.label = document.querySelector('.form__label-body');
    }
    Modal.prototype.open = function (type) {
        if (type === 'note' || type === 'task') {
            var newText = 'Body';
            this.label.innerText = newText;
        }
        else if (type === 'image' || type === 'video') {
            var newText = 'URL';
            this.label.innerText = newText;
        }
        this.modalOverlay.classList.remove('hidden');
    };
    Modal.prototype.close = function () {
        this.modalOverlay.classList.add('hidden');
    };
    Modal.prototype.submit = function () {
        var modalTitle = document.querySelector('.form__title');
        var modalBody = document.querySelector('.form__body');
        var title = modalTitle.value;
        var body = modalBody.value;
        modalTitle.value = '';
        modalBody.value = '';
        return { title: title, body: body };
    };
    return Modal;
}());
export default Modal;
