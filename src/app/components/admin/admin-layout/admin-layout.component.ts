import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  dashboardActivate: boolean = false;
  eventActive: boolean = false;
  collaborationActive: boolean = false;
  galleryActive: boolean = false;
  userWeightActive: boolean = false;
  recipeActive: boolean = false;
  userActive: boolean = false;
  operationClaimActive: boolean = false;
  userOperationClaimActive: boolean = false;
  userHeightActive: boolean = false;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    let currentComponent = this.router.url.split('/')[2];
    if (currentComponent !== undefined) {
      this.setAndRemoveActive(currentComponent);
    } else {
      this.setAndRemoveActive("");
    }
  }

  checkActive(menuActive: boolean): string {
    return menuActive ? "active" : "";
  }

  setAndRemoveActive(menuName: string) {

    this.dashboardActivate = false;
    this.eventActive = false;
    this.collaborationActive = false;
    this.galleryActive = false;
    this.userWeightActive = false;
    this.recipeActive = false;
    this.userActive = false;
    this.userOperationClaimActive = false;
    this.operationClaimActive = false;
    this.userHeightActive = false;


    switch (menuName) {
      case '':
        this.dashboardActivate = true;
        break;
      case 'events':
        this.eventActive = true;
        break;
      case 'collaborations':
        this.collaborationActive = true;
        break;
      case 'userheights':
        this.userHeightActive = true;
        break;
      case 'galleries':
        this.galleryActive = true;
        break;
      case 'users':
        this.userActive = true;
        break;
      case 'operationclaims':
        this.operationClaimActive = true;
        break;
      case 'useroperationclaims':
        this.userOperationClaimActive = true;
        break;
      case 'userweights':
        this.userWeightActive = true;
        break;
      case 'recipes':
        this.recipeActive = true;
        break;

      default:
        break;
    }
  }

}
