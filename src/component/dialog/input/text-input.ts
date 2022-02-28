import { TextData } from './../dialog.js';
import { BaseComponent } from '../../component.js';

export class TextDialog extends BaseComponent<HTMLElement> implements TextData{
  constructor(){
    super(`<div class="modal__form">
            <label class="form__label">Title</label>
            <input class="form__input form__title" placeholder="Enter title">
            <label class="form__label-body">Body</label>
            <input class="form__input form__body" placeholder="Enter text">
          </div>`);
  }
  get title():string{
    const title = this.element.querySelector(".form__title")! as HTMLInputElement;
    return title.value;
  }

  get body():string{
    const body = this.element.querySelector(".form__body")! as HTMLInputElement;
    return body.value;
  }
}