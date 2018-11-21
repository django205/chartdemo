import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
items=[1,2,3,4,5,567,34,34,56,45,12,67,78,54];
  constructor() { }

  ngOnInit() {
  }

}