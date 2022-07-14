import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Workouts from "../components/workouts/workouts.jsx";
import About from "../components/about";
import Heading from "../components/heading";
import Services from "../components/services/services";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Main />
      <Heading name={"Top Workouts"} />
      <Workouts />
      <About />
      <Heading name={"Top Services"} />
      <Services />
    </div>
  );
}

// const HeaderLink = ({ href, children }) => (
//   <Link href={href} passHref>
//     <a className={styles.headerLink}>{children}</a>
//   </Link>
// );
