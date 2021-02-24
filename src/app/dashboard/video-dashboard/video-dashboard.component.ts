import { Component, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.less']
})
export class VideoDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  videoList: Video[];
  selectedVideo: Video;

  ngOnInit(): void {
    this.dashboardService.videoList
      .subscribe(resp => {
        this.videoList = resp;
      });
  }

  setSelectedVideo(video: Video): void {
    this.selectedVideo = video;
  }
}
