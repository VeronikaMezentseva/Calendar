import React from "react";
import { FC } from "react";
import style from './style.module.css';
import moment, { Moment } from "moment";

// Функция для рендеринга ячейки календаря

export const Cell: FC = (date: moment.Moment) => {
  const curDay = moment().clone();
  let extraClassToday = '';
  let extraClassSecondaryMonths = '';

  if (curDay.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
    extraClassToday = 'cell-today';
  };

  if (curDay.format('MMMM') !== date.format('MMMM')) {
    extraClassSecondaryMonths = 'cell-secondary-month';
  }
  return (
    <div className={`${style.child} ${style[extraClassToday]} ${style[extraClassSecondaryMonths]}`} key={date.format('YYYY-MM-DD')}>
      <div>
        {date.format('D')}
      </div>
    </div>
  );
};