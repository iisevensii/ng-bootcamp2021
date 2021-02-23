import { Component, OnInit } from '@angular/core';
import {default as myVideos} from '../videoManagerData.json';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.less']
})
export class VideoDashboardComponent implements OnInit {

  constructor() { }

  videoList: Video[] = myVideos;
  selectedVideo: Video;

  ngOnInit(): void {
  }

  setSelectedVideo(video: Video): void {
    this.selectedVideo = video;
  }
}
