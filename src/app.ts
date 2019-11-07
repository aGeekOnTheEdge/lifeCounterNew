export class App {

  heading: string;
  counterClass: any;
  styleObject1: any;
  styleObject2: any;
  lifeTotal1: number = 20;
  lifeTotal2: number = 20;

  constructor() {
    this.heading = 'MTG Life Counter';

    this.counterClass = 'counter';

    this.styleObject1 = {
      color: 'black',
     'background-color': 'green'
    };

  }

  adjustLife1(modifier: number) {
    this.lifeTotal1 += modifier
  }

  adjustLife2(modifier: number) {
    this.lifeTotal2 += modifier
  }

}