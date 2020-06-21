import Observer from 'observer';
import flatpickr from 'flatpickr';
import { formatDistanceToNow, isValid, parseISO } from 'date-fns';

import 'flatpickr/dist/themes/airbnb.css';

const observer = new Observer();

const input = document.getElementById('input');
const result = document.getElementById('time');

flatpickr(input, {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
  minDate: new Date(),
});

input.oninput = (e) => {
  observer.set(e.target.value);
};

observer.subscribe((value) => {
  const date = parseISO(value);
  if (value && isValid(date)) {
    result.innerHTML = formatDistanceToNow(date);
  }
});
