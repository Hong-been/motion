import { PageItemComponent, PageComponent, } from "./component/page/pageComponent.js";
import { ImageComponent } from "./component/page/item/imageComponent.js";
import { NoteComponent } from "./component/page/item/noteComponent.js";
import { TaskComponent } from "./component/page/item/taskComponent.js";
import { VideoComponent } from "./component/page/item/videoComponent.js";
import { InputSectionDialog } from "./component/dialog/dialog.js";
import { MediaDialog } from "./component/dialog/input/media-input.js";
import { TextDialog } from "./component/dialog/input/text-input.js";
var App = (function () {
    function App(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot, "afterbegin");
        this.bindElementToDialog('.video', MediaDialog, function (input) {
            return new VideoComponent(input.title, input.url);
        });
        this.bindElementToDialog('.image', MediaDialog, function (input) {
            return new ImageComponent(input.title, input.url);
        });
        this.bindElementToDialog('.note', TextDialog, function (input) {
            return new NoteComponent(input.title, input.body);
        });
        this.bindElementToDialog('.task', TextDialog, function (input) {
            return new TaskComponent(input.title, input.body);
        });
    }
    App.prototype.bindElementToDialog = function (selector, inputComponent, makeSection) {
        var _this = this;
        var button = document.querySelector(".header__button".concat(selector));
        button.addEventListener("click", function () {
            var dialog = new InputSectionDialog();
            var input = new inputComponent();
            dialog.addChild(input);
            dialog.attachTo(_this.dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(_this.dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var video = makeSection(input);
                _this.page.addChild(video);
                dialog.removeFrom(_this.dialogRoot);
            });
        });
    };
    return App;
}());
var main = document.querySelector(".main");
new App(main, document.body);
//# sourceMappingURL=app.js.map