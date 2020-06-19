import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MembersComponent } from './components/members/members.component';
import { PackageItemListComponent } from './components/packages/package-item-list/package-item-list.component';
import { MemberPackageComponent } from './components/members/member-package/member-package.component';
import { TrainerComponent } from './components/trainers/trainer/trainer.component';
import { MemberComponent } from './components/members/member/member.component';
import { TrainersComponent } from './components/trainers/trainers/trainers.component';


const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  },
   { path: 'admin', component: AdminComponent},
   { path: 'trainer', component: TrainerComponent},
   { path: 'packages', component: PackageItemListComponent},
   {path: 'members', component: MembersComponent,
  children: [
    {path: 'member/package/', component: MemberPackageComponent}
  ]},
  { path: 'member', component: MemberComponent,
children:[
  {path: 'trainers', component: TrainersComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
