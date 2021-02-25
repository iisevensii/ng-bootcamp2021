import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

const URLPREFIX = 'https://www.youtube.com/embed/';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.less']
})
export class VideoContainerComponent implements OnInit {
  // Using an input setter is much more concise than
  // the use of ngOnChanges
  @Input() set currentVideo(value: Video | undefined) {
    if (value) {
      // iframe src attributes are a potential
      // source of attack. Tell Angular we have vetted the URL as
      // safe to use. (You would normally check the URL before passing it
      // on )
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        URLPREFIX + '/' + value.id
      );
    }
  }

  videoId: string | undefined;
  videoUrl: SafeUrl | undefined;

  constructor(route: ActivatedRoute, private domSanitizer: DomSanitizer) {
    route.queryParams.pipe().subscribe(params => {
      if (params.id) {
        this.videoId = params.id;
        this.videoUrl =  this.domSanitizer.bypassSecurityTrustResourceUrl(URLPREFIX + '/' + this.videoId);}
    });
  }

  ngOnInit(): void {
  }

}
