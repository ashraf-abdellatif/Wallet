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
  transferModel:TransferModel={ UserID:0,ToMobile:'',Value:0};
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
  post()
  {
    if(!this.ValidateForm())
    {
      console.log('bad data');
      return;
    }
    this.transferModel.UserID = Number(localStorage.getItem('userid'));
    this.transfersService.Post(this.transferModel).subscribe(
      data=>{
        //alertify.success('تم التسجيل بنجاح');
        this.LoadAllTansfer();
      },
      err=>{console.log(err);}
    )
  }
  rowClicked(item:any)
  {
    this.transferModel = {ToMobile:item.toMoibileNumber , Value:item.value , UserID : item.userID};
  }
  ValidateForm()
  {
    if(this.transferModel.UserID == 0 || this.transferModel.ToMobile =='' || this.transferModel.Value==0)
    return false;
    return true;
  }
}
