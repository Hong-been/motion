import { BaseComponent } from '../../component.js';

export class TextDialog extends BaseComponent<HTMLElement>{

  constructor(){
    super(`<div class="modal__form">
    <label class="form__label">Title</label>
    <input class="form__input form__title" placeholder="Enter title">
    <label class="form__label-body">Body</label>
    <input class="form__input form__body" placeholder="Enter text">
    </div>`);
  }

}