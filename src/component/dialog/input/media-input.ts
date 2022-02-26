import { BaseComponent } from '../../component.js';

export class MediaDialog extends BaseComponent<HTMLElement>{

  constructor(){
    super(`<div class="modal__form">
    <label class="form__label">Title</label>
    <input class="form__input form__title" placeholder="Enter title">
    <label class="form__label-body">URL</label>
    <input class="form__input form__body" placeholder="Enter media url">
    </div>`);
  }

  //TODO: get title(), get url(); 
  // https://academy.dream-coding.com/courses/take/typescript/lessons/20416190-14-25
}