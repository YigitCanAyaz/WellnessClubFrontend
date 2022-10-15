import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OperationClaimAddComponent } from './components/admin/operation-claim/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/admin/operation-claim/operation-claim-list/operation-claim-list.component';
import { OperationClaimRemoveComponent } from './components/admin/operation-claim/operation-claim-remove/operation-claim-remove.component';
import { OperationClaimUpdateComponent } from './components/admin/operation-claim/operation-claim-update/operation-claim-update.component';
import { OperationClaimViewComponent } from './components/admin/operation-claim/operation-claim-view/operation-claim-view.component';
import { UserAddComponent } from './components/admin/user/user-add/user-add.component';
import { UserListComponent } from './components/admin/user/user-list/user-list.component';
import { UserRemoveComponent } from './components/admin/user/user-remove/user-remove.component';
import { UserUpdateComponent } from './components/admin/user/user-update/user-update.component';
import { UserViewComponent } from './components/admin/user/user-view/user-view.component';
import { UserOperationClaimAddComponent } from './components/admin/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/admin/user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimRemoveComponent } from './components/admin/user-operation-claim/user-operation-claim-remove/user-operation-claim-remove.component';
import { UserOperationClaimUpdateComponent } from './components/admin/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimViewComponent } from './components/admin/user-operation-claim/user-operation-claim-view/user-operation-claim-view.component';
import { CollaborationAddComponent } from './components/admin/collaboration/collaboration-add/collaboration-add.component';
import { CollaborationViewComponent } from './components/admin/collaboration/collaboration-view/collaboration-view.component';
import { CollaborationListComponent } from './components/admin/collaboration/collaboration-list/collaboration-list.component';
import { CollaborationRemoveComponent } from './components/admin/collaboration/collaboration-remove/collaboration-remove.component';
import { CollaborationUpdateComponent } from './components/admin/collaboration/collaboration-update/collaboration-update.component';
import { EventAddComponent } from './components/admin/event/event-add/event-add.component';
import { EventUpdateComponent } from './components/admin/event/event-update/event-update.component';
import { EventListComponent } from './components/admin/event/event-list/event-list.component';
import { EventViewComponent } from './components/admin/event/event-view/event-view.component';
import { EventRemoveComponent } from './components/admin/event/event-remove/event-remove.component';
import { GalleryAddComponent } from './components/admin/gallery/gallery-add/gallery-add.component';
import { GalleryUpdateComponent } from './components/admin/gallery/gallery-update/gallery-update.component';
import { GalleryViewComponent } from './components/admin/gallery/gallery-view/gallery-view.component';
import { GalleryListComponent } from './components/admin/gallery/gallery-list/gallery-list.component';
import { GalleryRemoveComponent } from './components/admin/gallery/gallery-remove/gallery-remove.component';
import { RecipeAddComponent } from './components/admin/recipe/recipe-add/recipe-add.component';
import { RecipeListComponent } from './components/admin/recipe/recipe-list/recipe-list.component';
import { RecipeViewComponent } from './components/admin/recipe/recipe-view/recipe-view.component';
import { RecipeUpdateComponent } from './components/admin/recipe/recipe-update/recipe-update.component';
import { RecipeRemoveComponent } from './components/admin/recipe/recipe-remove/recipe-remove.component';
import { UserHeightAddComponent } from './components/admin/user-height/user-height-add/user-height-add.component';
import { UserHeightListComponent } from './components/admin/user-height/user-height-list/user-height-list.component';
import { UserHeightViewComponent } from './components/admin/user-height/user-height-view/user-height-view.component';
import { UserHeightUpdateComponent } from './components/admin/user-height/user-height-update/user-height-update.component';
import { UserHeightRemoveComponent } from './components/admin/user-height/user-height-remove/user-height-remove.component';
import { UserWeightAddComponent } from './components/admin/user-weight/user-weight-add/user-weight-add.component';
import { UserWeightUpdateComponent } from './components/admin/user-weight/user-weight-update/user-weight-update.component';
import { UserWeightViewComponent } from './components/admin/user-weight/user-weight-view/user-weight-view.component';
import { UserWeightListComponent } from './components/admin/user-weight/user-weight-list/user-weight-list.component';
import { UserWeightRemoveComponent } from './components/admin/user-weight/user-weight-remove/user-weight-remove.component';
import { EventFilterPipePipe } from './pipes/event-filter-pipe.pipe';
import { UserLastNameFilterPipePipe } from './pipes/user-last-name-filter-pipe.pipe';
import { CollaborationFilterPipePipe } from './pipes/collaboration-filter-pipe.pipe';
import { DescriptionFilterPipePipe } from './pipes/description-filter-pipe.pipe';
import { RecipeFilterPipePipe } from './pipes/recipe-filter-pipe.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    OperationClaimAddComponent,
    OperationClaimListComponent,
    OperationClaimRemoveComponent,
    OperationClaimUpdateComponent,
    OperationClaimViewComponent,
    UserAddComponent,
    UserListComponent,
    UserRemoveComponent,
    UserUpdateComponent,
    UserViewComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimListComponent,
    UserOperationClaimRemoveComponent,
    UserOperationClaimUpdateComponent,
    UserOperationClaimViewComponent,
    CollaborationAddComponent,
    CollaborationViewComponent,
    CollaborationListComponent,
    CollaborationRemoveComponent,
    CollaborationUpdateComponent,
    EventAddComponent,
    EventUpdateComponent,
    EventListComponent,
    EventViewComponent,
    EventRemoveComponent,
    GalleryAddComponent,
    GalleryUpdateComponent,
    GalleryViewComponent,
    GalleryListComponent,
    GalleryRemoveComponent,
    RecipeAddComponent,
    RecipeListComponent,
    RecipeViewComponent,
    RecipeUpdateComponent,
    RecipeRemoveComponent,
    UserHeightAddComponent,
    UserHeightListComponent,
    UserHeightViewComponent,
    UserHeightUpdateComponent,
    UserHeightRemoveComponent,
    UserWeightAddComponent,
    UserWeightUpdateComponent,
    UserWeightViewComponent,
    UserWeightListComponent,
    UserWeightRemoveComponent,
    EventFilterPipePipe,
    UserLastNameFilterPipePipe,
    CollaborationFilterPipePipe,
    DescriptionFilterPipePipe,
    RecipeFilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
