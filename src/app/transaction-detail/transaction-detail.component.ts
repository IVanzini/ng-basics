import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {
  @Input()
  transaction?: Transaction;

  @Output()
  onRichiestaEliminazione = new EventEmitter<Transaction>();

  richiediEliminazione() {
    if (confirm("Sei sicuro di voler eliminare la transazione?")) {
      this.onRichiestaEliminazione.emit(this.transaction);
    }
  }
}
