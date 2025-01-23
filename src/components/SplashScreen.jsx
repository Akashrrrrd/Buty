import React, { useEffect } from "react";
import { motion } from "framer-motion";
import nav_logo from "./../assets/nav_logo.png";

const SplashScreen = ({ onAnimationComplete, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete, duration]);

  const styles = {
    splashContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(26, 15, 41, 0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
    },
    logo: {
      maxWidth: "100%",
      height: "auto",
      maxHeight: "150px",
    },
  };

  return (
    <motion.div
      style={styles.splashContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={nav_logo}
        alt="Logo"
        style={styles.logo}
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default SplashScreen;
