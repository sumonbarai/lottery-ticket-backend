const Ticket = require("../models/Ticket");
const getRandomIndex = require("../utilities/getRandomIndex");

class Db {
  constructor() {
    this.tickets = [];
  }

  // create new ticket
  create(buyerName, price) {
    const ticket = new Ticket(buyerName, price);
    this.tickets.push(ticket);
    return ticket;
  }

  // find ticket by ticketNumber
  findOne(ticketNumber) {
    const data = this.tickets.find(
      (item) => item.ticketNumber === ticketNumber
    );
    return data;
  }

  // find all ticket and return all ticket
  find() {
    return this.tickets;
  }

  // delete ticket by ticketNumber
  deleteByTicketNumber(ticketNumber) {
    const index = this.tickets.find(
      (item) => item.ticketNumber === ticketNumber
    );

    if (!index) {
      return false;
    } else {
      this.tickets.splice(index, 1);
      return true;
    }
  }

  // update by ticket with buyer name and price
  updateByTicket(ticketNumber, { buyerName, price }) {
    const updateAbleTicket = this.findOne(ticketNumber);
    if (!updateAbleTicket) {
      return false;
    } else {
      updateAbleTicket.buyerName = buyerName
        ? buyerName
        : updateAbleTicket.buyerName;
      updateAbleTicket.price = price ? price : updateAbleTicket.price;
      return true;
    }
  }

  // lottery draw
  lotteryDraw() {
    const winner = new Set();
    if (this.tickets.length >= 3) {
      for (let i = 0; winner.size < 3; i++) {
        const index = getRandomIndex(this.tickets);
        winner.add(this.tickets[index]);
      }
      return winner;
    }
    return false;
  }
}

const mydb = new Db();
module.exports = mydb;
