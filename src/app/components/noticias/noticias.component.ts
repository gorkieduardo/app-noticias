import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/pages/interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() noticias: Article[] = [];

  constructor() { }

  ngOnInit() {}

}
