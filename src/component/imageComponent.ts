import { MemoComponent,memo } from './../types';
import PageComponent from './pageComponent';

export default class NoteComponent implements memo{
  constructor(private myPage:PageComponent){}

  createMemo(newMemo:MemoComponent){
    const title = newMemo.title;
    const body = newMemo.body;

    const ul = document.createElement('ul');
    ul.setAttribute('class','article');

    ul.innerHTML = `
      <div class="article--media">
        <img src=${body} class="article--media__content"></img>
        <div class="article--media__title">${title}</div>
      </div>
      <input type="button" value="X" class="article__delete red-x"></input>`

    this.myPage.addMemo(ul);
  }
}