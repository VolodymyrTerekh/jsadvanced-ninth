import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { ResultService } from '../ck-result/result.service';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.css']
})

@Injectable()

export class CkEditorComponent implements OnInit {

  textVal = '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate nunc et metus iaculis placerat. Quisque facilisis eros vitae est laoreet rhoncus. Aliquam ultricies vehicula sapien, sed tincidunt magna ultricies ac. Maecenas tempus quam vitae enim imperdiet, maximus ullamcorper justo convallis. Vestibulum vel libero vulputate, accumsan nisi ut, cursus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla quis odio eleifend, feugiat lorem a, ultricies leo. Nullam nec commodo nulla. Curabitur euismod mauris est, at efficitur elit suscipit nec. Mauris rhoncus condimentum rhoncus. Nam nec odio ex. In hac habitasse platea dictumst. Nunc vitae arcu id lacus fringilla egestas. Proin est nulla, rutrum at sem ac, aliquet ornare ex.\n' +
    '    Maecenas a lectus eu augue dictum cursus. Suspendisse ut elit quis magna rhoncus dictum sit amet non urna. Duis convallis urna diam, a facilisis risus dictum condimentum. Praesent faucibus erat vitae varius pharetra. Vivamus maximus suscipit sollicitudin. Sed volutpat rhoncus suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ac dolor vestibulum, vehicula lacus ac, congue ipsum. Nam felis purus, gravida eget augue et, pharetra lobortis risus. Donec quis diam ut dui ultricies fermentum. Praesent tristique ullamcorper dui venenatis luctus. Praesent eu velit efficitur purus luctus sagittis. Suspendisse auctor lectus nulla, eu congue tortor tempus id.';

  @Input() private cell_width: number;
  @Input() private cell_height: number;
  @Input() private border_width: number;
  @Input() private border_type: string;
  @Input() private border_color: string;

  @Input() Bold = false;
  @Input() Italic = false;
  FontSize: number;
  FontFamily: string;

  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
  }
  setBold($event) {
    this.Bold = $event;
  }
  setItalic($event) {
    this.Italic = $event;
  }
  receiveText($event) {
    this.textVal = $event;
  }
  someGeterSize() {
    return this.FontSize;
  }

  radioEvent(event) {
    this.FontSize = event;
  }

  setFontFam() {
    return this.FontFamily;
  }
  selectEvent(event){
    this.FontFamily = event;
  }
  getText(){
    return document.getElementById('textValue').innerHTML = this.textVal;
  }

}
