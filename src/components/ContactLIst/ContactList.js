import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import style from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-actions";
import * as contactsOperations from '../../redux/contacts/contacts-operations'
import { getVisibleItems, getLoading } from "../../redux/contacts/contacts-selectors";

const ContactList = ({ itemsRender, deleteItem }) => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])
  return (
    <>
      {itemsRender.length ? <div className={style.contacts__container}>
        <h2>Contacts</h2>
        <ul className={style.list}>
          {itemsRender.map(({ name, id, number }) => (
            <li className={style.item} key={id}>
              <p className={style.userName}>{name}: </p>
              <p>{number}</p>
              <button
                type="button"
                className={style.button}
                onClick={() => deleteItem(id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        {console.log(loading)}
      </div> : loading ? <h3>Loading...</h3>: <div className={style.nothing_search}>Nothing to search 🙆‍♂️</div>}
      </>
  )
};

const mapStateToProps = (state) => {
  return {
    itemsRender: getVisibleItems(state),
  };

};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(contactsOperations.fetchDeleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// export default ContactList
