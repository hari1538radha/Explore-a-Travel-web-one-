import { signupModel } from "../Model/Model.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  // res.send("inside");
  const query = req.query;
  const user = await signupModel.findOne({ userEmail: query.userEmail });
  if (user) {
    const validPassword = await bcrypt.compare(
      query.userPassword,
      user.userPassword
    );
    if (validPassword) {
      res.status(200).send({ message: "Valid" });
    } else {
      res.status(400).send({ error: "Invalid Password" });
    }
  } else 
  {
    res.status(401).send({ error: "User does not exist" });
  }
};
