import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { AppRoutingModule } from './app-routing.module';*/
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';

import { HelloComponent } from './hello-component/hello-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarreDeRechercheComponent } from './barre-de-recherche/barre-de-recherche.component';
import { ForumComponent } from './forum/forum.component';
import { CoursComponent } from './cours/cours.component';
import { OffresComponent } from './offres/offres.component'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'forum', component: ForumComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BarreDeRechercheComponent,
    AccueilComponent,
    ForumComponent,
    CoursComponent,
    OffresComponent,
  ],
  imports: [
    BrowserModule,
    /*AppRoutingModule,*/
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
