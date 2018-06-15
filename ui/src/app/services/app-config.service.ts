import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadProperties(): Promise<any> {
    return new Promise<any>(resolve => {
      this.http.get('assets/config/properties.json').subscribe(properties => {
        this.loadProfileProperties(properties['ACTIVE_PROFILE']).subscribe(
          data => {
            this.config = data;
            resolve(true);
          }
        );
      });
    });
  }

  loadProfileProperties(activeProfile: string) {
    return this.http.get(`assets/config/properties.${activeProfile}.json`);
  }

  getProperty(key: string) {
    return this.config[key];
  }
}
