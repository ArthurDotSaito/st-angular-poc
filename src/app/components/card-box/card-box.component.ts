import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/account-data-model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css'],
})
export class CardBoxComponent implements OnInit {
  constructor(private service: CardsService) {}

  accountData: AccountDataModel = {
    name: '',
    account: {
      agency: '0001',
      number: '00.000000-0',
    },
    card: {
      limit: 0,
      number: '0000',
    },
  };

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData() {
    this.service.getCard().subscribe((data) => {
      this.accountData.name = data.name;
      this.accountData.account.agency = data.account.agency;
      this.accountData.card.limit = data.account.limit;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number = data.card.number.spli(' ')[3];
    });
  }
}
