import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  occlusal : any[] = [{name: 'none'}, {name: 'light'}, {name: 'medium'}, {name: 'dark'}]
  embrasures: any[] = [{name: 'open'}, {name: 'close'}]
  removables: any[] = [{name: 'Upper'}, {name: 'Lower'}, {name: 'Unilateral'}, {name: 'Finish'}, {name: 'Try-in'}, {name: 'Bite Block'}]
  buccal: any[] = [{name: 'No metal showing 360deg'}, {name: 'Metal-margin on buccal'}, {name: 'Porcelain butt margin'}]
  selectedOcclusal: string = ""
  selectedEmbrasures: string = ""
  selectedBuccal: string = ""
  selectedRemovables: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
