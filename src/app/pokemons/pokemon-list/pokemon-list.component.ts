import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon} from '../pokemon.model';
import {PokemonService} from '../pokemon.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  pokemonTampon: Pokemon[];
  nbPokemon: number = 0;
  @Output() selectedPokemon = new EventEmitter<Pokemon>();


  constructor(private pokemonService: PokemonService) { }


  getPokemons(){
    this.pokemonService.getPokemons(this.nbPokemon).subscribe((myResult:any) => {
      this.pokemons = myResult.data;
      this.pokemonTampon = this.pokemons
    } );
  }

  ngOnInit() {
    this.getPokemons();
  }


  onScroll(){
    this.nbPokemon += 20;
    this.pokemonService.getPokemons(this.nbPokemon).subscribe((myResult:any) => this.pokemons.push.apply(this.pokemons, myResult.data));
  }

  selectPokemon(selectedPokemon: Pokemon){
    this.selectedPokemon.emit(selectedPokemon);
  }

  search(term: string){
    if(term !== ''){
      this.pokemonService.searchPokemons(term).subscribe((myResult: any) => this.pokemons = myResult.data);
    }
    else{
      this.pokemons = this.pokemonTampon;
    }
  }

}
