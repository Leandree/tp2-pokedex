import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PokemonDetail} from '../pokemonDetail.model';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Pokemon} from '../pokemon.model';



@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() selectedPokemon: Pokemon;
  pokemon: PokemonDetail;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location : Location) { }

  ngOnChanges() {
    if(this.selectedPokemon){
      this.getPokemonById();
    }
  }

  getPokemonById(){
    this.pokemonService.getPokemonById(this.selectedPokemon.id).subscribe((myResult:any) => this.pokemon = myResult);
  }

  goback(){
    this.location.back();
  }

}
