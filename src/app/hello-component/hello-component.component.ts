import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello';
import { HelloServiceService } from '../hello-service.service';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {
  message : any;
  constructor(private service : HelloServiceService) { }

  ngOnInit(): void {
    this.service.getMessage().subscribe(data=>{
      this.message = data;

    });
  }

}
