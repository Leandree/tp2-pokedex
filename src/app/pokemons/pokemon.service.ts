import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Pokemon} from './pokemon.model';
import {catchError, tap} from 'rxjs/operators';
import {PokemonDetail} from './pokemonDetail.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonsUrl = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons";

  constructor(private pokemonService: PokemonService, private http: HttpClient) { }

  getPokemons(nbPokemon: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl + '?offset=' + nbPokemon + '&limit=20');
  }

  getPokemonById(id: number): Observable<Pokemon>{
    var url = this.pokemonsUrl+"/"+id;

    return this.http.get<PokemonDetail>(url);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  searchPokemons(term: string): Observable<Pokemon[]>{
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    const params = new HttpParams()
      .set('search', term);
    return this.http.get<Pokemon[]>(`${this.pokemonsUrl}`, {params}).pipe(
      catchError(this.handleError<Pokemon[]>('searchPokemon', []))
    );
  }

}
