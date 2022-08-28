import { createStore } from "redux";

const initialState = {
  id: 0,
  name: "",
  email: "",
  showConvo: false,
  chat: [],
  showTaskbar: false,
};

const reducer = (state = initialState, action) => {
  if (action.type == "ChangeActiveConvo") {
    const contact = action.payload;
    let newState = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      showConvo: contact.showConvo,
      chat: contact.chat,
    };

    return newState;
  } else if (action.type == "SHOW_CONVO") {
    const contact = action.payload;
    let newState = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      showConvo: true,
      chat: contact.chat,
    };
    return newState;
  }
  return state;
};

const store = createStore(reducer);
export default store;
