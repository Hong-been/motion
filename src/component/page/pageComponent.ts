import { BaseComponent } from '../component.js';

export default class PageComponent extends BaseComponent<HTMLUListElement>{
  constructor(){
    super(`<ul class="article-list"></ul>`);
  }
}
