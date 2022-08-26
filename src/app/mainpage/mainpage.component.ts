import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokegetService } from '../pokeget.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less'],
})
export class MainpageComponent implements OnInit {
  pokemons: any[] = [];
  pokemons2: any[] = [];
  image: any = [];
  page = 1;
  totalPokemons: any;

  constructor(
    private httpClient: HttpClient,
    private service: PokegetService
  ) {}
  /*
  getImage(url: string) {
    this.httpClient.get(url).subscribe((data) => {
      //console.log(data);
      this.image = data;
      //console.log(this.image.sprites.front_default);
      const urlImage = this.image.sprites.front_default;
      console.log(urlImage);
      document.getElementById('xxx')?.setAttribute('src', urlImage);
      return urlImage;
    });
  }
*/
  URL = 'https://pokeapi.co/api/v2/pokemon';

  ngOnInit(): void {
    /*
    fetch(this.URL + '?limit=10')
      .then((response) => response.json())
      .then((data) => {
        this.pokemons = data.results.sprites;
        console.log(this.pokemons);
      });
      */
    /*
    this.service.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.service.getMoreData(result.name).subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        });
      });
    });
*/
    this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=9')
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: any) => {
          this.httpClient
            .get('https://pokeapi.co/api/v2/pokemon/' + result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        });
      });
  }
}
