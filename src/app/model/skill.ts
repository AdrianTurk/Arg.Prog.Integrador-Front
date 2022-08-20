export class Skill {
  id?: number;
  name: String;
  value: number;

  constructor(name: String, value: number) {
    this.name = name;
    this.value = value;
  }
}
