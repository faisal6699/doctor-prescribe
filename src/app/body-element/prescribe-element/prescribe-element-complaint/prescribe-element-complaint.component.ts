import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToothProblemService } from 'src/app/tooth-problem.service';




@Component({
  selector: 'app-prescribe-element-complaint',
  templateUrl: './prescribe-element-complaint.component.html',
  styleUrls: ['./prescribe-element-complaint.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrescribeElementComplaintComponent implements OnInit {

  // complainName: string
  products: any[] = []
  dataForm: FormGroup
  duration: any[] = [{name: 'days'}, {name: 'weeks'}, {name: 'months'}, {name: 'years'}]
  time: any[] = [{name: 1}, {name: 2}, {name: 5}]
  problem: string = ""


  constructor( private toothProblemService: ToothProblemService) { }

  ngOnInit(): void {
      this.dataForm = new FormGroup({
        'complainName': new FormControl(null, Validators.required),
        'problems': new FormArray([])
      })
  }

  get controls(){
    return (this.dataForm.get('problems') as FormArray).controls
  }

  addNewComplain(){

    console.log(this.dataForm.get('complainName').value)

    this.dataForm.get('problems').valueChanges.subscribe(val =>{
      this.toothProblemService.toothComplains.next(val)
    })
    
      // this.products = [...this.products, this.dataForm.get('complainName').value]
      const control = new FormGroup({
        'name': new FormControl(this.dataForm.get('complainName').value, Validators.required),
        'for': new FormControl(null, Validators.required),
        'duration': new FormControl(null, Validators.required),
        'note': new FormControl(null, Validators.required),

      });
      (<FormArray>this.dataForm.get('problems')).push(control);
      this.products.push(this.dataForm.get('complainName').value)
      
      this.dataForm.get('complainName').reset()
    
    // 
  }

  

  

  onSubmit(){
    console.log(this.dataForm.value)
  }

}
