import { Command } from "commander";
import { listContacts, getContactById, addContact, removeContact } from "./contacts.js";

const program = new Command();

program
  .option("-a, --action <type>", "Choose action")
  .option("-i, --id <type>", "Contact ID")
  .option("-n, --name <type>", "Contact Name")
  .option("-e, --email <type>", "Contact Email")
  .option("-p, --phone <type>", "Contact Phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;
    case "get":
      console.log(await getContactById(id));
      break;
    case "add":
      console.log(await addContact(name, email, phone));
      break;
    case "remove":
      console.log(await removeContact(id));
      break;
    default:
      console.warn("Unknown action. Use -a list | get | add | remove");
  }
}

invokeAction(options);
