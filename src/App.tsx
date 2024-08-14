import React, { useEffect } from "react";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { ButtonExample } from "./ui-kit/buttonExample/ButtonExample";

export const App: FC = () => {
  const [test, setTest] = useState<string>();
  useEffect(() => {
    setTest('hiiiiii!');
  }, []);
  return (
    <>
      <h1 className={styles.title}>{test}</h1>
      <ButtonExample></ButtonExample>
    </>
  );
}