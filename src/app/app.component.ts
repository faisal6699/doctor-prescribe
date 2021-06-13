import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// interface Gender {
//     name: string,
    
// }
export class AppComponent implements OnInit {

  
  gender: any[] = [{name: 'male'}, {name: 'female'}, {name: 'other'}];

  selectedGender = "";
//   constructor() { this.gender = [
//     {name: 'Male'},
//     {name: 'Female'},
//     {name: 'Other'},
    
// ]; }
  ngOnInit() {
  
  }

  title = 'dental-prescibe';
  name = ""
  age :number = 0


}
