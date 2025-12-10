import React from "react";
import BuArifah from "../../assets/BuArifah.png";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    width: "300px",
    height: "430px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  imageWrapper: {
    width: "100%",
    height: "260px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "21px",
    fontWeight: "700",
    color: "#1F4529",
    margin: "0",
    lineHeight: "1.3",
  },
  title: {
    fontSize: "21px",
    fontWeight: "700",
    color: "#1F4529",
    margin: "4px 0",
  },
  uni: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4F7355",
    marginTop: "5px",
  },
};

const DosenPembimbing = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            src={BuArifah}
            alt="Dr. Arifah Khusnuryani"
            style={styles.image}
          />
        </div>

        <p style={styles.name}>Dr.</p>
        <p style={styles.name}>Arifah Khusnuryani,</p>
        <p style={styles.title}>M.Si.</p>
        <p style={styles.uni}>UIN Sunan Kalijaga</p>
      </div>
    </div>
  );
};

export default DosenPembimbing;
