import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MymovielibComponent } from './mymovielib/mymovielib.component';
import { MymovieliblistComponent } from './mymovielib/mymovieliblist/mymovieliblist.component';
import { MymovielibdetailsComponent } from './mymovielib/mymovielibdetails/mymovielibdetails.component';
import { ExtmovielibComponent } from './extmovielib/extmovielib.component';
import { ExtmovielibsearchComponent } from './extmovielib/extmovielibsearch/extmovielibsearch.component';
import { ExtmovieliblistComponent } from './extmovielib/extmovieliblist/extmovieliblist.component';
import { ExtmovielibdetailComponent } from './extmovielib/extmovielibdetail/extmovielibdetail.component';

import { ExtMovieLibService } from './extmovielib.service';

const appRoutes: Routes = [
  {path: '', component: ExtmovielibComponent },
  {path: 'search', component: ExtmovielibComponent },
  {path: 'mylib', component: MymovielibComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MymovielibComponent,
    MymovieliblistComponent,
    MymovielibdetailsComponent,
    ExtmovielibComponent,
    ExtmovielibsearchComponent,
    ExtmovieliblistComponent,
    ExtmovielibdetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ExtMovieLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
