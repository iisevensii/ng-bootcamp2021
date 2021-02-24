import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Video } from './dashboard.types';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable()
export class DashboardService {
  videoList: Observable<Video[]>;

  constructor(private http: HttpClient) {
    this.videoList = http.get<Video[]>(apiUrl + '/videos')
      .pipe(map(resp => resp));
  }
}
