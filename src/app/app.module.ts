import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembersComponent } from './components/members/members.component';
import { PackageItemListComponent } from './components/packages/package-item-list/package-item-list.component';
import { PackageItemFormComponent } from './components/packages/package-item-form/package-item-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberFormComponent } from './components/members/member-form/member-form.component';
import { MemberPackageComponent } from './components/members/member-package/member-package.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { TrainerFormComponent } from './components/trainers/trainer-form/trainer-form.component';
import { TrainerComponent } from './components/trainers/trainer/trainer.component';
import { MemberComponent } from './components/members/member/member.component';
import { TrainersComponent } from './components/trainers/trainers/trainers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    MembersComponent,
    PackageItemListComponent,
    PackageItemFormComponent,
    MemberFormComponent,
    MemberPackageComponent,
    TrainerFormComponent,
    TrainerComponent,
    MemberComponent,
    TrainersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PackageItemFormComponent,
    MemberFormComponent,
    TrainerFormComponent,
    TrainersComponent
  ]
})
export class AppModule { }
