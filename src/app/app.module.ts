import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CollaborationComponent } from './components/admin/collaboration/collaboration.component';
import { EventComponent } from './components/admin/event/event.component';
import { GalleryComponent } from './components/admin/gallery/gallery.component';
import { HeightComponent } from './components/admin/height/height.component';
import { OperationClaimComponent } from './components/admin/operation-claim/operation-claim.component';
import { RecipeComponent } from './components/admin/recipe/recipe.component';
import { UserComponent } from './components/admin/user/user.component';
import { UserOperationClaimComponent } from './components/admin/user-operation-claim/user-operation-claim.component';
import { UserHeightComponent } from './components/admin/user-height/user-height.component';
import { UserWeightComponent } from './components/admin/user-weight/user-weight.component';
import { WeightComponent } from './components/admin/weight/weight.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    CollaborationComponent,
    EventComponent,
    GalleryComponent,
    HeightComponent,
    OperationClaimComponent,
    RecipeComponent,
    UserComponent,
    UserOperationClaimComponent,
    UserHeightComponent,
    UserWeightComponent,
    WeightComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
