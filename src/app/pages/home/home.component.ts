import { Component, OnInit } from '@angular/core';
import { OrderDetailsService} from 'src/app/service/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
fooddata:any;
  ngOnInit(): void {
    this.fooddata=this.service.fooddetail;
  }

}
