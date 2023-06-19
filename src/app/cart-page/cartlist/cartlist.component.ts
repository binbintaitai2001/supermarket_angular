import { Component, Input, OnInit } from '@angular/core';
import { Cartitem } from 'src/app/Entity/cartitem';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() cartitemlist: Cartitem[];


}
