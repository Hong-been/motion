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
    <div class="article--text">
      <div class="article--text__title">${title}</div>
      <div class="article--text__body">${body}</div>
    </div>
    <input type="button" value="X" class="article__delete red-x"></input>
    `;

    this.myPage.addMemo(ul);
  }
}