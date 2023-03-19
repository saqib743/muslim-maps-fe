import { Search } from "@mui/icons-material";
import Input from "@mui/material/Input";
import Container from "@mui/material/Container";
import styles from "../../styles/components/SearchBar/SearchBar.module.css";

export function SearchBar({ backGroundColor = "" }) {
  return (
    <Container>
      <div
        className={styles.container}
        style={{ backgroundColor: backGroundColor }}
      >
        <div className={styles.flexRow}>
          <div className={styles.searchIcon}>
            <Search color="secondary" />
          </div>
          <div className={styles.searchText}>
            <Input
              placeholder="Search"
              fullWidth
              disableUnderline
              style={{
                backgroundColor: backGroundColor,
                color: "#424244",
                fontFamily: "Gilroy",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "26px",
                letterSpacing: "0.01em",
                textAlign: "left",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
