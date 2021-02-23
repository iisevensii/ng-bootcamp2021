import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { }

  @Input() video: Video;
  ngOnInit(): void {
  }

}
