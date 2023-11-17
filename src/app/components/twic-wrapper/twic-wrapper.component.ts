import { Component, Input, OnInit } from '@angular/core';


const GITHUB_REPO_NAME = `TwicPics/components-demo-angular`;
const GITHUB = `https://github.com/${GITHUB_REPO_NAME}`;
@Component({
    selector: 'TwicWrapper',
    templateUrl: './twic-wrapper.component.html',
    styleUrls: ['./twic-wrapper.component.scss'],
    standalone: true
})


export class TwicWrapperComponent implements OnInit {

  @Input() filename?: string;

  DOCUMENTATION_URL = `https://www.twicpics.com/docs/components/angular?utm_source=github&utm_medium=organic&utm_campaign=components#angular`;
  FRAMEWORK_LOGO = `https://assets.twicpics.com/demo/@twicpics-components/logos/angular.svg`;
  GIHUB_LOGO = `assets/github-mark-white.svg`;
  STACKBLITZ_LOGO = `assets/stackblitz.svg`;


  initialPath?: string;
  onLineUrl = ``;
  gitHubUrl = ``;

  constructor() { }

  ngOnInit(): void {
    this.gitHubUrl = this.filename ? `${GITHUB}/blob/main/${this.filename}` : GITHUB;
    this.onLineUrl = `https://stackblitz.com/github/${GITHUB_REPO_NAME}?file=${this.filename || "README.md"}`;
    if (this.filename) {
      const test = /twic-(.*)\//.exec(this.filename);
      if (test) {
        const [_, initialPath] = test;
        this.onLineUrl = `${this.onLineUrl}&initialpath=${initialPath}`;
      }
    }
  }
}
