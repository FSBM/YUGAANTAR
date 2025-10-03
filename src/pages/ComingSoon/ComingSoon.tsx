import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ComingSoon.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { festTitle } from "../../assets/Images";

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <main className={`${styles.comingSoonPage} ${styles.background}`}>
        <Navbar />
        <div className={styles.container}>
          <img src={festTitle} className={styles.festName} alt="Yugaantar Festival" />
          
          <div className={styles.comingSoonContent}>
            <h1 className={styles.comingSoonTitle}>
              <span className={styles.gradientText}>COMING SOON</span>
            </h1>
            
            <div className={styles.messageContainer}>
              <p className={styles.mainMessage}>
                This page will unlock soon
              </p>
            </div>

            <button onClick={handleGoHome} className={styles.homeButton}>
              Go back to home page
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
