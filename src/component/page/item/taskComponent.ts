import { BaseComponent } from '../../component.js';

export class TaskComponent extends BaseComponent<HTMLElement>{
    constructor(title:string, todo:string){
      super(`
      <li class="article">
            <div class="article--text">
              <div class="article--text__title"></div>
              <div class="article--text__body">
                <input type="checkbox" name="task1"></input>
                <label for="task1"></label>
            </div>
            </div>
            <input type="button" value="X" class="article__delete red-x"></input>
        </li>`);


      const titleElement = this.element.querySelector('.article--text__title')! as HTMLDivElement;
      const inputElement = this.element.querySelector('.article--text__body input')! as HTMLInputElement;
      const labelElement = this.element.querySelector('.article--text__body label')! as HTMLLabelElement;

      titleElement.textContent = title;
      inputElement.value = todo;
      labelElement.textContent = todo;
  }
}