import Observer from 'observer';
import { formatDistanceToNow, isValid, parseISO } from 'date-fns';

const observer = new Observer();

const input = document.getElementById('input');
const result = document.getElementById('time');

input.oninput = (e) => {
  observer.set(e.target.value);
};

observer.subscribe((value) => {
  const date = parseISO(value);
  if (value && isValid(date)) {
    result.innerHTML = formatDistanceToNow(date);
  }
});
