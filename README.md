# GoIT Node.js CLI (Contact Manager)

## Project Description

This is a simple **Node.js CLI application** for managing contacts. It allows users to **list, retrieve, add, and remove
contacts** via command-line arguments using the `commander` package.

---

## Project Structure

```
goit-node-cli/
│── src/                
│   ├── contacts.js     # Module with CRUD functions for contacts
│   ├── index.js        # Main CLI entry point
│── .gitignore          
│── package.json        # Dependencies
│── contacts.json       # Local database (list of contacts)
│── README.md          
```

---

## Available Commands

You can execute the application using the following CLI commands:

### List all contacts

```sh
node src/index.js -a list
```

---

### Get a contact by ID

```sh
node src/index.js -a get -i <contact_id>
```

---

### Add contact

```sh
node src/index.js -a add -n "John Doe" -e "john@example.com" -p "123-456-7890"
```

---

### Remove a contact by ID

```sh
node src/index.js -a remove -i <contact_id>
```

---
