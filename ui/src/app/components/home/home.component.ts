import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_BASE_URL: any;

  constructor(private appConfigService: AppConfigService) {
    this.API_BASE_URL = this.appConfigService.getProperty('API_BASE_URL');
  }

  ngOnInit(): void {}
}
