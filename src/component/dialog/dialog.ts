import { Component } from './../component.js';
import { BaseComponent } from '../component.js';
import { Composable } from '../page/pageComponent.js';

export interface MediaData{
  readonly title:string,
  readonly url:string
}

export interface TextData{
  readonly title:string,
  readonly body:string
}

type onCloseListener = ()=>void;
type onSubmitListener = ()=>void;

export class InputSectionDialog extends BaseComponent<HTMLElement> implements Composable{
  closeListener?: onCloseListener;
  submitListener?: onSubmitListener;

  constructor(){
    super(`<div class="modal-overlay">
    <article class="modal">
      <input type="button" value="X" class="modal__close red-x">
      <form class="form__container">
        <input type="submit" value="ADD" class="modal__add red-button">
      </form>
    </article>
  </div>`);

  const closeBtn = this.element.querySelector(".modal__close")! as HTMLInputElement;
  closeBtn.addEventListener("click",()=>{
    this.closeListener && this.closeListener();
  })

  const submitBtn = this.element.querySelector(".modal__add")! as HTMLInputElement;
  submitBtn.addEventListener("click",()=>{
    this.submitListener && this.submitListener();
  })
  }

  setOnCloseListener(listener: onCloseListener){
    this.closeListener=listener;
  }

  setOnSubmitListener(listener: onSubmitListener){
    this.submitListener=listener;
  }

  addChild(child:Component){
    const body = this.element.querySelector('.form__container')! as HTMLElement;
    child.attachTo(body);
  }
}