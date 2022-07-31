export class Experience {
  id?: number;
  companyName: string;
  jobPosition: string;
  period: string;
  details: string;
  recomendations: string;

  constructor(
    companyName: string,
    jobPosition: string,
    period: string,
    details: string,
    recomendations: string
  ) {
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.period = period;
    this.details = details;
    this.recomendations = recomendations;
  }
}
