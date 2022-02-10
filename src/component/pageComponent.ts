/*
각각 이미지, 비디오, 노트, 태스크 컴포넌트들을 가진다.
add버튼을누르면 -> 타이틀, 바디가 각각 컴포넌트에게 간다 -> html만들어서 pageComponent에 전달 -> 얘가 list에 추가한다.
*/

export default class PageComponent{
  memoList:HTMLUListElement[] = [];

  addMemo(memo:HTMLUListElement){
    this.memoList.push(memo);
    this.updateList();
  }

  updateList(){
    const articleList = document.querySelector('.article-list');
    if(!articleList) return;

    for(let memo of this.memoList){
      articleList.appendChild(memo);
    }
  }
}
