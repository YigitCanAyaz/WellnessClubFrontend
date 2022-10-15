import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { OperationClaimAddComponent } from './components/admin/operation-claim/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/admin/operation-claim/operation-claim-list/operation-claim-list.component';
import { OperationClaimRemoveComponent } from './components/admin/operation-claim/operation-claim-remove/operation-claim-remove.component';
import { OperationClaimUpdateComponent } from './components/admin/operation-claim/operation-claim-update/operation-claim-update.component';
import { OperationClaimViewComponent } from './components/admin/operation-claim/operation-claim-view/operation-claim-view.component';
import { UserOperationClaimAddComponent } from './components/admin/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/admin/user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimRemoveComponent } from './components/admin/user-operation-claim/user-operation-claim-remove/user-operation-claim-remove.component';
import { UserOperationClaimUpdateComponent } from './components/admin/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimViewComponent } from './components/admin/user-operation-claim/user-operation-claim-view/user-operation-claim-view.component';
import { UserAddComponent } from './components/admin/user/user-add/user-add.component';
import { UserListComponent } from './components/admin/user/user-list/user-list.component';
import { UserRemoveComponent } from './components/admin/user/user-remove/user-remove.component';
import { UserUpdateComponent } from './components/admin/user/user-update/user-update.component';
import { UserViewComponent } from './components/admin/user/user-view/user-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [LoginGuard],
    children: [

      { path: "", pathMatch: "full", component: AdminDashboardComponent },

      { path: "events/list", component: EventListComponent },
      { path: "galleries/list", component: GalleryListComponent },
      { path: "heights/list", component: HeightListComponent },
      { path: "collaborations/list", component: CollaborationListComponent },
      { path: "recipes/list", component: recipeListComponent },
      { path: "weights/list", component: WeightListComponent },
      { path: "users/list", component: UserListComponent },
      { path: "operationclaims/list", component: OperationClaimListComponent },
      { path: "useroperationclaims/list", component: UserOperationClaimListComponent },
      { path: "userheights/list", component: UserHeightListComponent },
      { path: "userweights/list", component: UserWeightListComponent },

      { path: "events/view/:eventId", component: EventViewComponent },
      { path: "galleries/view/:galleryId", component: GalleryViewComponent },
      { path: "heights/view/:heightId", component: HeightViewComponent },
      { path: "collaborations/view/:collaborationId", component: CollaborationViewComponent },
      { path: "recipes/view/:recipeId", component: RecipeViewComponent },
      { path: "weights/view/:weightId", component: WeightViewComponent },
      { path: "users/view/:userId", component: UserViewComponent },
      { path: "operationclaims/view/:operationClaimId", component: OperationClaimViewComponent },
      { path: "useroperationclaims/view/:userOperationClaimId", component: UserOperationClaimViewComponent },
      { path: "userheights/view/:userHeightId", component: UserHeightViewComponent },
      { path: "userweights/view/:userHeightId", component: UserWeightViewComponent },

      { path: "events/add", component: EventAddComponent },
      { path: "galleries/add", component: GalleryAddComponent },
      { path: "heights/add", component: HeightAddComponent },
      { path: "collaborations/add", component: CollaborationAddComponent },
      { path: "recipes/add", component: RecipeAddComponent },
      { path: "weights/add", component: WeightAddComponent },
      { path: "users/add", component: UserAddComponent },
      { path: "operationclaims/add", component: OperationClaimAddComponent },
      { path: "useroperationclaims/add", component: UserOperationClaimAddComponent },
      { path: "userheights/add", component: UserHeightAddComponent },
      { path: "userweights/add", component: UserWeightAddComponent },


      { path: "events/update/:eventId", component: EventUpdateComponent },
      { path: "galleries/update/:galleryId", component: GalleryUpdateComponent },
      { path: "heights/update/:heightId", component: HeightUpdateComponent },
      { path: "collaborations/update/:collaborationId", component: CollaborationUpdateComponent },
      { path: "recipes/update/:recipeId", component: RecipeUpdateComponent },
      { path: "weights/update/:weightId", component: WeightUpdateComponent },
      { path: "users/update/:userId", component: UserUpdateComponent },
      { path: "operationclaims/update/:operationClaimId", component: OperationClaimUpdateComponent },
      { path: "useroperationclaims/update/:userOperationClaimId", component: UserOperationClaimUpdateComponent },
      { path: "userheights/update/:userHeightId", component: UserHeightUpdateComponent },
      { path: "userweights/update/:userHeightId", component: UserWeightUpdateComponent },

      { path: "events/remove/:eventId", component: EventRemoveComponent },
      { path: "galleries/remove/:galleryId", component: GalleryRemoveComponent },
      { path: "heights/remove/:heightId", component: HeightRemoveComponent },
      { path: "collaborations/remove/:collaborationId", component: CollaborationRemoveComponent },
      { path: "recipes/remove/:recipeId", component: RecipeRemoveComponent },
      { path: "weights/remove/:weightId", component: WeightRemoveComponent },
      { path: "users/remove/:userId", component: UserRemoveComponent },
      { path: "operationclaims/remove/:operationClaimId", component: OperationClaimRemoveComponent },
      { path: "useroperationclaims/remove/:userOperationClaimId", component: UserOperationClaimRemoveComponent },
      { path: "userheights/remove/:userHeightId", component: UserHeightRemoveComponent },
      { path: "userweights/remove/:userHeightId", component: UserWeightRemoveComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
