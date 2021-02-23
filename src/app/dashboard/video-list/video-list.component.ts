import { Component, OnInit } from '@angular/core';
import {default as myVideos} from './videoManagerData.json';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  selectedVideo: Video;
  videoList: Video[] = myVideos;

  ngOnInit(): void {
  }

  videoSelected(video: Video): void {
    this.selectedVideo = video;
  }
}
