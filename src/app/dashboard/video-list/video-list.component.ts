import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  @Input() videoList: Video[];
  selectedVideo: Video;

  ngOnInit(): void {
  }

  videoSelected(video: Video): void {
    this.selectedVideo = video;
  }
}
