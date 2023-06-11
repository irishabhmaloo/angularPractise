import { NgModule } from "@angular/core";
import { Routes , RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersRComponent } from "./serversR/Rservers.component";
import { EditServerComponent } from "./serversR/edit-server/edit-server.component";
import { ServerRComponent } from "./serversR/serverR/Rserver.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// ROUTER
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'users', component: UsersComponent , children : [
      { path: ':id/:name', component: UserComponent }
    ]}, 
    
    { path: 'servers', component: ServersRComponent , children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerRComponent }
    ]},
  
    { path: 'not-found', component: PageNotFoundComponent},
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