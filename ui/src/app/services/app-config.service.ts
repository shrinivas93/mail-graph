import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadProperties(): Promise<any> {
    return this.http
      .get('assets/config/properties.json')
      .toPromise()
      .then(data => {
        this.loadProfileProperties(data['ACTIVE_PROFILE']);
      });
  }

  loadProfileProperties(activeProfile: string): Promise<any> {
    return this.http
      .get(`assets/config/properties.${activeProfile}.json`)
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  getProperty(key: string) {
    return this.config[key];
  }
}
