import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/common/interfaces/items'
import { ItemService } from 'src/app/common/services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
itemList:Items[];
  apiurl="http://127.0.0.1:8000/";

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getAll().subscribe(items=>this.itemList=items);
  }

  
}
