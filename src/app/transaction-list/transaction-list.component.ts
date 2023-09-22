import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TRANSACTIONS } from '../dati/transactions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  ngOnInit(): void {
    this.transactions = TRANSACTIONS;
  }
}
