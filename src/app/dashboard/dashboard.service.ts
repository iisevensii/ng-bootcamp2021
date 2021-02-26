import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';
import { combineLatest, Observable, Subject } from 'rxjs';
import { FilterCriteria, Video } from './dashboard.types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  filteredVideos: Observable<Video[]>;
  filter: Subject<any> = new Subject();

  constructor(private http: HttpClient, formBuilder: FormBuilder) {
    const filter = this.filter.pipe(startWith({title: '', author: ''}));
    this.filteredVideos = combineLatest([this.getVideos(), filter])
      .pipe(map(([list, criteria]) => filterVideos(list, criteria)));
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos');
  }

  getById(id: string): Observable<Video> {
    return this.http.get<Video>(apiUrl + '/videos/' + id)
      .pipe(map(resp => resp));
  }
}

function uppercaseAuthor(list: Video[]): Video[] {
  const newList = list.map(video => {
    const newVideo = { ...video, author: video.author.toUpperCase() };
    return newVideo;
  });

  return newList;
}

function filterVideos(list: Video[], criteria: FilterCriteria): Video[] {
  return list.filter(video => {
    return (!criteria.title || (video.title.toUpperCase().includes(criteria.title.toUpperCase())))
    && (!criteria.author || video.author.toUpperCase().includes(criteria.author.toUpperCase()));
  });
}
