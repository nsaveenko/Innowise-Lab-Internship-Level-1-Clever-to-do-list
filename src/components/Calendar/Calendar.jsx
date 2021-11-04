import React, { useState } from 'react';
import Day from './Day';
import Scroll from '../Scroll'
import moment from 'moment';

export default function Calendar({ date, currentDay }) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const daysInMonth = moment().daysInMonth();
  const days = [];
  const [selected, setSelected] = useState(currentDay);
  const weekDays = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  }

  function convertToTimestamp(day, month, year) {
    return Date.parse(`${month}/${day}/${year}`).toString();
  }

  for (let i = 1; i < daysInMonth + 1; i+=1) {
    days.push(convertToTimestamp(i, month, year));
  }

  function handleClick(event) {
    const node = event.target;
    switch (event.target.className) {
      case 'calendar-item':
        setSelected(node.lastElementChild.id);
        break;
      case 'week-day-title':
        setSelected(node.parentNode.lastElementChild.id);
        break;
      default:
        setSelected(node.id);
    }
  }

  return (
    <div className='scroll-container'>
      <Scroll>
        {
          days.map((day) => {
            return (
              <ul className='calendar' onClick={handleClick}>
              <Day key={day} day={day} weekDays={weekDays} currentDay={currentDay} selected={Number(selected)} />
              </ul>
            )
          })
        }
      </Scroll>
    </div>
  )
}
