import React from "react";
import Prescription from "../../../components/Prescription";
import Vaccine from "../../../components/Vaccine";
import MedCard from "../../../components/MedCard";
import PrescriptionForm from "../../../components/PrescriptionForm";
import Button from "../../../components/Button";

// import useScreenWidth from "@/hooks/useScreenWidth";
import useScreenWidth from "../../../hook/useScreenWidth";

// import style
import styles from "./style.module.css";

const index = () => {
  const widthSize = useScreenWidth();
  const [toggle, SetToggle] = React.useState(false);
  return (
    <>
      <PrescriptionForm />
      <h2>Patient Dashboard</h2>
      <div className={styles.card}>
        <MedCard />
      </div>
      <div
        className={styles.toggleBtn}
        style={{ display: widthSize < 768 ? "flex" : "none" }}
      >
        <Button
          title={toggle ? "Prescription" : "Vaccine"}
          function={() => SetToggle(!toggle)}
        />
      </div>
      <div className={styles.main}>
        <div
          className={styles.Prescription}
          style={{ display: widthSize < 768 ? (toggle ? "none" : "flex") : "" }}
        >
          <h3 className={styles.title}>Prescription</h3>
          <Prescription />
          <Prescription />
          <Prescription />
          <Prescription />
          <Prescription />
        </div>
        <div
          className={styles.Vaccine}
          style={{ display: widthSize < 768 ? (toggle ? "flex" : "none") : "" }}
        >
          <h3 className={styles.title}>Vaccine</h3>
          <Vaccine />
          <Vaccine />
          <Vaccine />
          <Vaccine />
          <Vaccine />
        </div>
      </div>
    </>
  );
};

export default index;
