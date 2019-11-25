import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { rootRouterConfig } from './app.routes'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment'
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user/user.component'
import { UserResolver } from './user/user.resolver'
import { AuthGuard } from './core/auth.guard'
import { AuthService } from './core/auth.service'
import { UserService } from './core/user.service'
import { ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component'
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { ThiComponent } from './thi/thi.component';
import { HeadComponent } from './head/head.component';
import { DangkiComponent } from './dangki/dangki.component';
import { UpdateComponent } from './update/update.component';
// import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent, LoginComponent, UserComponent, DangnhapComponent, DanhmucmonhocComponent, ThiComponent, HeadComponent, DangkiComponent, UpdateComponent],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'login', component: DangnhapComponent, },
      { path: 'dm', component: DanhmucmonhocComponent, resolve: { data: UserResolver } },
      { path: 'dm/:Id', component: ThiComponent, resolve: { data: UserResolver } },
      { path: 'dangki', component: DangkiComponent, },

      { path: 'update', component: UpdateComponent, resolve: { data: UserResolver } },

      { path: 'user', component: UserComponent, resolve: { data: UserResolver } }
    ]

    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
