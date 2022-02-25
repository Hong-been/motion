export interface Component{
  attachTo(parent:HTMLElement,position?:InsertPosition):HTMLElement | void;
  removeFrom(parent:HTMLElement):void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component{
  protected readonly element: T;
  
  /**
   * 입력받은 htmlString의 첫번째Element를 this.element로 초기화
   * @param htmlString 
   */
  constructor(htmlString:string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  /**
   * this.element로 저장된 HTMLElement를 parentElement에 붙인다
   * @param parent: HTMLElement
   * @param position 
   * @returns 
   */
  attachTo(parent:HTMLElement, position:InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);
  }
  
  removeFrom(parent:HTMLElement){
    if(parent !== this.element.parentElement){
      throw Error(`parent mistached!`);
    }
    parent.removeChild(this.element);
  }

}