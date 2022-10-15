import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { CollaborationAddComponent } from './components/admin/collaboration/collaboration-add/collaboration-add.component';
import { CollaborationListComponent } from './components/admin/collaboration/collaboration-list/collaboration-list.component';
import { CollaborationRemoveComponent } from './components/admin/collaboration/collaboration-remove/collaboration-remove.component';
import { CollaborationUpdateComponent } from './components/admin/collaboration/collaboration-update/collaboration-update.component';
import { CollaborationViewComponent } from './components/admin/collaboration/collaboration-view/collaboration-view.component';
import { EventAddComponent } from './components/admin/event/event-add/event-add.component';
import { EventListComponent } from './components/admin/event/event-list/event-list.component';
import { EventRemoveComponent } from './components/admin/event/event-remove/event-remove.component';
import { EventUpdateComponent } from './components/admin/event/event-update/event-update.component';
import { EventViewComponent } from './components/admin/event/event-view/event-view.component';
import { GalleryAddComponent } from './components/admin/gallery/gallery-add/gallery-add.component';
import { GalleryListComponent } from './components/admin/gallery/gallery-list/gallery-list.component';
import { GalleryRemoveComponent } from './components/admin/gallery/gallery-remove/gallery-remove.component';
import { GalleryUpdateComponent } from './components/admin/gallery/gallery-update/gallery-update.component';
import { GalleryViewComponent } from './components/admin/gallery/gallery-view/gallery-view.component';
import { HeightAddComponent } from './components/admin/height/height-add/height-add.component';
import { HeightListComponent } from './components/admin/height/height-list/height-list.component';
import { HeightRemoveComponent } from './components/admin/height/height-remove/height-remove.component';
import { HeightUpdateComponent } from './components/admin/height/height-update/height-update.component';
import { HeightViewComponent } from './components/admin/height/height-view/height-view.component';
import { OperationClaimAddComponent } from './components/admin/operation-claim/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/admin/operation-claim/operation-claim-list/operation-claim-list.component';
import { OperationClaimRemoveComponent } from './components/admin/operation-claim/operation-claim-remove/operation-claim-remove.component';
import { OperationClaimUpdateComponent } from './components/admin/operation-claim/operation-claim-update/operation-claim-update.component';
import { OperationClaimViewComponent } from './components/admin/operation-claim/operation-claim-view/operation-claim-view.component';
import { RecipeAddComponent } from './components/admin/recipe/recipe-add/recipe-add.component';
import { RecipeListComponent } from './components/admin/recipe/recipe-list/recipe-list.component';
import { RecipeRemoveComponent } from './components/admin/recipe/recipe-remove/recipe-remove.component';
import { RecipeUpdateComponent } from './components/admin/recipe/recipe-update/recipe-update.component';
import { RecipeViewComponent } from './components/admin/recipe/recipe-view/recipe-view.component';
import { UserHeightAddComponent } from './components/admin/user-height/user-height-add/user-height-add.component';
import { UserHeightListComponent } from './components/admin/user-height/user-height-list/user-height-list.component';
import { UserHeightRemoveComponent } from './components/admin/user-height/user-height-remove/user-height-remove.component';
import { UserHeightUpdateComponent } from './components/admin/user-height/user-height-update/user-height-update.component';
import { UserHeightViewComponent } from './components/admin/user-height/user-height-view/user-height-view.component';
import { UserOperationClaimAddComponent } from './components/admin/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/admin/user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimRemoveComponent } from './components/admin/user-operation-claim/user-operation-claim-remove/user-operation-claim-remove.component';
import { UserOperationClaimUpdateComponent } from './components/admin/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimViewComponent } from './components/admin/user-operation-claim/user-operation-claim-view/user-operation-claim-view.component';
import { UserWeightAddComponent } from './components/admin/user-weight/user-weight-add/user-weight-add.component';
import { UserWeightListComponent } from './components/admin/user-weight/user-weight-list/user-weight-list.component';
import { UserWeightRemoveComponent } from './components/admin/user-weight/user-weight-remove/user-weight-remove.component';
import { UserWeightUpdateComponent } from './components/admin/user-weight/user-weight-update/user-weight-update.component';
import { UserWeightViewComponent } from './components/admin/user-weight/user-weight-view/user-weight-view.component';
import { UserAddComponent } from './components/admin/user/user-add/user-add.component';
import { UserListComponent } from './components/admin/user/user-list/user-list.component';
import { UserRemoveComponent } from './components/admin/user/user-remove/user-remove.component';
import { UserUpdateComponent } from './components/admin/user/user-update/user-update.component';
import { UserViewComponent } from './components/admin/user/user-view/user-view.component';
import { WeightAddComponent } from './components/admin/weight/weight-add/weight-add.component';
import { WeightListComponent } from './components/admin/weight/weight-list/weight-list.component';
import { WeightRemoveComponent } from './components/admin/weight/weight-remove/weight-remove.component';
import { WeightUpdateComponent } from './components/admin/weight/weight-update/weight-update.component';
import { WeightViewComponent } from './components/admin/weight/weight-view/weight-view.component';
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
      { path: "recipes/list", component: RecipeListComponent },
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
