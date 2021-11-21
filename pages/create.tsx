// Next.js
import type { NextPage } from 'next';
import { useState } from 'react';

// Original
import Layout from '../components/layout';
import styles from '../styles/style.module.css';

const CreatePage: NextPage = () => {
	const [isFlag, setFlag] = useState(false);

	const toolHeading = (): void => {
		let selectedText: Selection = window.getSelection()!;
		const range: Range = selectedText.getRangeAt(0);
		const node: HTMLHeadingElement = document.createElement('h1');
		node.innerHTML = selectedText.toString();
		range.deleteContents();
		range.insertNode(node);
	}
	const toolBold 		= (): boolean => document.execCommand('bold', false, '');
	const toolItalic 	= (): boolean => document.execCommand('italic', false, '');
	const toolUnderLine = (): boolean => document.execCommand('underline', false, '');
	const toolCut 		= (): boolean => document.execCommand('cut',false,'');
	const toolUndo 		= (): boolean => document.execCommand('undo',false,'');
	const toolRedo 		= (): boolean => document.execCommand('redo',false,'');
	const toolStrike 	= (): boolean => document.execCommand('strikeThrough',false,'');
	const toolDelete 	= (): boolean => document.execCommand('delete',false,'');
	const toolSelectAll = (): boolean => document.execCommand('selectAll',false,'');
	const toolCenter 	= (): boolean => document.execCommand('justifyCenter',false,'');
	const toolLeft 		= (): boolean => document.execCommand('justifyLeft',false,'');
	const toolRight 	= (): boolean => document.execCommand('justifyRight',false,'');

	const toolLink = (): void => {
		const url: string = prompt("Enter the URL")!;
		document.execCommand("createLink", false, url);
	}
	const toolColor = (): void => {
		const color: string = prompt("Enter your color in hex ex:#f1f233")!;
		document.execCommand("foreColor", false, color);
	}
	const toolCode = (): undefined | null => {
		const editor: HTMLElement = document.getElementById('editor')!;
		if (editor.textContent) {
			if (isFlag === true) {
				editor.innerHTML = editor.textContent;
				setFlag(false);
			}
			else {
				editor.textContent = editor.innerHTML;
				setFlag(true);
			}
		}
		else return null;
	}
	const toolImage = (value: any): void => {
		const editor: HTMLElement = document.getElementById('editor')!;
		const file: any = value[0];
		const reader: FileReader = new FileReader();
		let dataURI: string | ArrayBuffer;

		reader.addEventListener(
			"load",
			() => {
				const img: HTMLImageElement = document.createElement("img");
				dataURI = reader.result!;
				img.src = String(dataURI);
				editor.appendChild(img);
			},
			false
		);
		if (file) {
			reader.readAsDataURL(file);
		}
	}

	const getHtml = (): void => {
		const editor: HTMLElement | null = document.getElementById('editor');
		const output: HTMLElement | null = document.getElementById('output');
		if (editor && output) {
			const editor_content: string = editor.innerHTML;
			output.style.display = "block";
			output.textContent = editor_content;
		}
	};
	const getText = (): void => {
		const editor: HTMLElement | null = document.getElementById('editor');
		const output: HTMLElement | null = document.getElementById('output');
		if (editor && output) {
			const editor_content: string | null = editor.textContent;
			output.style.display = "block";
			output.textContent = editor_content;
		}
	};
	const changeCss = (): void => {
		const style: string = prompt("Enter your color in hex ex:#editor h1 { font-size: 3rem; }")!;
		console.log(document.styleSheets.item(0)!.cssRules.length);
		document.styleSheets[1].insertRule(style, document.styleSheets.item(0)!.cssRules.length);
	};

  	return (
		<Layout type="website" robots="index,follow" title="ホーム" description="" image_url="" url="">
			<div className="container">
				<h1 className="title">Let's use <span className="site-logo">HTML Editor</span>!</h1>
				<p className="description">
					Let's change text to HTML.
					<code>&lt;h1&gt;HTML Editor&lt;/h1&gt;</code>
				</p>

				<div id="toolbar">
					<button className="toolbar_item" onClick={ toolHeading }><i className="fas fa-heading" /></button>
					<button className="toolbar_item" onClick={ toolBold }><i className="fas fa-bold" /></button>
					<button className="toolbar_item" onClick={ toolItalic }><i className="fas fa-italic" /></button>
					<button className="toolbar_item" onClick={ toolUnderLine }><i className="fas fa-underline" /></button>
					<button className="toolbar_item" onClick={ toolCut }><i className="fas fa-cut" /></button>
					<button className="toolbar_item" onClick={ toolUndo }><i className="fas fa-undo" /></button>
					<button className="toolbar_item" onClick={ toolRedo }><i className="fas fa-redo" /></button>
					<button className="toolbar_item" onClick={ toolStrike }><i className="fas fa-strikethrough" /></button>
					<button className="toolbar_item" onClick={ toolDelete }><i className="fas fa-trash-alt" /></button>
					<button className="toolbar_item" onClick={ toolSelectAll }><i className="fas fa-scribd" /></button>
					<button className="toolbar_item" onClick={ toolCenter }><i className="fas fa-align-center" /></button>
					<button className="toolbar_item" onClick={ toolLeft }><i className="fas fa-align-left" /></button>
					<button className="toolbar_item" onClick={ toolRight }><i className="fas fa-align-right" /></button>
					<button className="toolbar_item" onClick={ toolLink }><i className="fas fa-link" /></button>
					<button className="toolbar_item" onClick={ toolColor }><i className="fas fa-palette" /></button>
					<button className="toolbar_item" onClick={ toolCode }><i className="fas fa-code" /></button>
					<label className="toolbar_item"><i className="fas fa-image" /><input className="toolbar_item" type="file" accept="image/*" id="file" onChange={ e => toolImage(e.target.files) } /></label>
				</div>

				<div id="editor" className={ styles.editor } contentEditable />

				<button className="get_html" onClick={ getHtml }>HTML</button>
				<button className="get_text" onClick={ getText }>TEXT</button>
				<button className="get_json" onClick={ getText }>JSON</button>
				<button className="change_css" onClick={ changeCss }>CSS</button>

				<div id="output" contentEditable></div>
			</div>
		</Layout>
	)
}

export default CreatePage;