import { useState } from 'react'
import "./main.css";
import styles from './App.module.css'
import { CardViewer } from './widgets/cardviewer';
import { Header } from './widgets/header';

type AppState = {};

function App() {
  const [state, setState] = useState({});
  return (
    <div className={styles.container}>
      <Header />
      <CardViewer deck={{
        cards: [{
          id: "12121",
          content: {
            front: "Test",
            back: "Test back"
          }
        }]
      }} />
    </div>
  )
}

export default App
