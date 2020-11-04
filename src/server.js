import app from "./app";

const portServer = app.get("PORT_SERVER");

app.listen(portServer, () => {
  console.log(`http://localhost:${portServer} 👌`);
});
