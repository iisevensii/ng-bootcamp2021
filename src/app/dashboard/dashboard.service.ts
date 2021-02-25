import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Video } from './dashboard.types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  statFiltersForm: FormGroup;
  videoList: Observable<Video[]>;

  constructor(private http: HttpClient, formBuilder: FormBuilder) {
    // Load Videos from API
    this.videoList = http.get<Video[]>(apiUrl + '/videos')
      .pipe(map(resp => resp));

    // Validation rules for stat filters component
    this.statFiltersForm = formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
}
