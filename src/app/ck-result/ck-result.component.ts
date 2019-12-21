import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormGroup, FormControl, ReactiveFormsModule, NgForm, FormsModule } from '@angular/forms';
import { FONTSTYPE, SIZES } from '../modelObject';
import { ResultService } from './result.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sizes } from '../model';
import { CheckboxItem } from './CheckboxItem';
import { hasClassName } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-ck-result',
  templateUrl: './ck-result.component.html',
  styleUrls: ['./ck-result.component.css']
})

export class CkResultComponent implements OnInit {

  dom: string;
  @Input() beginValue;
  @Output() textEvent: EventEmitter<any> = new EventEmitter<any>();
  public border_color: string;
  public isBold: boolean;
  public isItalic: boolean;
  public size12 = 12;
  public size14 = 14;
  public size16 = 16;
  public size18 = 18;
  public size20 = 20;
  public Roboto = 'Roboto';
  public Arial = 'Arial Black';
  public Calibri = 'Cambria';
  public Cambria = 'Calibri';
  public Segoe = 'Segoe UI Black';
  @Output() fontEvent = new EventEmitter<boolean>();
  @Output() fontEvent1 = new EventEmitter<boolean>();
  @Output() radioEvent = new EventEmitter<number>();
  @Output() selectEvent: EventEmitter<string> = new EventEmitter<string>();

  /*Checkbox*/
  constructor(
    private resultService: ResultService,
    private modalService: NgbModal
  ) {

  }

  /*colors group*/
  darkred = 'darkred';
  red = 'red';
  orange = 'orangered';
  yellow = 'yellow';
  darkgreen = 'darkgreen';
  green = 'green';
  blue = 'deepskyblue';
  darkblue = 'blue';
  violet = 'blueviolet';
  white = 'white';
  black = 'black';
  brown = 'brown';
  darkbrown = 'saddlebrown';
  gray = 'gray';
  lightgray = 'lightgray';
  darkgray = 'darkgray';
  ngOnInit() {}

  changeText(value: string) {
    this.textEvent.emit(value);
  }

  openBackgroundsContent(content) {
    this.modalService.open(content, { backdropClass: 'modal-bkg' });
  }

  openColorsContent(content) {
    this.modalService.open(content, { backdropClass: 'modal-bkg' });
  }
  openHtmlContent(content) {
    this.modalService.open(content, { backdropClass: 'modal-bkg' });
  }

  fontColor(color) {
    const editor = document.getElementById('textValue');
    switch (color) {
      case 'darkred':
        editor.style.color = this.darkred;
        break;
      case 'red':
        editor.style.color = this.red;
        break;
      case 'orange':
        editor.style.color = this.orange;
        break;
      case 'yellow':
        editor.style.color = this.yellow;
        break;
      case 'darkgreen':
        editor.style.color = this.darkgreen;
        break;
      case 'green':
        editor.style.color = this.green;
        break;
      case 'blue':
        editor.style.color = this.darkblue;
        break;
      case 'darkblue':
        editor.style.color = this.blue;
        break;
      case 'violet':
        editor.style.color = this.violet;
        break;
      case 'white':
        editor.style.color = this.white;
        break;
      case 'black':
        editor.style.color = this.black;
        break;
      case 'brown':
        editor.style.color = this.brown;
        break;
      case 'darkbrown':
        editor.style.color = this.darkbrown;
        break;
      case 'gray':
        editor.style.color = this.gray;
        break;
      case 'lightgray':
        editor.style.color = this.lightgray;
        break;
      case 'darkgray':
        editor.style.color = this.darkgray;
        break;
      default:
        editor.style.color = this.black;
    }
  }

  bkgColor(color) {
    const editor = document.getElementById('textValue');
    switch (color) {
      case 'darkred':
        editor.style.background = this.darkred;
        break;
      case 'red':
        editor.style.background = this.red;
        break;
      case 'orange':
        editor.style.background = this.orange;
        break;
      case 'yellow':
        editor.style.background = this.yellow;
        break;
      case 'darkgreen':
        editor.style.background = this.darkgreen;
        break;
      case 'green':
        editor.style.background = this.green;
        break;
      case 'blue':
        editor.style.background = this.darkblue;
        break;
      case 'darkblue':
        editor.style.background = this.blue;
        break;
      case 'violet':
        editor.style.background = this.violet;
        break;
      case 'white':
        editor.style.background = this.white;
        break;
      case 'black':
        editor.style.background = this.black;
        break;
      case 'brown':
        editor.style.background = this.brown;
        break;
      case 'darkbrown':
        editor.style.background = this.darkbrown;
        break;
      case 'gray':
        editor.style.background = this.gray;
        break;
      case 'lightgray':
        editor.style.background = this.lightgray;
        break;
      case 'darkgray':
        editor.style.background = this.darkgray;
        break;
      default:
        editor.style.background = this.black;
    }
  }



  setBold(chkb: any) {
    this.fontEvent.emit(this.isBold);
  }
  setItalic(chkb: boolean) {
    this.fontEvent1.emit(this.isItalic);
  }

  setSize(size) {
    this.radioEvent.emit(size);
  }

  setFontFam(fontName) {
    this.selectEvent.emit(fontName);
  }
  changeBkgColor(coll, color){
    for(var i=0, len=coll.length; i<len; i++)
    {
      coll[i].style["background-color"] = color;
    }
  }
  createTable(countRow: number,countCol: number, cellWidth: number,cellHeight: number, borderWidth: string,borderType: string,borderColor: string) {
    let table = document.querySelector('table');
    let row = document.getElementsByClassName('tab-row');
    let borderStyle = borderWidth + 'px ' + borderColor  + ' ' +   borderType;
    var html = "<table class='my-table' style='border: " + borderStyle + ";'" + "><tbody>";
    for (var i = 0; i < countRow; i++) {
      html += "<tr class='tab_row'>";
      for (var j = 0; j < countCol; j++) {
        html += "<td class='tab_col' style=' border:" + borderStyle + ";'>" + "cell " + [i] + " | " + [j] +"</td>";
      }
      html += "</tr>"
    }
    html += "</tbody></table>";
    var result = document.querySelector('textarea');
    result.innerHTML += html;

  }

  createList(countList: string,typeOfMark: string, listType: string) {
    // Make a container element for the list
    var list = "<" + typeOfMark +">";
    for (let i = 0; i < parseInt(countList); i++) {
      list += "<li style='list-style-type:" +  listType + ";'>" + "newListItem"  + i + "</li>";
    }
    list += "</" + typeOfMark  +">";
    // @ts-ignore
    document.querySelector('textarea').innerHTML += list;
    // result.innerHTML += list;
  }


}
