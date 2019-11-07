export class App {
  public heading: string;
  public lifeTotal: number = 20;

  constructor() {
    this.heading = 'MTG Life Counter';

  }

    addOne() {
      var lifeTotal = document.getElementById('currentLife').innerHTML;
      lifeTotal = Number(lifeTotal) + 1;
      document.getElementById('currentLife').innerHTML = lifeTotal;
    }

    addFive() {
      var lifeTotal = document.getElementById('currentLife').innerHTML;
      lifeTotal = Number(lifeTotal) + 5;
      document.getElementById('currentLife').innerHTML = lifeTotal;
    }

    subOne() {
      var lifeTotal = document.getElementById('currentLife').innerHTML;
      lifeTotal = Number(lifeTotal) - 1;
      document.getElementById('currentLife').innerHTML = lifeTotal;
    }

    subFive() {
      var lifeTotal = document.getElementById('currentLife').innerHTML;
      lifeTotal = Number(lifeTotal) - 5;
      document.getElementById('currentLife').innerHTML = lifeTotal;
    }

}