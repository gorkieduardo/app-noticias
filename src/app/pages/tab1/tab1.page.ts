import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor( private noticiasSerivces: NoticiasService ) {

  }

  ngOnInit() {

    this.noticiasSerivces.getTopHeadlines()
    .subscribe( resp => {
      console.log('noticas', resp);
      // this.noticias = resp.articles;
      this.noticias.push( ...resp.articles );
    });

  }
}
