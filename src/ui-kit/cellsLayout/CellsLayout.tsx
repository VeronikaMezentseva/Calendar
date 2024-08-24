import React from "react";
import { FC } from "react";
import style from "./style.module.css";
import { Cell } from "../cells/Cells";
import { dateState } from "../../public/applicationState/dateState";

export const CellsLayout: FC = () => {
  
  return (
    <>
      <div className={style["week-container"]}>
        <div className={style.child}>Monday</div>
        <div className={style.child}>Tuesday</div>
        <div className={style.child}>Wednesday</div>
        <div className={style.child}>Thursday</div>
        <div className={style.child}>Friday</div>
        <div className={style.child}>Saturday</div>
        <div className={style.child}>Sunday</div>
      </div>
      <div className={style.container}>
        {dateState.daysToAddOfPrevMonthArr.map((day, index) => {
          let gridIndex = index;
          return (
            <div
              key={index}
              className="calendar-cell"
              style={{
                gridRow: Math.floor(gridIndex / 7) + 1,
                gridColumn: gridIndex % 7 + 1
              }}
          >
            {Cell(day)}
            </div>
          );
        })}{" "}
        {dateState.daysInMonth.map((day, index) => {
          let gridIndex = index + dateState.firstDayOfWeek - 1;
          return (
            <div
              key={index}
              className="calendar-cell"
              style={{
                gridRow: Math.floor(gridIndex / 7) + 1,
                gridColumn: gridIndex % 7 + 1
              }}
            >
              {Cell(day)}
            </div>
          );
        })}{" "}
        {dateState.daysToAddOfNextMonthArr.map((day, index) => {
          let gridIndex = index + dateState.daysToAddOfPrevMonthArr.length + dateState.daysInMonth.length;
          return (
            <div
              key={index}
              className="calendar-cell"
              style={{
                gridRow: Math.floor(gridIndex / 7) + 1,
                gridColumn: gridIndex % 7 + 1
              }}
            >
              {Cell(day)}
            </div>
          );
        })}
      </div>
    </>
  );
};
