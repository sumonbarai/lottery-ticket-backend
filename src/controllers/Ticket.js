const mydb = require("../db/db");
const { createError } = require("../utilities/createError");

const createTicket = (req, res, next) => {
  try {
    const { buyerName } = req.body;
    const { price } = req.body;

    const count = req.query.count ? req.query.count : 1;

    // eslint-disable-next-line eqeqeq
    if (count == 1) {
      const data = mydb.create(buyerName, price);
      return res.status(201).json({ message: "success", data });
    }

    // create multiple ticket
    if (count > 1) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push(mydb.create(buyerName, price));
      }
      return res.status(201).json({ message: "success", data });
    }
    return res.status(400).json({ message: "fail" });
  } catch (error) {
    next(error);
  }
};

const findAllTicket = (req, res, next) => {
  try {
    const data = mydb.find();
    return res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

const findSingleTicket = (req, res, next) => {
  try {
    const { ticketNumber } = req.params;
    const data = mydb.findOne(ticketNumber);
    if (!data) {
      return res.status(400).json({ message: "No Ticket found" });
    }
    return res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

const deleteTicket = (req, res, next) => {
  try {
    const { ticketNumber } = req.params;

    const data = mydb.deleteByTicketNumber(ticketNumber);
    if (!data) {
      return res.status(400).json({ message: "No Ticket found" });
    }
    return res.status(200).json({
      message:
        "return request receive success and you will get return money one days after",
    });
  } catch (error) {
    next(error);
  }
};
const updateTicket = (req, res, next) => {
  try {
    const { ticketNumber } = req.params;
    const { buyerName } = req.body;
    const { price } = req.body;

    const data = mydb.updateByTicket(ticketNumber, { buyerName, price });
    if (!data) {
      return res.status(400).json({ message: "No Ticket found" });
    }
    return res.status(200).json({
      message: "successfully update ",
    });
  } catch (error) {
    next(error);
  }
};
const drawTicket = (req, res, next) => {
  try {
    const winner = mydb.lotteryDraw();
    if (!winner) {
      const error = createError({
        message: "minimum lottery sell will be 3 ticket",
        status: 500,
      });
      return next(error);
    } else {
      const winnerList = [...winner];
      return res
        .status(200)
        .json({ message: "congratulations", winner: winnerList });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTicket,
  findAllTicket,
  findSingleTicket,
  updateTicket,
  deleteTicket,
  drawTicket,
};
