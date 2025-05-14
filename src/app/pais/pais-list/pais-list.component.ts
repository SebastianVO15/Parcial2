import { Component, OnInit } from '@angular/core';
import { PaisDetailComponent } from '../pais-detail/pais-detail.component';
import { PaisService } from '../pais.service';
import { PaisModel } from '../pais.model';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
  standalone: false
})
export class PaisListComponent implements OnInit {
  paises: Array<PaisModel> = [];
  min:number=0;
  constructor(private paisService:PaisService) { }
  getPaises() {
    this.paisService.getPaises().subscribe((apiData) => {
      this.paises = apiData;
    });
  }
  ngOnInit() {
    this.getPaises();
    for (let i = 0; i < this.paises.length; i++) {
      if(2025-this.paises[i].formation_year> this.min){
        this.min=2025-this.paises[i].formation_year;
      }
    }
  }

}
