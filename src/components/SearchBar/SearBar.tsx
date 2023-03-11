import Box from "@mui/material/Box";
import { Search } from "@mui/icons-material";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "../../styles/components/SearchBar/SearchBar.module.css";

export function SearchBar() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <div className={styles.searchIcon}>
            <Search color="secondary" />
          </div>
          <div className={styles.searchText}>
            <Input placeholder="Search" />
          </div>
        </div>
      </div>
    </Container>
  );
}
