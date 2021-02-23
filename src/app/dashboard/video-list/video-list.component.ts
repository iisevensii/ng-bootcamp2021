import { Component, OnInit } from '@angular/core';
import {default as myVideos} from './videoManagerData.json';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  videoList = myVideos;

  ngOnInit(): void {
  }

}
