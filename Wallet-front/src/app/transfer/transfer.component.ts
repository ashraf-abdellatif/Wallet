import { Component, OnInit } from '@angular/core';
import { TransferModel } from '../TransferModel';
import { TransfersService } from '../transfers.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private transfersService:TransfersService) { }
  transferModel:TransferModel={ UserID:0,ToMobile:'',Value:0};

  ngOnInit(): void {
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
        console.log('تم التسجيل بنجاح');
      },
      err=>{console.log(err);}
    )
  }
  ValidateForm()
  {
    if(this.transferModel.UserID == 0 || this.transferModel.ToMobile =='' || this.transferModel.Value==0)
    return false;
    return true;
  }
}
