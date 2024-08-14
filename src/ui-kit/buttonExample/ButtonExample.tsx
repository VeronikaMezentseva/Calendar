import React from "react";
import { FC } from "react";
import style from './style.module.css'

export const ButtonExample: FC = () => {
  return(
    <button className={style.button}>Click!</button>
  );
}