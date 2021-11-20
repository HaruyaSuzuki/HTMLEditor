// Next.js
import type { NextPage } from 'next';
import { useState } from 'react';

// Original
import Layout from '../components/layout';
import styles from '../styles/style.module.css';

const CreatePage: NextPage = () => {
	const [isFlag, setFlag] = useState(false);

	const toolHeading = () => {
		let selectedText = window.getSelection();
		var range = selectedText.getRangeAt(0);
		const node = document.createElement('h1');
		node.innerHTML = selectedText.toString();
		range.deleteContents();
  		range.insertNode(node);
	}
	const toolBold = () => document.execCommand('bold', false, '');
	const toolItalic = () => document.execCommand('italic', false, '');
	const toolUnderLine = () => document.execCommand('underline', false, '');
	const toolCut = () => document.execCommand('cut',false,'');
	const toolUndo = () => document.execCommand('undo',false,'');
	const toolRedo = () => document.execCommand('redo',false,'');
	const toolStrike = () => document.execCommand('strikeThrough',false,'');
	const toolDelete = () => document.execCommand('delete',false,'');
	const toolSelectAll = () => document.execCommand('selectAll',false,'');
	const toolCenter = () => document.execCommand('justifyCenter',false,'');
	const toolLeft = () => document.execCommand('justifyLeft',false,'');
	const toolRight = () => document.execCommand('justifyRight',false,'');

	const toolLink = () => {
		const url = prompt("Enter the URL");
  		document.execCommand("createLink", false, url);
	}
	const toolColor = () => {
		const color = prompt("Enter your color in hex ex:#f1f233");
  		document.execCommand("foreColor", false, color);
	}
	const toolCode = () => {
		const editor = document.getElementById('editor');
		if (isFlag === true) {
			editor.innerHTML = editor.textContent;
			setFlag(false);
		}
		else {
			editor.textContent = editor.innerHTML;
			setFlag(true);
		}
	}
	const toolImage = () => {
		var file = document.querySelector("input[type=file]").files[0];
		var reader = new FileReader();
		let dataURI;
		const editor = document.getElementById('editor');

		reader.addEventListener(
			"load",
			function() {
				dataURI = reader.result;

				const img = document.createElement("img");
				img.src = dataURI;
				editor.appendChild(img);
			},
			false
		);
		if (file) {
			reader.readAsDataURL(file);
		}
	}

	const getHtml = () => {
		const editor = document.getElementById('editor');
		const output = document.getElementById('output');
		const editor_content = editor.innerHTML;
		output.style.display = "block";
		output.textContent = editor_content;
	};
	const getText = () => {
		const editor = document.getElementById('editor');
		const output = document.getElementById('output');
		const editor_content = editor.textContent;
		output.style.display = "block";
		output.textContent = editor_content;
	};
	const changeCss = () => {
		const style = prompt("Enter your color in hex ex:#editor h1 { font-size: 3rem; }");
		document.styleSheets[1].insertRule(style, 0);
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
				<label className="toolbar_item"><i className="fas fa-image" /><input className="toolbar_item" type="file" accept="image/*" id="file" onChange={ toolImage } /></label>
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