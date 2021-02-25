import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';
import { ActivatedRoute } from '@angular/router';
import { map, share, switchMap } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.less']
})
export class SingleVideoComponent implements OnInit {

  constructor() {}

  @Input() video: Video | undefined;
  @Input() selected: boolean | undefined;

  ngOnInit(): void {
  }

}
