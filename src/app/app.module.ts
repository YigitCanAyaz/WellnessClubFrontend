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
