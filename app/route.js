const express = require("express");
const TicketController = require("../src/controllers/Ticket");

const route = express.Router();

// heath route
route.get("/heath", (req, res) => {
  res.status(200).json({ message: "success" });
});

// ticket route
route.post("/create-ticket", TicketController.createTicket);
route.get("/get-ticket/:ticketNumber", TicketController.findSingleTicket);
route.get("/get-all-ticket", TicketController.findAllTicket);
route.patch("/update-ticket/:ticketNumber", TicketController.updateTicket);
route.delete("/return-ticket/:ticketNumber", TicketController.deleteTicket);

route.get("/draw", TicketController.drawTicket);

module.exports = route;
