import { TestBed } from '@angular/core/testing';
import { InvoiceStatus } from 'src/app/shared/enums/invoice-status';
import { InvoiceStatusConverterService } from './invoice-status-converter.service';

describe('InvoiceStatusConverterService should convert a string', () => {
  let service: InvoiceStatusConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceStatusConverterService);
  });

  it('that matches the enum value exactly', () => {
    const enumValue: InvoiceStatus = service.toEnum("EnumValueOne");
    expect(enumValue).toEqual(InvoiceStatus.EnumValueOne);
  });

  it('that matches the enum value but is different case', () => {
    const enumValue: InvoiceStatus = service.toEnum("ENUMVALUEONE");
    expect(enumValue).toEqual(InvoiceStatus.EnumValueOne);
  });
  
  it('that matches the enum value but contains spaces', () => {
    const enumValue: InvoiceStatus = service.toEnum("ENUM VALUE ONE");
    expect(enumValue).toEqual(InvoiceStatus.EnumValueOne);
  });

  it('that does not match the enum value to InvoiceStatus.Unknown', () => {
    const enumValue: InvoiceStatus = service.toEnum("BadEnumValue");
    expect(enumValue).toEqual(InvoiceStatus.Unknown);
  });

});
