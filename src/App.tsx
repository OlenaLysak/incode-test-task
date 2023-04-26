import React from "react";

//Components
import SearchBar from "./Components/SearchBar";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.appWrapper}>
      <SearchBar />
    </div>
  );
}

export default App;
