import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PokegetService {
  constructor(private httpClient: HttpClient) {}

  url: any;
  getPokemons(limit: number, offset: number) {
    return this.httpClient.get(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    );
  }
  getMoreData(name: string) {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
