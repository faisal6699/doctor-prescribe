import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-prescribe-element-complaint',
  templateUrl: './prescribe-element-complaint.component.html',
  styleUrls: ['./prescribe-element-complaint.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrescribeElementComplaintComponent implements OnInit {

  complainName: string
  products: any[]
  dataForm: FormGroup
  constructor() { }

  ngOnInit(): void {
      this.dataForm = new FormGroup({
        'complainName': new FormControl(null, Validators.required)
      })
  }

  addNewComplain(){

    console.log()
    this.products.push(this.dataForm.get('complainName').value)
  }

  onSubmit(){
    console.log(this.dataForm.value)
  }

}
