import PageComponent from "./component/page/pageComponent.js";
import { ImageComponent } from "./component/page/item/imageComponent.js";
import { NoteComponent } from "./component/page/item/noteComponent.js";
import { TaskComponent } from "./component/page/item/taskComponent.js";
import { VideoComponent } from "./component/page/item/videoComponent.js";
var App = (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        var ul = this.page.attachTo(appRoot, 'afterbegin');
        var image = new ImageComponent('Image Title!', 'https://picsum.photos/200');
        image.attachTo(ul, 'beforeend');
        var note = new NoteComponent('Note Title!', 'TS..쉽지않네..^^;;하핫');
        note.attachTo(ul, 'beforeend');
        var todo = new TaskComponent('Todo Title!', '금요일까지 강의 완!');
        todo.attachTo(ul, 'beforeend');
        var video = new VideoComponent('Video Title!', 'https://www.youtube.com/watch?v=-wDEE8gOv1w');
        video.attachTo(ul, 'beforeend');
    }
    return App;
}());
var main = document.querySelector('.main');
new App(main);
//# sourceMappingURL=app.js.map