const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const mongodb = require("mongodb"); // Used for Mongo
const middleware = require("../middleware");

const { hash } = require("bcrypt");

function routes(User) {
  const userRouter = express.Router();

  userRouter
    .route("/user/register")

    .post((req, res) => {
      // In case we want extra security, we can add a custom header to stop random malicious attemps
      // const h = req.header['x-custom-id']
      // if (!h) {
      //   return;
      // }
      const user = new User(req.body);
      console.log("User: ", user);
      const queery = {
        $or: [{ username: user.username }, { email: user.email }],
      };
      console.log("Registering: ", user.username);
      User.findOne(queery, (err, Erruser) => {
        if (err) {
          return res.send(err);
        }
        if (Erruser) {
          console.log("Found something....", Erruser);
          return res.status(400).send({ errorMessage: `User already exists` });
        } else {
          console.log("Found nothing! continuing with user", user.username);
          user.encrypt(user.password, (err, hash) => {
            if (err) {
              console.log(err);
            }
            user.password = hash;
          });

          user.save(function (err, savedUser) {
            if (err) {
              return res
                .status(400)
                .send({ errorMessage: `Could not create user.` });
            }
            return res.status(201).json(savedUser);
          });
        }
      });
    });

  userRouter
    .route("/user/login")

    .post((req, res) => {
      let { username, password } = req.body;
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return res.send(err);
        }

        if (!user) {
          return res.status(401).send({ errorMessage: `User not found.` });
        }

        user.comparePassword(password, function (valid) {
          if (!valid) {
            return res
              .status(401)
              .send({ errorMessage: `Password incorrect.` });
          }
          const sessionToken = jwt.sign(
            {
              id: user._id,
              username: user.username,
              name: user.name,
            },
            config.jwt.secret,
            { expiresIn: "24h" }
          );
          // sanitized = hand pick the object properties we return
          const sanitizedUser = user.tokenSanitize();
          sanitizedUser.token = sessionToken;
          req.token = sessionToken;
          user.save((err) => {
            if (err) {
              console.log("Save error", err);
              return res.send(err);
            }
          });
          
          return res.json(sanitizedUser);
        });
      });
    });

  userRouter
    .route("/user/appRefresh")

    .post((req, res) => {
      let { username, header } = req.body;
      if (header === "s@3Q_NMTx!g%+cDkg+8VVmBATWfm%W6W") {
        User.findOne({ username: username }, (err, user) => {
          if (err) {
            return res.send(err);
          }
          if (!user) {
            return res.status(401).send({ errorMessage: `User not found.` });
          }

          const sessionToken = jwt.sign(
            {
              id: user._id,
              username: user.username,
              name: user.name,
            },
            config.jwt.secret,
            { expiresIn: "24h" }
          );

          // sanitized = hand pick the object properties we return
          const sanitizedUser = user.tokenSanitize();
          sanitizedUser.token = sessionToken;
          req.token = sessionToken;

          user.save((err) => {
            if (err) {
              console.log("Save error", err);
              return res.send(err);
            }
            return res.json(sanitizedUser);
          });
        });
      } else {
        console.log("Not Authorized");
        return res
          .status(401)
          .send({ errorMessage: `Unauthenticated request` });
      }
    });

  userRouter.route("/user").get(middleware.isAuthenticated, (req, res) => {
    User.findOne({ _id: req.query.id }, function (err, dbUser) {
      if (err || !dbUser) {
        console.log("No user Found");
        return res.status(401).send({ errorMessage: `User not found` });
      }

      return res.json(dbUser);
    }).select({ _id: 1, username: 2, avatar: 3, email: 4, name: 5, tier: 6 });
  });

  userRouter.route("/user/refresh").get((req, res) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.status(401).send({ errorMessage: `Unauthenticated request` });
    }

    const decoded = jwt.verify(
      authHeader,
      config.jwt.secret,
      function (err, decoded) {
        if (err) {
          console.log("401, exit #2");
          return res
            .status(403)
            .send({ errorMessage: `Unauthenticated request` });
        }
        User.findOne({ _id: decoded.id }, function (err, dbUser) {
          if (err || !dbUser) {
            console.log("No user Found");
            return res.status(401).send({ errorMessage: `User not found` });
          }

          return res.json(dbUser);
        }).select({
          _id: 1,
          username: 2,
          email: 3,
          name: 4,
        });
      }
    );
  });

  userRouter
    .route("/user/edit")

    .patch(middleware.isAuthenticated, (req, res) => {
      const query = { _id: new mongodb.ObjectID(req.query.id) };
      User.findOne(query, (err, userToEdit) => {
        if (err) {
          return res.send(err);
        }
        if (req.body.name !== null) {
          userToEdit.name = req.body.name;
        }
        if (req.body.email !== null) {
          userToEdit.email = req.body.email;
        }
        userToEdit.save((err) => {
          if (err) {
            console.log("Save error", err);
            return res.send(err);
          }
        });
        return res.json(userToEdit);
      });
    });

  userRouter
    .route("/user/editPass")

    .patch(middleware.isAuthenticated, (req, res) => {
      const query = { _id: new mongodb.ObjectID(req.query.id) };
      User.findOne(query, (err, userToEdit) => {
        if (err) {
          return res.send(err);
        }

        userToEdit.password = req.body.password; //Helper method on user model will encrypt before save
        if (err) {
          console.log("Save error");
          return res.send(err);
        }

        return res.json(userToEdit);
      });
    });

  userRouter
    .route("/user/delete")

    .delete(middleware.isAuthenticated, (req, res) => {
      const userQuery = { _id: new mongodb.ObjectId(req.query.id) };
      User.deleteOne(userQuery, (e) => {
        if (e) {
          return res.send(e);
        }
        return res.sendStatus(204);
      });
    });

  return userRouter;
}

module.exports = routes;
