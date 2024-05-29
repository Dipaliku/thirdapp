import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedframework: string="node js"
  constructor() { }

  ngOnInit(): void {
  }
  ontabclick(val:string){
    this.selectedframework=val
  }

}
