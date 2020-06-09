import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
 @Input() id= 1;
 @Input() title= 'title';
 @Input() description= 'phrase';
 @Input() icon= 'screen'
  constructor(private apiCaller: HttpClient) { }

  ngOnInit() {
    this.apiCaller.get( `https://halavliva.herokuapp.com/features/` + this.id )
    .subscribe((data: any)=> {
      this.title = data.title;
      this.description = data.description;
    })


  }}
