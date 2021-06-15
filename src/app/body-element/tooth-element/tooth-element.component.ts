import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tooth-element',
  templateUrl: './tooth-element.component.html',
  styleUrls: ['./tooth-element.component.scss']
})
export class ToothElementComponent implements OnInit {

  adult_tooth: any[] = [1,2,3,4,5,6,7,8]
  baby_tooth: any[] = [1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}
