import { Outlet } from "react-router";

import MainNavigation from "../components/MainNavigation";

import styles from "./Root.module.css";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
