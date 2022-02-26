import { Component } from './../component.js';
import { BaseComponent } from '../component.js';
import { Composable } from '../page/pageComponent.js';

type onCloseListener = ()=>void;
type onSubmitListener = ()=>void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable{
  closeListener?: onCloseListener;
  submitListener?: onSubmitListener;

  constructor(){
    super(`<div class="modal-overlay">
    <article class="modal">
      <input type="button" value="X" class="modal__close red-x">
      <div class="form__container">
        
      </div>
      <input type="submit" value="ADD" class="modal__add red-button">
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