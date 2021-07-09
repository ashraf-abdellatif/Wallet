import { Component, OnInit } from '@angular/core';
import { TransferModel } from '../TransferModel';
import { TransfersService } from '../transfers.service';
//import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  constructor(private transfersService:TransfersService) { }
  Data:any;
  ngOnInit(): void {
    this.LoadAllTansfer();
  }
  LoadAllTansfer()
  {
    this.transfersService.GetAllTransfers(Number(localStorage.getItem('userid'))).subscribe(
      data=>{
        this.Data = data;
      },
      //err=>{alertify.error(err);}
    )
  }
}
