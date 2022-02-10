var NoteComponent = (function () {
    function NoteComponent(myPage) {
        this.myPage = myPage;
    }
    NoteComponent.prototype.createMemo = function (newMemo) {
        var title = newMemo.title;
        var body = newMemo.body;
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'article');
        ul.innerHTML = "\n          <div class=\"article--media\">\n          <iframe src=\"".concat(body, "\" class=\"article--media__content\" width=\"400\" height=\"200\">\n          </iframe>\n          <div class=\"article--media__title\">").concat(title, "</div>\n          </div>\n          <input type=\"button\" value=\"X\" class=\"article__delete red-x\"></input>\n    ");
        this.myPage.addMemo(ul);
    };
    return NoteComponent;
}());
export default NoteComponent;
//# sourceMappingURL=videoComponent.js.map