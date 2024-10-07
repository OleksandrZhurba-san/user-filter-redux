import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";
import styles from "./styles.module.css";

function Filter({ filterValue, setFilterValue }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
    console.log(filterValue);

    filterValue && setValue(filterValue);
  }, []);

  function handleChange(event) {
    const currentFilterValue = event.target.value;
    setValue(currentFilterValue);
    setFilterValue(currentFilterValue);
  }

  return (
    <div className={styles.input_container}>
      <h1>User List</h1>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="enter user name to filter"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filterValue: state.filterValue,
});
const mapDispatchToProps = (dispatch) => ({
  setFilterValue: (value) => dispatch(setFilter(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
