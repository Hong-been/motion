import { MediaData } from './../dialog.js';
import { BaseComponent } from '../../component.js';

export class MediaDialog extends BaseComponent<HTMLElement> implements MediaData{
  constructor(){
    super(`<div class="modal__form">
    <label class="form__label">Title</label>
    <input class="form__input form__title" placeholder="Enter title">
    <label class="form__label-body">URL</label>
    <input class="form__input form__body" placeholder="Enter media url">
    </div>`);
  }
  get title():string{
    const title = this.element.querySelector(".form__title")! as HTMLInputElement;
    return title.value;
  }

  get url():string{
    const body = this.element.querySelector(".form__body")! as HTMLInputElement;
    return body.value;
  }
}