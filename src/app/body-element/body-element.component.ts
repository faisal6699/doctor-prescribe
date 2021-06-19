import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ToothService } from '../tooth.service';

@Component({
  selector: 'app-body-element',
  templateUrl: './body-element.component.html',
  styleUrls: ['./body-element.component.scss']
})
export class BodyElementComponent implements OnInit {

  active: number
  toothItems: any[] = []
  private el: ElementRef
 
  // tooth_marked: number
  constructor(private toothService: ToothService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.toothService.toothselecteditems.subscribe(items =>{
      this.toothItems = items
    })

    if(this.toothItems.length > 0){
      this.active = this.toothItems[this.toothItems.length -1]
    }

    
    console.log(this.el)
    // this.toothService.selectedTooth.subscribe(element => {
    //   console.log(element)
    //   this.tooth_marked = element.tooth_number
    // })
  }

  changeItem(event: Event){
    console.log(event)

    // this.renderer.addClass(event.target, 'p-shadow-2')
  }



  

}
