import { Component, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.less']
})
export class VideoDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {
    this.videoList = dashboardService.filteredVideos;
  }

  videoList: Observable<Video[]> | undefined;
  selectedVideo: Video | undefined;

  ngOnInit(): void {
  }

  setSelectedVideo(video: Video): void {
    this.selectedVideo = video;
  }
}
