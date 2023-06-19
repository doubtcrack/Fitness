import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Workouts from "../components/workouts/workouts.jsx";
import About from "../components/about";
import Heading from "../components/heading";
import Services from "../components/services/services";
import LoadingAnimation from "../components/pageloader";
import { useEffect, useState } from "react";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate a 2-second delay
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? <LoadingAnimation /> : ""}
      <div className={styles.wrapper}>
        <div className={styles.wrapper_padding}>
          <Navbar />
          <Main />
          <Heading name={"Top Workouts"} />
          <Workouts />
          <About />
          <Heading name={"Top Services"} />
        </div>
        <Services />
      </div>
    </>
  );
}

// const HeaderLink = ({ href, children }) => (
//   <Link href={href} passHref>
//     <a className={styles.headerLink}>{children}</a>
//   </Link>
// );
