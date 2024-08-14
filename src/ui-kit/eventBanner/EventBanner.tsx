import React, { FC } from "react";
import style from "./style.module.css";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";

export const EventBanner: FC = () => {
  return (
    <div className={style.container}>
      <div className={style["title-container"]}>
        <p className={style["event-title"]}>Workout</p><AccessibleForwardIcon style={{ fontSize: '11px' }} />
      </div>
      <p className={style["event-time"]}>16:00-18:00</p>
    </div>
  );
};
