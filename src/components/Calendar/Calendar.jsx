import React, { useState } from 'react';
import Scroll from '../Scroller/Scroller';
import CalendarItem from './CalendarItem';
import { convertToTimestamp, weekDays, daysInMonth, month, year } from '../../utils/date';

export default function Calendar({ date, currentDay }) {
  const days = [];
  const [selected, setSelected] = useState(currentDay);

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
          <ul className='calendar' onClick={handleClick}>
          {
            days.map((day) => {
              return (
                <CalendarItem 
                  key={day}
                  day={day}
                  weekDays={weekDays}
                  currentDay={currentDay}
                  selected={Number(selected)}
                />
              )
            })
          }
        </ul>
      </Scroll>
    </div>
  )
}
