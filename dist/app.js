var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import PageComponent from "./component/pageComponent";
import ImageComponent from "./component/imageComponent";
import VideoComponent from "./component/videoComponent";
import NoteComponent from "./component/noteComponent";
import TaskComponent from "./component/taskComponent";
import Modal from "./component/modalComponent";
var pageComponent = new PageComponent();
var imageComponent = new ImageComponent(pageComponent);
var videoComponent = new VideoComponent(pageComponent);
var noteComponent = new NoteComponent(pageComponent);
var taskComponent = new TaskComponent(pageComponent);
var modalComponent = new Modal;
var headerButtons = document.querySelectorAll('.header__button');
var modalForm = document.querySelector('.modal__form');
var modalClose = document.querySelector('.modal__close');
var newMemo = { title: '', body: '' };
modalClose.addEventListener('click', closeModal);
modalForm.addEventListener('submit', onSubmit);
if (headerButtons) {
    headerButtons.forEach(function (button) {
        var name = button.name;
        switch (name) {
            case 'note':
            case 'video':
            case 'task':
            case 'image':
                button.addEventListener('click', function () {
                    newMemo.type = name;
                    openModal(name);
                });
                break;
            default:
                console.log("invalid article type: ".concat(name));
        }
    });
}
function onSubmit(e) {
    e.preventDefault();
    var _a = modalComponent.submit(), title = _a.title, body = _a.body;
    if (!title && !body)
        return;
    addMemo(__assign(__assign({}, newMemo), { title: title, body: body }));
    var deleteBtns = document.querySelectorAll('.article__delete');
    if (deleteBtns) {
        deleteBtns.forEach(function (btn) { return btn.addEventListener('click', deleteArticle); });
    }
    closeModal();
}
function openModal(type) {
    modalComponent.open(type);
}
function closeModal() {
    modalComponent.close();
}
function addMemo(contents) {
    var type = contents.type;
    if (type === 'image') {
        imageComponent.createMemo(contents);
    }
    else if (type === 'video') {
        videoComponent.createMemo(contents);
    }
    else if (type === 'note') {
        noteComponent.createMemo(contents);
    }
    else if (type === 'task') {
        taskComponent.createMemo(contents);
    }
}
function deleteArticle(e) {
    e.preventDefault();
    var parent = e.target.parentElement;
    if (parent)
        parent.remove();
}
