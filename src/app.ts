export class App {
  public heading: string;
  lifeTotal = 20;

  constructor() {
    this.heading = 'MTG Life Counter';
  }

  adjustLife(modifier: number) {
    this.lifeTotal = this.lifeTotal + modifier
  }

}