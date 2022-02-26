import { Composable, PageItemComponent,PageComponent } from './component/page/pageComponent.js';
// import * as types from "./types";
import {ImageComponent} from "./component/page/item/imageComponent.js";
import {NoteComponent} from "./component/page/item/noteComponent.js";
import {TaskComponent} from "./component/page/item/taskComponent.js";
import {VideoComponent} from "./component/page/item/videoComponent.js";
import { Component } from './component/component.js';
import { InputDialog } from './component/dialog/dialog.js';
import {MediaDialog} from "./component/dialog/input/media-input.js";
// import {TextDialog} from "./component/dialog/input/text-input.js";

class App{
  private readonly page: Component & Composable ;

  constructor(appRoot:HTMLElement){
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot,'afterbegin');
    
    const image = new ImageComponent('Image Title!','https://picsum.photos/200');
    this.page.addChild(image);
  
    const note = new NoteComponent('Note Title!','TS..쉽지않네..^^;;하핫');
    this.page.addChild(note);
  
    const todo = new TaskComponent('Todo Title!','금요일까지 강의 완!');
    this.page.addChild(todo);
  
    const video = new VideoComponent('Video Title!','https://www.youtube.com/watch?v=zWhqy34zvVI&t=1337s');
    this.page.addChild(video);

    const imageBtn = document.querySelector(".header__button.image")! as HTMLInputElement;
    imageBtn.addEventListener('click',()=>{
      const dialog = new InputDialog();
      const media = new MediaDialog();
      dialog.addChild(media);
      
      dialog.setOnCloseListener(()=>{
        console.log('close');
        dialog.removeFrom(document.body);
      });
      
      dialog.setOnSubmitListener(()=>{
        console.log('submit');
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    })
  }

}

const main = document.querySelector('.main')! as HTMLElement;
new App(main);