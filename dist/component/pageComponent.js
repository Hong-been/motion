var PageComponent = (function () {
    function PageComponent() {
        this.memoList = [];
    }
    PageComponent.prototype.addMemo = function (memo) {
        this.memoList.push(memo);
        this.updateList();
    };
    PageComponent.prototype.updateList = function () {
        var articleList = document.querySelector('.article-list');
        if (!articleList)
            return;
        for (var _i = 0, _a = this.memoList; _i < _a.length; _i++) {
            var memo = _a[_i];
            articleList.appendChild(memo);
        }
    };
    return PageComponent;
}());
export default PageComponent;
