import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
