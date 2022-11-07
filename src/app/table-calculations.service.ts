import { Injectable } from '@angular/core';
import { DataTableType } from './data-table-type';

@Injectable({
  providedIn: 'root'
})
export class TableCalculationsService {

  constructor() { }

  calculate1Value(n1: number, n2: number): number {
    return n1 + n2 / 3;
  }

  calculate2Value(n1: number, n2: number): number {
    return (n1 * 4) + n2 ;
  }

  calculateTotal(...data: number[]): number {
    const values = Object.values(data);

    const sum = values.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    return sum;
  }
}
