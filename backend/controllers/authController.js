import "dotenv/config";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({
        error: "Email and password don't match.",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.cookie("t", token, {
      expire: new Date() + 9999,
    });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(401).json({
      error: "Could not sign in",
    });
  }
};

const signout = (req, res) => {
  res.clearCookie("t");

  return res.status(200).json({
    message: "signed out",
  });
};

const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  requestProperty: "auth",
});

export { signin, signout, requireSignin };
