import { Component } from '@angular/core';
import { DataTableType } from './data-table-type';
import { mockedData } from './mocked-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  dataTable: DataTableType[] = mockedData;
}
