import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
  
})
export class ExpenseEntryComponent implements OnInit {
  title: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.title = " Expenxe Entry"
  }

}
