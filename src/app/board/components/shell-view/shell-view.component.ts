import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-shell-view',
  templateUrl: './shell-view.component.html',
  styleUrls: ['./shell-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellViewComponent implements OnInit {
  @Input() shellId = '';
  constructor() { }

  ngOnInit(): void {
  }

}
