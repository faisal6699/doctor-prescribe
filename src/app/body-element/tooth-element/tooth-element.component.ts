import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tooth } from 'src/app/tooth.model';
import  { ToothService } from 'src/app/tooth.service';


@Component({
  selector: 'app-tooth-element',
  templateUrl: './tooth-element.component.html',
  styleUrls: ['./tooth-element.component.scss']
})
export class ToothElementComponent implements OnInit {
  // @ViewChild('refEl', {static: true}) refEl: ElementRef;

  adult_tooth_upper_left: any[] = [11,12,13,14,15,16,17,18]
  adult_tooth_upper_right: any[] = [21,22,23,24,25,26,27,28]
  adult_tooth_lower_left: any[] = [31,32,33,34,35,36,37,38]
  adult_tooth_lower_right: any[] = [41,42,43,44,45,46,47,48]
  baby_tooth: any[] = [1,2,3,4,5]
  selected_items: Tooth[] = []
  tooths: any[] = []
  
  constructor(private toothService: ToothService) { }
  
  ngOnInit(): void {
    if(this.selected_items){

    }
  }

  
  tooth_selection(tooth_number: number, tooth_side: string, el: ElementRef){
    console.log(tooth_number, tooth_side, el)
    this.tooths.push(tooth_number)
    
    this.toothService.selectedTooth.next({tooth_number, tooth_side})
    this.selected_items = [...this.selected_items, {tooth_number, tooth_side}]
    this.toothService.toothselecteditems.next(this.selected_items)


  }

}
