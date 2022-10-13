import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { defaultStepOptions, steps as defaultSteps } from './config'
@Component({
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements AfterViewInit {

  constructor(private readonly _shepherdService: ShepherdService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngAfterViewInit() {
    this._shepherdService.defaultStepOptions = defaultStepOptions;
    this._shepherdService.modal = true;

    this._shepherdService.addSteps(defaultSteps);
  }

  startTour() {
    this._shepherdService.start();
  }

}
