const headerButtons:NodeListOf<HTMLInputElement> = document.querySelectorAll('.header__button');
const modalOverlay = document.querySelector('.modal-overlay');
const modal= document.querySelector('.modal') as HTMLDivElement;
const modalForm = document.querySelector('.modal__form') as HTMLFormElement;
const modalClose = document.querySelector('.modal__close') as HTMLInputElement;
const modalAdd = document.querySelector('.modal__add');

const newArticle:ArticleType = {
  type : 'note',
  title: "",
  body: ""
};

type ArticleType =  {
  type : ButtonType;
  title:string;
  body:string;
};

type ButtonType = 'image' | 'video' | 'note' | 'task';
type BodyType = 'Body' | 'URL';

modalClose.addEventListener('click',closeModal);

modalForm.addEventListener('submit',onSubmit);

if(headerButtons){
  headerButtons.forEach((button) => {
    const name = button.name;

    switch(name){
      case 'note':
      case 'video':
      case 'task':
      case 'image':
        button.addEventListener('click', ()=>{
          newArticle.type = name;
          openModal(newArticle);
        });
        break;
      default:
        console.log(`invalid article type: ${name}`);
    }
  });
}
function onSubmit(e:Event){
  e.preventDefault();

  const modalTitle = document.querySelector('.form__title') as HTMLInputElement;
  const modalBody = document.querySelector('.form__body') as HTMLInputElement;

  const title:string = modalTitle.value;
  const body:string = modalBody.value;

  modalTitle.value='';
  modalBody.value='';

  if(!title && !body) return;

  addArticle({...newArticle, title, body});

  const deleteBtns = document.querySelectorAll('.article__delete');
  
  if(deleteBtns){
    deleteBtns.forEach(btn => btn.addEventListener('click',deleteArticle);)
  }

  closeModal();
}

function openModal(article:ArticleType){
  const label = modal.querySelector('.form__label-body') as HTMLElement;

  if(article.type === 'note' || article.type==='task'){
    const newText:BodyType = 'Body';
    label.innerText = newText;
  }else if(article.type === 'image' || article.type==='video'){
    const newText:BodyType = 'URL';
    label.innerText = newText;
  }

  if(modalOverlay){
    modalOverlay.classList.remove('hidden');
  } 
}

function closeModal(){
  if(modalOverlay){
    modalOverlay.classList.add('hidden');
  } 
}

function addArticle(contents:ArticleType){
  const type = contents.type;

  const articleList = document.querySelector('.article-list');
  if(!articleList) return;

  if(type==='image'){
    articleList.innerHTML += `
    <ul class="article">
    <div class="article--media">
      <img src=${contents.body} class="article--media__content"></img>
      <div class="article--media__title">${contents.title}</div>
      </div>
      <input type="button" value="X" class="article__delete red-x"></input>
  </ul>
    `;
  }else if(type==='video'){
    articleList.innerHTML += `
    <ul class="article">
      <div class="article--media">
      <iframe src="${contents.body}" class="article--media__content" width="400" height="200">
      </iframe>
      <div class="article--media__title">${contents.title}</div>
      </div>
      <input type="button" value="X" class="article__delete red-x"></input>
  </ul>
    `;
  }else if(type==='note'){
    articleList.innerHTML += `
    <ul class="article">
      <div class="article--text">
        <div class="article--text__title">${contents.title}</div>
        <div class="article--text__body">${contents.body}</div>
      </div>
      <input type="button" value="X" class="article__delete red-x"></input>
  </ul>
    `;
  }else if(type==='task'){
    articleList.innerHTML += `
    <ul class="article">
      <div class="article--text">
      <div class="article--text__title">${contents.title}</div>
      <div class="article--text__body">
        <input type="checkbox" value="${contents.body}" name="task1"></input>  
        <label for="task1">${contents.body}</label>
      </div>
      </div>
      <input type="button" value="X" class="article__delete red-x"></input>
  </ul>
    `;
  }else{
    console.log(`invalid type: ${type}`);
  }

}

function deleteArticle(e:Event){
  e.preventDefault();

  const parent = (<HTMLElement>e.target).parentElement;
  if(parent) parent.remove();
}