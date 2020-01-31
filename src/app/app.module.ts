import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {PokemonDetailComponent} from './pokemons/pokemon-detail/pokemon-detail.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    InfiniteScrollModule,
    MatInputModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
