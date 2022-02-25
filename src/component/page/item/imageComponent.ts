import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, url:string){
    super(`
      <div class="article--media">
        <img class="article--media__content"></img>
        <div class="article--media__title"></div>
      </div>
      `);

    const titleElement = this.element.querySelector('.article--media__title')! as HTMLDivElement;
    const imageElement = this.element.querySelector('.article--media__content')! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;
    titleElement.textContent = title;
  }
}