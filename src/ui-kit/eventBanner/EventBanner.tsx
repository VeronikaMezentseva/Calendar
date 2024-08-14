import React, { FC } from 'react';
import style from './style.module.css'


export const EventBanner: FC = () => {
   return(
     <div className={style.container}>
      <p className={style["event-title"]}>Workout</p>
     </div>
   );
 }
