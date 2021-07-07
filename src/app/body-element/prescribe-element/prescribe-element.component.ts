import { Component, Input, OnInit } from '@angular/core';
import { ToothProblemService } from 'src/app/tooth-problem.service';

@Component({
  selector: 'app-prescribe-element',
  templateUrl: './prescribe-element.component.html',
  styleUrls: ['./prescribe-element.component.scss']
})
export class PrescribeElementComponent implements OnInit {

  @Input() prescribe_no: number

  showContent: boolean = false
  showHistory: boolean = false
  showFindings: boolean = false
  showInvestigation: boolean = false
  showMedication: boolean = false
  showAdvice: boolean = false
  showFollowUp: boolean = false
  showReferral: boolean = false


  toothComplains: any[]
  
  constructor(private toothProblemService: ToothProblemService) { }

  ngOnInit(): void {
    this.toothProblemService.toothComplains.subscribe(val =>{
      this.toothComplains = val
      console.log(this.toothComplains)
    })

    

  }

  handleContent(){
    this.showContent = !this.showContent
  }

  handleHistory(){
    this.showHistory = !this.showHistory
  }

  handleFindings(){
    this.showFindings = !this.showFindings
  }

  handleInvestigation(){
    this.showInvestigation = !this.showInvestigation
  }

  handleMedication(){
    this.showMedication = !this.showMedication
  }

  handleAdvice(){
    this.showAdvice = !this.showAdvice
  }
  handleFollowUp(){
    this.showFollowUp = !this.showFollowUp
  }
  handleReferral(){
    this.showReferral = !this.showReferral
  }
}
