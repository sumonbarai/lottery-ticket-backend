const shortid = require("shortid");

class Ticket {
  constructor(name, price) {
    this.ticketNumber = shortid.generate();
    this.buyerName = name;
    this.price = price;
    this.timeStamp = new Date().toISOString();
  }
}

module.exports = Ticket;
