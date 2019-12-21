import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CkResultComponent } from './ck-result.component';

@Injectable({
  providedIn: 'root'
})

export class ResultService {
  show = false;

  constructor() { }


  showStyleBlock() {
    this.show = false;
  }

  showEditBlock() {
    this.show = false;
  }

}
