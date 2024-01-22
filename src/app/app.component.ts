import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private _themeService: ThemeService) {
  }

  ngOnInit (): void
  {
    this._themeService.initializeSettings();
  }
}