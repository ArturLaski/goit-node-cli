import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      return console.log("list", contacts);

    case "get":
      // ... id
      const contact = await getContactById(id);
      return console.log("get", contact);

    case "add":
      // ... name email phone
      const addedContact = await addContact(name, email, phone);
      return console.log("add", addedContact);

    case "remove":
      // ... id
      const removedContact = await removeContact(id);
      return console.log("remove", removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);