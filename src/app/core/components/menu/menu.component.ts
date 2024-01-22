import { Component } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent {

  constructor(private _themeService: ThemeService) {
    super()
  }

  override ngOnInit (): void
  {    
  }

  protected toggleDarkTheme() {
    this._themeService.toggleDarkTheme();
  }

}