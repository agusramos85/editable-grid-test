import { AfterViewInit, Component, Input } from '@angular/core';
import { DataTableType } from '../data-table-type';
import { TableCalculationsService } from '../table-calculations.service';

@Component({
  selector: 'app-editable-grid',
  templateUrl: './editable-grid.component.html',
  styleUrls: ['./editable-grid.component.scss']
})
export class EditableGridComponent {
  title = 'my-editable-grid';
  @Input() tableData!: DataTableType[];
  constructor(private tableService: TableCalculationsService) {
    console.log(this.tableData);
  }

  updateV1(data: DataTableType) {
    const calcualtedValue = this.tableService.calculate1Value(data.user1Value, data.user1Value);
    data.f1Value = calcualtedValue;
    data.totalValue = this.tableService.calculateTotal(data.f1Value, data.f2Value, data.user1Value, data.user2Value);
    return;
  }

  updateV2(data: DataTableType) {
    const calcualtedValue = this.tableService.calculate1Value(data.user2Value, data.user2Value);
    data.f2Value = calcualtedValue;
    data.totalValue = this.tableService.calculateTotal(data.f1Value, data.f2Value, data.user1Value, data.user2Value);
    return;
  }
}
