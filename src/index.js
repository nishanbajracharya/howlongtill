import Observer from 'observer';
import flatpickr from 'flatpickr';
import { formatDistanceToNow, isValid, parseISO } from 'date-fns';

import 'flatpickr/dist/themes/airbnb.css';

const observer = new Observer();

const input = document.getElementById('input');
const result = document.getElementById('time');

const fp = flatpickr(input, {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
  minDate: new Date(),
  disableMobile: true,
  onOpen: function(dates, date, instance) {
    instance.calendarContainer.classList.remove('animate');
    instance.calendarContainer.style.opacity = '0';
    setTimeout(() => {
      instance.calendarContainer.style.left = '50%';
      instance.calendarContainer.style.opacity = '1';
    }, 0);
  }
});

fp.calendarContainer.style.transform = 'translateX(-50%)';

input.oninput = (e) => {
  observer.set(e.target.value);
};

observer.subscribe((value) => {
  const date = parseISO(value);
  if (value && isValid(date)) {
    result.innerHTML = formatDistanceToNow(date);
  }
});
