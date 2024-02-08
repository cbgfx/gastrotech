const express = require("express");
const mongodb = require('mongodb');
const authent = "7guzJtWeNRmx";

function routes(Display) {
    const displayViewRouter = express.Router();

    displayViewRouter
        .route("/displayRouter")

        .get((req, res) => {
            console.log("Received Get Request...")
            if (req.query.auth == authent) {
            const query = { storeID: req.query.storeID };

            Display.find(query, (err, displays) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(displays);
            }).sort({ order: 1 });
        } else {
            console.log("No Authoritayyy");
        }
        });

    displayViewRouter
        .route("/display/create")

        .post((req, res) => {
            const display = new Display(req.body);

            display.save((err, newDisplay) => {
                if (err) {
                    return res.status(400).send({ errorMessage: `Could not create new Pan.` });
                }
                return res.status(201).json(newDisplays);
            });
        });

    displayViewRouter
        .route("/display/delete")

        .delete((req, res) => {
            const query = { _id: new mongodb.ObjectID(req.query.gName) }
            Display.deleteOne(query, (e) => {
                if (e) {
                    return res.send(e);
                }
                return res.sendStatus(204);
            }).sort({ order: 1 });
        });

    return displayViewRouter;
}

module.exports = routes;
