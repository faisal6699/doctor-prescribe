import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Tooth } from 'src/app/tooth.model';
import { ToothService } from 'src/app/tooth.service';




@Component({
  selector: 'app-selected-tooth',
  templateUrl: './selected-tooth.component.html',
  styleUrls: ['./selected-tooth.component.scss']
})
export class SelectedToothComponent implements OnInit {


  @Input()  values: number = 0
 

  selected_value: number 



  constructor(private toothService: ToothService) { }


  ngOnInit() {
  

    
  }

  // handleSelected(){
  //   this.toothMarked = this.values
  // }

  // ngOnDestroy(): void{
  //   this.toothSub.unsubscribe()
  // }

}
