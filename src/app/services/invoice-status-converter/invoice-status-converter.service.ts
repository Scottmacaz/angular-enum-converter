import { Injectable } from '@angular/core';
import { InvoiceStatus } from 'src/app/shared/enums/invoice-status';

@Injectable({
  providedIn: 'root',
})
export class InvoiceStatusConverterService {
  constructor() {}

  toEnum(invoiceStatusString: string): InvoiceStatus {
    debugger;
    //See this: https://stackoverflow.com/questions/17380845/how-do-i-convert-a-string-to-enum-in-typescript
    //This works but is case sensitive.
    //const enumValue: InvoiceStatus = InvoiceStatus[invoiceStatusString as keyof typeof InvoiceStatus];

    //this also works but is also case sensitive
    //const enumValue: InvoiceStatus = (<any>InvoiceStatus)[invoiceStatusString];

    //This works with all cases and removes spaces.

    const trimedString = invoiceStatusString.replace(/ /g, "").toLowerCase();
    return (Object.values(InvoiceStatus).some((col: string) => col === trimedString)) ?  
      <InvoiceStatus>trimedString :
      InvoiceStatus.Unknown;
  
  }
}
