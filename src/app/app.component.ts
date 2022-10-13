import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'onboarding-exp';
  constructor(public _LoaderService: LoaderService) {}

  ngOnInit(): void {
  }
}


