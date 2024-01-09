const contacts = ["Maria", "Elisa", "Oli", "Melina"];

export const sum = (a, b) => {
  return a + b;
};

export const getfirstContact = () => {
  return "Maria";
};

export const getContacts = () => {
  return contacts;
};

export const addContacts = (name) => {
  contacts.push(name);
};
