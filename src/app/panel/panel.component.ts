import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() event;
  constructor() {}

  ngOnInit() {}

  openPopover(target: HTMLElement): void {
    $(target).popover({
      title: this.event.title,
      content: this.event.description
    });
    setInterval(() => $(target).popover('hide'), 10000);
  }
}
