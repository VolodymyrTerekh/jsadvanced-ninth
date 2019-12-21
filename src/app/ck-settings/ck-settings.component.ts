import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ResultService } from '../ck-result/result.service';

@Component({
  selector: 'app-ck-settings',
  templateUrl: './ck-settings.component.html',
  styleUrls: ['./ck-settings.component.css']
})

export class CkSettingsComponent implements OnInit {
  constructor(private resultService: ResultService) { }


  value: string;
  @Input() isBold = false;
  @Input() isItalic = false;
  @Output() sendEvent = new EventEmitter<string>();
  public isCollapsed = true;
  public show = false;
  public show1 = false;


  ngOnInit() {
  }
  showEdit() {
    this.resultService.showEditBlock();
  }
  showStyle() {
    this.resultService.showStyleBlock();
  }

}
