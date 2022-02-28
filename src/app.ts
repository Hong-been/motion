import {
	Composable,
	PageItemComponent,
	PageComponent,
} from "./component/page/pageComponent.js";
import {ImageComponent} from "./component/page/item/imageComponent.js";
import {NoteComponent} from "./component/page/item/noteComponent.js";
import {TaskComponent} from "./component/page/item/taskComponent.js";
import {VideoComponent} from "./component/page/item/videoComponent.js";
import {Component} from "./component/component.js";
import {
	InputSectionDialog,
	MediaData,
	TextData,
} from "./component/dialog/dialog.js";
import {MediaDialog} from "./component/dialog/input/media-input.js";
import {TextDialog} from "./component/dialog/input/text-input.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
	new (): T;
};

class App {
	private readonly page: Component & Composable;

	constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
		this.page = new PageComponent(PageItemComponent);
		this.page.attachTo(appRoot, "afterbegin");

		this.bindElementToDialog<MediaDialog>(
			".video",
			MediaDialog,
			(input: MediaDialog) => {
				return new VideoComponent(input.title, input.url);
			}
		);

		this.bindElementToDialog<MediaDialog>(
			".image",
			MediaDialog,
			(input: MediaDialog) => {
				return new ImageComponent(input.title, input.url);
			}
		);

		this.bindElementToDialog<TextDialog>(
			".note",
			TextDialog,
			(input: TextDialog) => {
				return new NoteComponent(input.title, input.body);
			}
		);

		this.bindElementToDialog<TextDialog>(
			".task",
			TextDialog,
			(input: TextDialog) => {
				return new TaskComponent(input.title, input.body);
			}
		);
	}

	private bindElementToDialog<T extends (MediaData | TextData) & Component>(
		selector: string,
		inputComponent: InputComponentConstructor<T>,
		makeSection: (input: T) => Component
	) {
		const button = document.querySelector(
			`.header__button${selector}`
		)! as HTMLInputElement;

		button.addEventListener("click", () => {
			const dialog = new InputSectionDialog();
			const input = new inputComponent();
			dialog.addChild(input);
			dialog.attachTo(this.dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(this.dialogRoot);
			});

			dialog.setOnSubmitListener(() => {
				const video = makeSection(input);
				this.page.addChild(video);
				dialog.removeFrom(this.dialogRoot);
			});
		});
	}
}
const main = document.querySelector(".main")! as HTMLElement;
new App(main, document.body);

// https://picsum.photos/200
// https://www.youtube.com/watch?v=zWhqy34zvVI&t=1337s
