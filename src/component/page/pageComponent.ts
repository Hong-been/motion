import { BaseComponent, Component } from '../component.js';

export interface Composable{
  addChild(child:Component):void;
}

interface SectionContainer extends Component, Composable{
  setOnDeleteListener(listener:OnCloseListner):void;
}

type OnCloseListner = () => void;

type SectionContainerConstructor = {
  new (): SectionContainer;
}

export class PageItemComponent extends BaseComponent<HTMLLIElement> implements SectionContainer{
  private deleteListener?:OnCloseListner;

  constructor(){
    super(`<li class="article">
            <section class='article-contents'></section>
            <input type="button" value="X" class="article__delete red-x"></input>
          </li>`);
    
    const deleteBtn = this.element.querySelector('.article__delete')! as HTMLInputElement;
    deleteBtn.onclick = ()=>{
      this.deleteListener && this.deleteListener();
    };
  }

  addChild(child:Component){
    const container = this.element.querySelector('.article-contents')! as HTMLElement;
    child.attachTo(container,'afterbegin');
  }

  setOnDeleteListener(listener: OnCloseListner){
    this.deleteListener = listener;
  };
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
  constructor(private pageItemContainerConstructor:SectionContainerConstructor){
    super(`<ul class="article-list"></ul>`);
  }

  addChild(note:Component){
    const pageItemContainer = new this.pageItemContainerConstructor();
    
    pageItemContainer.addChild(note);
    pageItemContainer.attachTo(this.element,'afterbegin');
    pageItemContainer.setOnDeleteListener(()=>{
      pageItemContainer.removeFrom(this.element);
    })

  }
}
