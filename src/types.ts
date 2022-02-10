export type MemoComponent = {
  type?:MemoType,
  title:string;
  body:string;
}
export type MemoType = 'image' | 'video' | 'note' | 'task';

export type BodyType = 'Body' | 'URL';

export interface memo {
  createMemo:(newMemo : MemoComponent)=>void;
}
