# ICORP Test Task — Node.js One-File Solution

This project demonstrates a Node.js script that interacts with a test API using **HTTP communication** and **webhooks** to retrieve a final message by combining two parts of a code.

---

## **Project Overview**

The script performs the following steps:

1. Sends an **initial POST request** to the API to receive `part1`.
2. Waits for **part2** to be delivered via a **webhook** (`/hook` endpoint).
3. Combines `part1` and `part2` into a **final code**.
4. Sends a **GET request** with the combined code to retrieve the final message.
5. Logs the **final message and final code** to the console.

> This project is implemented in a **single Node.js file** for simplicity.

---

## **Technologies Used**

- Node.js
- Express.js
- Axios

---

## **Installation**

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
