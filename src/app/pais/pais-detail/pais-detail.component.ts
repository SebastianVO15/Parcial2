import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css'],
  standalone: false
})
export class PaisDetailComponent implements OnInit {
  paisId!: string;
  SelectedPais!: false ;
  constructor(

    private paisService: PaisService;
  ) {}
  getAuthor(){
    this.paisService.getPais(this.paisId).subscribe(apiData=>{
      this.paisDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.paisDetail === undefined){
      this.paisId = this.route.snapshot.paramMap.get('id')!
      if (this.paisId) {
        this.getPais();
      }
    }
  }

}


 

 
