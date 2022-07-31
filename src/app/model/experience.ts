export class Experience {
  id?: number;
  companyName: string;
  period: string;
  details: string;
  recomendations: string;

  constructor(
    companyName: string,
    period: string,
    details: string,
    recomendations: string
  ) {
    this.companyName = companyName;
    this.period = period;
    this.details = details;
    this.recomendations = recomendations;
  }
}
