import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-tooth',
  templateUrl: './selected-tooth.component.html',
  styleUrls: ['./selected-tooth.component.scss']
})
export class SelectedToothComponent implements OnInit {

  prbType: any[] = [{name: 'Fixed restorations'}, {name: 'Removable restorations'}, {name: 'Both restorations'}, {name: 'Others'}]
  selectedPrb: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
