import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.scss']
})
export class BtnMenuComponent implements OnInit {
@Input() description: string;
@Input() active = false;

@Output() click = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  }


}
