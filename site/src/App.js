
import './App.css';
import styles from './main.module.css'

function App() {
  return <div className={styles.page}>
    <div className={styles.container}>
      <div className={styles.log1}>
        <h1 className={styles.h}>Log in</h1>
        <div className={styles.enterblock1}>
          <input className={styles.data} placeholder="enter your username" type="text"/>
          <input className={styles.data} placeholder="enter your password" type="password"/>
          <button className={styles.but}>Log in</button>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.log2}>
        <h1 className={styles.h}>Log in</h1>
        <div className={styles.enterblock1}>
          <input className={styles.data} placeholder="create name" type="text"/>
          <input className={styles.data} placeholder="create password" type="password"/>
          <input className={styles.data} placeholder="confirm password" type="password"/>
          <button className={styles.but}>Sign in</button>
        </div>
      </div>
      </div>
  </div>
}

export default App;
