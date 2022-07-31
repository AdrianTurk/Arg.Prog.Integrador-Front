export class Experience {
  id?: string;
  companyName: string;
  period: string;
  details: string;
  references: string;

  constructor(
    companyName: string,
    period: string,
    details: string,
    references: string
  ) {
    this.companyName = companyName;
    this.period = period;
    this.details = details;
    this.references = references;
  }
}
