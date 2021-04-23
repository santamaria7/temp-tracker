import { tracker } from "./TempTracker";
(function () {
  let value: string;
  let min, max, average;

  function onInputChange(e: InputEvent) {
    value = (e.target as HTMLInputElement).value;
  }
  function onSubmit(e: Event) {
    e.preventDefault();
    const temperature = parseInt(value, 10);
    tracker.insertNew(temperature);
    min = tracker.getLowest();
    max = tracker.getHighest();
    average = tracker.getAverage();
    alert(`min: ${min}, max: ${max}, average: ${average}`);
  }
  document.addEventListener("submit", onSubmit);
  document.addEventListener("input", onInputChange);
})();
