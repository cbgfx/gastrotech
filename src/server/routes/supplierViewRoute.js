const express = require("express");
const mongodb = require('mongodb');
const middleware = require("../middleware");

function routes(Supplier, Item) {
    const supplierViewRouter = express.Router();

    supplierViewRouter
        .route("/suppliers")

        .get(middleware.isAuthenticated, (req, res) => {
            const query = {};

            Supplier.find(query, (err, suppliers) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(suppliers);
            }).sort({name: 1});
        });

    supplierViewRouter
        .route("/suppliers/create")

        .post(middleware.isAuthenticated, (req, res) => {
            const suppliers = new Supplier(req.body);
            console.log("Creating new Supplier:", req.body)
            suppliers.save((err, newSuppliers) => {
                if (err) {
                    return res.status(400).send({ errorMessage: `Could not create supplier.` });
                }
                return res.status(201).json(newSuppliers);
            });
        });

    supplierViewRouter
    .route("/suppliers/edit")
  
    .patch(middleware.isAuthenticated, (req, res) => {
        const query = { _id: req.query.id };
        Supplier.findOne(query, (err, supplierToEdit) => {
          if (err) {
            return res.send(err);
          }
          if (req.body.name !== null) {
            supplierToEdit.name = req.body.name;
          }
          if (req.body.contact !== null) {
            supplierToEdit.contact = req.body.contact;
          }
          if (req.body.phone !== null) {
            supplierToEdit.phone = req.body.phone;
          }
          if (req.body.email !== null) {
            supplierToEdit.email = req.body.email;
          }
          supplierToEdit.save((err) => {
            if (err) {
              console.log("Save error", err);
              return res.send(err);
            }
          });
          return res.json(supplierToEdit);
        });
    });

    supplierViewRouter
        .route("/suppliers/delete")

        .delete(middleware.isAuthenticated, (req, res) => {
            Supplier.deleteOne({_id: new mongodb.ObjectId(req.query.id)}, (e) => {
                if (e) {
                    return res.send(e);
                }
                return res.sendStatus(204);
            });
        });

    return supplierViewRouter;
}

module.exports = routes;
