export class App {

  heading: string;
  counterClass: any;
  styleButtonRed: any;
  styleButtonGreen: any;
  lifeTotal1: number = 20;
  lifeTotal2: number = 20;
  color: string = 'blue';

  constructor() {
    this.heading = 'MTG Life Counter';

    this.counterClass = 'counter';

    this.styleButtonRed = {
      color: 'black',
      'background-color': 'red'
    };

    this.styleButtonGreen = {
      color: 'black',
      'background-color': 'green',
      border: 'none',
      padding: '8px 16px',
      'text-align': 'center',
      'text-decoration': 'none',
      display: 'inline - block',
      'font-size': '16px',
      margin: '2px 1px',
      cursor: 'pointer'
    };

  }

  adjustLife1(modifier: number) {
    this.lifeTotal1 += modifier
  }

  adjustLife2(modifier: number) {
    this.lifeTotal2 += modifier
  }

  changeColour(newColour: string) {
    this.color = newColour
  }


}



