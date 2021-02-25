import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent implements OnInit {

  @Input() video: Observable<Video> | undefined;

  constructor(route: ActivatedRoute, dashboardService: DashboardService) {
    route.queryParams.pipe().subscribe(params => {
       this.video = dashboardService.getById(params.id);
    });

    route.queryParams.subscribe(x => {
      console.log(x);
    });
  }

  ngOnInit(): void {
  }

}
