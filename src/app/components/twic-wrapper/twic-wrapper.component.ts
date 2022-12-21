import { Component, Input, OnInit } from '@angular/core';

const ONLINE_URL = `https://stackblitz.com/edit/github-wpprt7?file=`;
const GITHUB = `https://github.com/TwicPics/components-demo-vue3`;

@Component({
  selector: 'TwicWrapper',
  templateUrl: './twic-wrapper.component.html',
  styleUrls: ['./twic-wrapper.component.scss']
})

export class TwicWrapperComponent implements OnInit {

  @Input() gitHubUrl?: string;

  DOCUMENTATION_URL = `https://www.twicpics.com/docs/components/angular?utm_source=github&utm_medium=organic&utm_campaign=components#angular`;
  FRAMEWORK_LOGO = `https://assets.twicpics.com/demo/@twicpics-components/logos/angular.svg`;
  GIHUB_LOGO = `assets/github-mark-white.svg`;
  STACKBLITZ_LOGO = `assets/stackblitz.svg`;

  onLineUrl = ``;
  gitHubRedirect = ``;

  constructor() { }

  ngOnInit(): void {
    this.onLineUrl = `${ONLINE_URL}${this.gitHubUrl || "README.md"}`;
    this.gitHubRedirect = this.gitHubUrl
      ? `${GITHUB}/blob/main/${this.gitHubUrl}`
      : GITHUB;
  }
}
