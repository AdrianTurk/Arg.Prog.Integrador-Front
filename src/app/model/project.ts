export class Project {
  id?: number;
  description: string;
  imgLink: string;
  link: string;
  name: string;
  sourceLink: string;

  constructor(
    name: string,
    description: string,
    imgLink: string,
    link: string,
    sourceLink: string
  ) {
    this.name = name;
    this.description = description;
    this.imgLink = imgLink;
    this.link = link;
    this.sourceLink = sourceLink;
  }
}
