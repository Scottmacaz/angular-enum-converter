import { Component, OnInit } from '@angular/core';
import { InvoiceStatusConverterService } from './services/invoice-status-converter/invoice-status-converter.service';
import { InvoiceStatus } from './shared/enums/invoice-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-enum-converter';

  constructor(
    private invoiceStatusConverterService: InvoiceStatusConverterService
  ) {}
  ngOnInit(): void {
    
    // EnumValueOne  = "enumvalueone",
    // SomeOtherEnumValue = "someotherenumvalue",
    // Two = "two",
    // Three = "three",
    // Unknown = "unknown

    debugger;
    const enumOneLower: InvoiceStatus = this.invoiceStatusConverterService.toEnum('enumvalueone');
    const enumOne: InvoiceStatus = this.invoiceStatusConverterService.toEnum('EnumvalueOne');
    const enumOneSpaces: InvoiceStatus = this.invoiceStatusConverterService.toEnum('Enum Value One');
    const enumNotExist: InvoiceStatus = this.invoiceStatusConverterService.toEnum('NotAnEnumValue');
    
    
  }
}
