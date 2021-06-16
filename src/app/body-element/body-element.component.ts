import { Component, OnInit } from '@angular/core';
import { ToothService } from '../tooth.service';

@Component({
  selector: 'app-body-element',
  templateUrl: './body-element.component.html',
  styleUrls: ['./body-element.component.scss']
})
export class BodyElementComponent implements OnInit {

  active: number
  toothItems: any[] = []
  // tooth_marked: number
  constructor(private toothService: ToothService) { }

  ngOnInit(): void {
    this.toothService.toothselecteditems.subscribe(items =>{
      this.toothItems = items
    })

    if(this.toothItems.length > 0){
      this.active = this.toothItems[this.toothItems.length -1]
    }

    

    // this.toothService.selectedTooth.subscribe(element => {
    //   console.log(element)
    //   this.tooth_marked = element.tooth_number
    // })
  }

}
