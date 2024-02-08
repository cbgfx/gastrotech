const express = require("express");
const mongodb = require('mongodb');
const authent = "7guzJtWeNRmx";

function routes(Display) {
    const displayViewRouter = express.Router();

    displayViewRouter
        .route("/display")

        .get(async (req, res) => {
            if (req.query.auth == authent) {
                const query = { storeID: req.query.storeID };

               const allDisplay = await Display.find(query).sort({order: 1})
                    return res.json(allDisplay);
             } else {
                console.log("No Authoritayyy");
             }
        });

    displayViewRouter
        .route("/display/create")

        .post((req, res) => {
            console.log(req.body.storeID, "batched:", req.body.gName);
            const newDisplay = new Display(req.body);
            newDisplay.save(newDisplay)
            return res.status(201).json(newDisplay);
            });

    displayViewRouter
        .route("/display/delete")

        .delete((req, res) => {
            if (req.query.auth == authent) {
            Display.deleteOne({ storeID: req.body.storeID, gName: req.body.gName }).then(function(){
                console.log("Data deleted"); // Success
                return res.sendStatus(204);
            }).catch(function(error){
                console.log(error); // Failure
            });
            } else {
                console.log("No Authoritay!!")
            }
        });

    return displayViewRouter;
}

module.exports = routes;
