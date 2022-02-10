import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, url:string){
    super(` <li class="article">
      <div class="article--media">
        <iframe class="article--media__content" width="400" height="200">
        </iframe>
        <div class="article--media__title"></div>
      </div>
      <input type="button" value="X" class="article__delete red-x"></input>
      </li>
      `);

      const videoElement = this.element.querySelector('.article--media__content')! as HTMLIFrameElement;
      const titleElement = this.element.querySelector('.article--media__title')! as HTMLDivElement;

      const embedUrl = this.converToEmbedUrl(url);
      videoElement.src = embedUrl;
      titleElement.textContent = title;
  }
  
  private converToEmbedUrl(url:string):string{
    // https://www.youtube.com/watch?v=tgbNymZ7vqY&
    // https://youtu.be/tgbNymZ7vqY
    const regex:RegExp=/(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    
    const match = url.match(regex);
    const videoId = match ? match[1] || match[2] : undefined;
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  }
}