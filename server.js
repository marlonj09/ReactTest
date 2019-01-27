const express = require("express");
const app = express();

app.use(express.json());

app.post("/react", (req, res) => {
  const name = req.body.user.name;
  let message = "";

  if (name.length > 0) {
    if (name === "wildtic") {
      message = "Hi Wildtic, we got your call!";
    } else {
      if (name.length > 15) {
        message =
          "Hey your name is  too long!<br>Please try another one shorter.";
      } else {
        message = "Hi " + name + " who are you?";
      }
    }
  } else message = "Please, enter a valid name!";

  res.send(message);
});

const PORT = 5000;

app.listen(PORT, () => console.log("servidor is listening on port 5000"));
