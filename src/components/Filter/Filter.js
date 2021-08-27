import React from "react";
import style from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions"
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input className={style.input} value={value} onChange={onChange} />
  </>
);

const mapStateToProps = (state) => ({
  value: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChange: (ev) => {
    return dispatch(changeFilter(ev.currentTarget.value))
  }
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
