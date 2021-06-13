import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-element',
  templateUrl: './body-element.component.html',
  styleUrls: ['./body-element.component.scss']
})
export class BodyElementComponent implements OnInit {

  occlusal : any[] = [{name: 'none'}, {name: 'light'}, {name: 'medium'}, {name: 'dark'}]
  embrasures: any[] = [{name: 'open'}, {name: 'close'}]
  buccal: any[] = [{name: 'No metal showing 360deg'}, {name: 'Metal-margin on buccal'}, {name: 'Porcelain butt margin'}]
  selectedOcclusal: string = ""
  selectedEmbrasures: string = ""
  selectedBuccal: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
