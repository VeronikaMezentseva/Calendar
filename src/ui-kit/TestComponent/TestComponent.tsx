import React, { FC } from 'react';
import style from './style.module.css'

interface TestComponentProps {}

export const TestComponent: FC = () => {
   return(
     <button className={style.button}>Click!</button>
   );
 }
export default TestComponent;
