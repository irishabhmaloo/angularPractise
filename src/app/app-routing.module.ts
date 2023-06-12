import { NgModule } from "@angular/core";
import { Routes , RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersRComponent } from "./serversR/Rservers.component";
import { EditServerComponent } from "./serversR/edit-server/edit-server.component";
import { ServerRComponent } from "./serversR/serverR/Rserver.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./serversR/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { serverResolver } from "./serversR/serverR/server-resolver.service";

// ROUTER
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'users', component: UsersComponent , children : [
      { path: ':id/:name', component: UserComponent }
    ]}, 
    
    { 
      path: 'servers', 
      // canActivate: [AuthGuard],
      canActivateChild: [AuthGuard], 
      component: ServersRComponent , 
      children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard]},
      { path: ':id', component: ServerRComponent, resolve: {server: serverResolver} }
    ]},
  
    // { path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent , data: {message: 'Page not found!'}},
    { path: '**', redirectTo : '/not-found'}  
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [RouterModule]
})
export class AppRoutingModule {

}