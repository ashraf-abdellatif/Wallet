import { Component, OnInit } from '@angular/core';
import { TransferModel } from '../TransferModel';
import { TransfersService } from '../transfers.service';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  constructor(private transfersService:TransfersService) { }
  Data:any;
  transferModel:TransferModel={ UserID:0,ToMobile:'',Value:0};
  ngOnInit(): void {
    this.LoadAllTansfer();
  }
  LoadAllTansfer()
  {
    this.transfersService.GetAllTransfers(Number(localStorage.getItem('userid'))).subscribe(
      data=>{this.Data = data;},
      err=>{console.log(err);}
    )
  }
  post()
  {
    this.transferModel.UserID = Number(localStorage.getItem('userid'));
    console.log(this.transferModel);
    this.transfersService.Post(this.transferModel).subscribe(
      data=>{
        console.log(data);
        this.LoadAllTansfer();
      },
      err=>{console.log(err);}
    )
  }
}
