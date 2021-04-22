type TempTrackerType ={
  inputList: number[];
  input: number;
  minTemp: number;
  maxTemp: number;
  aveTemp: number;
  instance: TempTrackerType;
  constructor(): void;
  setHighest(): void;
  setLowest(): void;
  setAverage(): void;
  insertNew(input: number): void;
  getHighest(): number;
  getLowest(): number;
  getAverage(): number;
  getInstance(): TempTrackerType;
}
