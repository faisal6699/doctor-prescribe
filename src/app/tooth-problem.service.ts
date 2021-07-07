import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToothProblemService {

  toothComplains = new Subject<any[]>()
  constructor() { }
}
