// import * as types from "./types";
import PageComponent from "./component/page/pageComponent.js";
import {ImageComponent} from "./component/page/item/imageComponent.js";
import {NoteComponent} from "./component/page/item/noteComponent.js";
import {TaskComponent} from "./component/page/item/taskComponent.js";
import {VideoComponent} from "./component/page/item/videoComponent.js";

// import Modal from "./components/modalComponent.js";

// const videoComponent = new VideoComponent(pageComponent);
// const noteComponent = new NoteComponent(pageComponent);
// const taskComponent = new TaskComponent(pageComponent);
// const modalComponent = new Modal;

// const headerButtons:NodeListOf<HTMLInputElement> = document.querySelectorAll('.header__button');
// const modalForm = document.querySelector('.modal__form') as HTMLFormElement;
// const modalClose = document.querySelector('.modal__close') as HTMLInputElement;

// const newMemo:types.MemoComponent = {title:'', body:''};

// modalClose.addEventListener('click',closeModal);
// modalForm.addEventListener('submit',onSubmit);

// if(headerButtons){
//   headerButtons.forEach((button) => {
//     const name = button.name;

//     switch(name){
//       case 'note':
//       case 'video':
//       case 'task':
//       case 'image':
//         button.addEventListener('click', ()=>{
//           newMemo.type = name;
//           openModal(name);
//         });
//         break;
//       default:
//         console.log(`invalid article type: ${name}`);
//     }
//   });
// }

// function onSubmit(e:Event){
//   e.preventDefault();

//   const {title, body} = modalComponent.submit();

//   if(!title && !body) return;

//   addMemo({...newMemo, title, body});

//   const deleteBtns = document.querySelectorAll('.article__delete');
  
//   if(deleteBtns){
//     deleteBtns.forEach(btn => btn.addEventListener('click',deleteArticle));
//   }

//   closeModal();
// }

// function openModal(type:types.MemoType){
//   modalComponent.open(type);
// }

// function closeModal(){
//   modalComponent.close();
// }

// function addMemo(contents:types.MemoComponent){
//   const type = contents.type;

//   if(type==='image'){
//     imageComponent.createMemo(contents);
//   }else if(type==='video'){
//     videoComponent.createMemo(contents);
//   }else if(type==='note'){
//     noteComponent.createMemo(contents);
//   }else if(type==='task'){
//     taskComponent.createMemo(contents);
//   }
// }

// function deleteArticle(e:Event){
//   e.preventDefault();

//   const parent = (<HTMLElement>e.target).parentElement;
//   if(parent) parent.remove();
// }

class App{
  private readonly page: PageComponent;

  constructor(appRoot:HTMLElement){
    this.page = new PageComponent();

    const ul:HTMLElement = this.page.attachTo(appRoot,'afterbegin');

    const image = new ImageComponent('Image Title!','https://picsum.photos/200');
    image.attachTo(ul,'beforeend');
  
    const note = new NoteComponent('Note Title!','TS..쉽지않네..^^;;하핫');
    note.attachTo(ul,'beforeend');
  
    const todo = new TaskComponent('Todo Title!','금요일까지 강의 완!');
    todo.attachTo(ul,'beforeend');
  
    const video = new VideoComponent('Video Title!','https://www.youtube.com/watch?v=-wDEE8gOv1w');
    video.attachTo(ul,'beforeend');
  }
}

const main = document.querySelector('.main')! as HTMLElement;
new App(main);