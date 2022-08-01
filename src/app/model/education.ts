export class Education {
  id?: number;
  entityName: string;
  title: string;
  details: string;

  constructor(entityName: string, title: string, details: string) {
    this.entityName = entityName;
    this.title = title;
    this.details = details;
  }
}
