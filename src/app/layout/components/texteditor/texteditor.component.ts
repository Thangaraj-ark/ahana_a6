import { Component, OnInit } from '@angular/core';
import './ckeditor.loader';
import 'ckeditor';

@Component({
	selector: 'app-texteditor',
	templateUrl: './texteditor.component.html',
	styleUrls: ['./texteditor.component.scss']
})
export class TexteditorComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

}
