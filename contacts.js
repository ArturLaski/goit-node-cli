import { resolve } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { nanoid } from "nanoid";


const contactsPath = resolve("db", "contacts.json");

const updateContacts = (contacts) =>
  writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export async function listContacts() {
  
  const data = await readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

export async function getContactById(contactId) {
  
  const contacts = await listContacts();
  const result = contacts.find(({ id }) => id === contactId);

  return result || null;
}

export async function removeContact(contactId) {
  
  const contacts = await listContacts();
  console.log(contacts);
  const index = contacts.findIndex(({ id }) => id === contactId);

  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);

  await updateContacts(contacts);

  return result;
}

export async function addContact(name, email, phone) {
 
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContacts(contacts);

  return newContact;
}