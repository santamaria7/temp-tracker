class TempTracker {
  private inputList: number[] = [];
  private input = 0;
  private minTemp: number = -Infinity;
  private maxTemp: number = Infinity;
  private aveTemp: number = 0;
  private static instance: TempTracker;
  constructor() {}
  private setHighest() {
    if(this.maxTemp === Infinity || this.input > this.maxTemp){
      this.maxTemp = this.input;
    }

  }
  private setLowest() {
    if (this.minTemp === -Infinity || this.input < this.minTemp) {
      this.minTemp = this.input;
    }
  }
  private setAverage() {
    const l = this.inputList.length;
    this.aveTemp = this.inputList.reduce((a, b) => a + b, 0) / l;
  }
  insertNew(input: number) {
    this.input = input;
    this.inputList.push(input);
    this.setHighest();
    this.setLowest();
    this.setAverage();
  }
  getHighest() {
    return this.maxTemp;
  }
  getLowest() {
    return this.minTemp;
  }
  getAverage() {
    return this.aveTemp;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new TempTracker();
    }
    return this.instance;
  }
}

export const tracker = TempTracker.getInstance();
