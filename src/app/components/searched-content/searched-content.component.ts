import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/common/interfaces/items';

@Component({
  selector: 'app-searched-content',
  templateUrl: './searched-content.component.html',
  styleUrls: ['./searched-content.component.css']
})
export class SearchedContentComponent implements OnInit {
  itemList:Items[]=null;
  constructor() { }

  ngOnInit(): void {

  }

}
