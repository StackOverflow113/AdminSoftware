import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {

  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {

    this.settingService.currentTheme();
  }

  changeTheme(theme: string) {

    this.settingService.changeTheme(theme);

  }
}
