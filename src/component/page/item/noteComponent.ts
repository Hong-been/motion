import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, body:string){
    super(`<div class="article--text">
        <div class="article--text__title"></div>
        <div class="article--text__body"></div>
      </div>`);

      const titleElement = this.element.querySelector('.article--text__title')! as HTMLDivElement;
      const bodyElement = this.element.querySelector('.article--text__body')! as HTMLDivElement;
      
      titleElement.textContent = title;
      bodyElement.textContent = body;
  };
}