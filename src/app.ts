import * as types from "./types";

import PageComponent from "./component/pageComponent";
import ImageComponent from "./component/imageComponent";
import VideoComponent from "./component/videoComponent";
import NoteComponent from "./component/noteComponent";
import TaskComponent from "./component/taskComponent";
import Modal from "./component/modalComponent";

const pageComponent = new PageComponent();
const imageComponent = new ImageComponent(pageComponent);
const videoComponent = new VideoComponent(pageComponent);
const noteComponent = new NoteComponent(pageComponent);
const taskComponent = new TaskComponent(pageComponent);
const modalComponent = new Modal;

const headerButtons:NodeListOf<HTMLInputElement> = document.querySelectorAll('.header__button');
const modalForm = document.querySelector('.modal__form') as HTMLFormElement;
const modalClose = document.querySelector('.modal__close') as HTMLInputElement;

const newMemo:types.MemoComponent = {title:'', body:''};

modalClose.addEventListener('click',closeModal);
modalForm.addEventListener('submit',onSubmit);

if(headerButtons){
  headerButtons.forEach((button) => {
    const name = button.name;

    switch(name){
      case 'note':
      case 'video':
      case 'task':
      case 'image':
        button.addEventListener('click', ()=>{
          newMemo.type = name;
          openModal(name);
        });
        break;
      default:
        console.log(`invalid article type: ${name}`);
    }
  });
}

function onSubmit(e:Event){
  e.preventDefault();

  const {title, body} = modalComponent.submit();

  if(!title && !body) return;

  addMemo({...newMemo, title, body});

  const deleteBtns = document.querySelectorAll('.article__delete');
  
  if(deleteBtns){
    deleteBtns.forEach(btn => btn.addEventListener('click',deleteArticle));
  }

  closeModal();
}

function openModal(type:types.MemoType){
  modalComponent.open(type);
}

function closeModal(){
  modalComponent.close();
}

function addMemo(contents:types.MemoComponent){
  const type = contents.type;

  if(type==='image'){
    imageComponent.createMemo(contents);
  }else if(type==='video'){
    videoComponent.createMemo(contents);
  }else if(type==='note'){
    noteComponent.createMemo(contents);
  }else if(type==='task'){
    taskComponent.createMemo(contents);
  }
}

function deleteArticle(e:Event){
  e.preventDefault();

  const parent = (<HTMLElement>e.target).parentElement;
  if(parent) parent.remove();
}