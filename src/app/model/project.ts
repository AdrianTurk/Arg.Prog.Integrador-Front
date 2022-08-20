export class Project {
  id?: number;
  description: string;
  imgLink: string;
  link: string;
  name: string;
  sourceLink: string;

  constructor(
    description: string,
    imgLink: string,
    link: string,
    name: string,
    sourceLink: string
  ) {
    this.description = description;
    this.imgLink = imgLink;
    this.link = link;
    this.name = name;
    this.sourceLink = sourceLink;
  }
}
