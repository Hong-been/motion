"use strict";
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
setBackgroundImg("/public/cool-background.png");
var headerButtons = document.querySelectorAll('.header__button');
var modalOverlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal');
var modalForm = document.querySelector('.modal__form');
var modalClose = document.querySelector('.modal__close');
var modalAdd = document.querySelector('.modal__add');
var newArticle = {
    type: 'note',
    title: "",
    body: ""
};
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
                    newArticle.type = name;
                    openModal(newArticle);
                });
                break;
            default:
                console.log("invalid article type: ".concat(name));
        }
    });
}
function onSubmit(e) {
    e.preventDefault();
    var modalTitle = document.querySelector('.form__title');
    var modalBody = document.querySelector('.form__body');
    var title = modalTitle.value;
    var body = modalBody.value;
    modalTitle.value = '';
    modalBody.value = '';
    if (!title && !body)
        return;
    addArticle(__assign(__assign({}, newArticle), { title: title, body: body }));
    var deleteBtns = document.querySelectorAll('.article__delete');
    if (deleteBtns) {
        deleteBtns.forEach(function (btn) { return btn.addEventListener('click', deleteArticle); });
    }
    closeModal();
}
function setBackgroundImg(path) {
    document.body.style.backgroundImage = "url(".concat(path, ")");
}
function openModal(article) {
    var label = modal.querySelector('.form__label-body');
    if (article.type === 'note' || article.type === 'task') {
        var newText = 'Body';
        label.innerText = newText;
    }
    else if (article.type === 'image' || article.type === 'video') {
        var newText = 'URL';
        label.innerText = newText;
    }
    if (modalOverlay) {
        modalOverlay.classList.remove('hidden');
    }
}
function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.add('hidden');
    }
}
function addArticle(contents) {
    var type = contents.type;
    var articleList = document.querySelector('.article-list');
    if (!articleList)
        return;
    if (type === 'image') {
        articleList.innerHTML += "\n    <ul class=\"article\">\n    <div class=\"article--media\">\n      <img src=".concat(contents.body, " class=\"article--media__content\"></img>\n      <div class=\"article--media__title\">").concat(contents.title, "</div>\n      </div>\n      <input type=\"button\" value=\"X\" class=\"article__delete red-x\"></input>\n  </ul>\n    ");
    }
    else if (type === 'video') {
        articleList.innerHTML += "\n    <ul class=\"article\">\n      <div class=\"article--media\">\n      <iframe src=\"".concat(contents.body, "\" class=\"article--media__content\" width=\"400\" height=\"200\">\n      </iframe>\n      <div class=\"article--media__title\">").concat(contents.title, "</div>\n      </div>\n      <input type=\"button\" value=\"X\" class=\"article__delete red-x\"></input>\n  </ul>\n    ");
    }
    else if (type === 'note') {
        articleList.innerHTML += "\n    <ul class=\"article\">\n      <div class=\"article--text\">\n        <div class=\"article--text__title\">".concat(contents.title, "</div>\n        <div class=\"article--text__body\">").concat(contents.body, "</div>\n      </div>\n      <input type=\"button\" value=\"X\" class=\"article__delete red-x\"></input>\n  </ul>\n    ");
    }
    else if (type === 'task') {
        articleList.innerHTML += "\n    <ul class=\"article\">\n      <div class=\"article--text\">\n      <div class=\"article--text__title\">".concat(contents.title, "</div>\n      <div class=\"article--text__body\">\n        <input type=\"checkbox\" value=\"").concat(contents.body, "\" name=\"task1\"></input>  \n        <label for=\"task1\">").concat(contents.body, "</label>\n      </div>\n      </div>\n      <input type=\"button\" value=\"X\" class=\"article__delete red-x\"></input>\n  </ul>\n    ");
    }
    else {
        console.log("invalid type: ".concat(type));
    }
}
function deleteArticle(e) {
    e.preventDefault();
    var parent = e.target.parentElement;
    if (parent)
        parent.remove();
}
//# sourceMappingURL=main.js.map