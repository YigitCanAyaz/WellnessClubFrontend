import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
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

      { path: "events/view/:eventId", component: eventViewComponent },
      { path: "galleries/view/:galleryId", component: galleryViewComponent },
      { path: "heights/view/:heightId", component: heightViewComponent },
      { path: "collaborations/view/:collaborationId", component: CollaborationViewComponent },
      { path: "recipes/view/:recipeId", component: recipeViewComponent },
      { path: "weights/view/:weightId", component: WeightViewComponent },
      { path: "users/view/:userId", component: UserViewComponent },
      { path: "operationclaims/view/:operationClaimId", component: OperationClaimViewComponent },
      { path: "useroperationclaims/view/:userOperationClaimId", component: UserOperationClaimViewComponent },
      { path: "userheights/view/:userHeightId", component: UserHeightViewComponent },
      { path: "userweights/view/:userHeightId", component: UserWeightViewComponent },

      { path: "events/add", component: eventAddComponent },
      { path: "galleries/add", component: galleryAddComponent },
      { path: "heights/add", component: heightAddComponent },
      { path: "collaborations/add", component: CollaborationAddComponent },
      { path: "recipes/add", component: recipeAddComponent },
      { path: "weights/add", component: WeightAddComponent },
      { path: "users/add", component: UserAddComponent },
      { path: "operationclaims/add", component: OperationClaimAddComponent },
      { path: "useroperationclaims/add", component: UserOperationClaimAddComponent },
      { path: "userheights/add", component: UserHeightAddComponent },
      { path: "userweights/add", component: UserWeightAddComponent },


      { path: "events/update/:eventId", component: eventUpdateComponent },
      { path: "galleries/update/:galleryId", component: galleryUpdateComponent },
      { path: "heights/update/:heightId", component: heightUpdateComponent },
      { path: "collaborations/update/:collaborationId", component: CollaborationUpdateComponent },
      { path: "recipes/update/:recipeId", component: recipeUpdateComponent },
      { path: "weights/update/:weightId", component: WeightUpdateComponent },
      { path: "users/update/:userId", component: UserUpdateComponent },
      { path: "operationclaims/update/:operationClaimId", component: OperationClaimUpdateComponent },
      { path: "useroperationclaims/update/:userOperationClaimId", component: UserOperationClaimUpdateComponent },
      { path: "userheights/update/:userHeightId", component: UserHeightUpdateComponent },
      { path: "userweights/update/:userHeightId", component: UserWeightUpdateComponent },

      { path: "events/remove/:eventId", component: eventRemoveComponent },
      { path: "galleries/remove/:galleryId", component: galleryRemoveComponent },
      { path: "heights/remove/:heightId", component: heightRemoveComponent },
      { path: "collaborations/remove/:collaborationId", component: CollaborationRemoveComponent },
      { path: "recipes/remove/:recipeId", component: recipeRemoveComponent },
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
