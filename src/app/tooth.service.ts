import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tooth } from './tooth.model';




@Injectable({
  providedIn: 'root'
})

export class ToothService {
  selectedTooth = new Subject<Tooth>()
  toothselecteditems = new Subject<Tooth[]>()
  constructor() { }
}
