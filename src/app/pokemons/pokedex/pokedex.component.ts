import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  selectedPokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  sendToDetail(selectedPokemon: Pokemon){
    this.selectedPokemon = selectedPokemon;
  }

}
