import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService} from 'src/app/service/order-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
getmenuid:any;
menuData:any;
  ngOnInit(): void {
    this.getmenuid=this.param.snapshot.paramMap.get('id');
    console.log(this.getmenuid,'getmenu');
    if(this.getmenuid)
    {
this.menuData=this.service.fooddetail.filter((value)=>{
return value.id=this.getmenuid;
});
console.log(this.menuData,'menudata')
}
  }

}
