import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Hello html</h1>
      <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      
      <button className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default App;
