import { MemoType,BodyType,MemoComponent } from './../types';

export default class Modal{
  modalOverlay = document.querySelector('.modal-overlay') as HTMLDivElement;
  label = document.querySelector('.form__label-body') as HTMLElement;
  
  open(type:MemoType){
    if(type === 'note' || type==='task'){
      const newText:BodyType = 'Body';
      this.label.innerText = newText;
    }else if(type === 'image' || type==='video'){
      const newText:BodyType = 'URL';
      this.label.innerText = newText;
    }

    this.modalOverlay.classList.remove('hidden');
  }

  close(){
    this.modalOverlay.classList.add('hidden');
  }

  submit():MemoComponent{
    const modalTitle = document.querySelector('.form__title') as HTMLInputElement;
    const modalBody = document.querySelector('.form__body') as HTMLInputElement;
  
    const title:string = modalTitle.value;
    const body:string = modalBody.value;
  
    modalTitle.value='';
    modalBody.value='';

    return {title, body};
  }
}