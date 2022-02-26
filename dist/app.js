import { PageItemComponent, PageComponent } from './component/page/pageComponent.js';
import { ImageComponent } from "./component/page/item/imageComponent.js";
import { NoteComponent } from "./component/page/item/noteComponent.js";
import { TaskComponent } from "./component/page/item/taskComponent.js";
import { VideoComponent } from "./component/page/item/videoComponent.js";
import { InputDialog } from './component/dialog/dialog.js';
import { MediaDialog } from "./component/dialog/input/media-input.js";
var App = (function () {
    function App(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot, 'afterbegin');
        var image = new ImageComponent('Image Title!', 'https://picsum.photos/200');
        this.page.addChild(image);
        var note = new NoteComponent('Note Title!', 'TS..쉽지않네..^^;;하핫');
        this.page.addChild(note);
        var todo = new TaskComponent('Todo Title!', '금요일까지 강의 완!');
        this.page.addChild(todo);
        var video = new VideoComponent('Video Title!', 'https://www.youtube.com/watch?v=zWhqy34zvVI&t=1337s');
        this.page.addChild(video);
        var imageBtn = document.querySelector(".header__button.image");
        imageBtn.addEventListener('click', function () {
            var dialog = new InputDialog();
            var media = new MediaDialog();
            dialog.addChild(media);
            dialog.setOnCloseListener(function () {
                console.log('close');
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(function () {
                console.log('submit');
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
    return App;
}());
var main = document.querySelector('.main');
new App(main);
//# sourceMappingURL=app.js.map