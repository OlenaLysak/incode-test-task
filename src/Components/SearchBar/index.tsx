import React from "react";

//Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Styling
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBarWrapper}>
      <Form.Control id="urlInput" placeholder="Enter repo URL" />
      <Button className={styles.searchBtn} variant="primary">Load issues</Button>
    </div>
  );
};

export default SearchBar;
