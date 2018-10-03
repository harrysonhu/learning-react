import express from "express";
import authenticate from "../middlewares/authenticate";
// FIX
//import request from "request-promise";
import { parseString } from "xml2js";

const router = express.Router();
router.use(authenticate);

router.get("/search", (req, res) => {
  request
    .get(
      `https://www.goodreads.com/search/index.xml?key=ujEKbFekz1KKrYUq6nng&q=${
        req.query.q
      }`
    )
    .then(result => res.json({ result }));

  // res.json({
  //   books: [
  //     {
  //       goodreadsId: "1",
  //       title: "1984",
  //       authors: "Orwell",
  //       covers: [
  //         "https://images.gr-assets.com/books/1348990566l/5470.jpg",
  //         "https://images.gr-assets.com/books/1504611957l/9577857.jpg"
  //       ],
  //       pages: 198
  //     },
  //     {
  //       goodreadsId: "2",
  //       title: "Three Men in a Boat",
  //       authors: "Jerome K. Jerome",
  //       covers: [
  //         "https://images.gr-assets.com/books/1392791656l/4921.jpg",
  //         "https://images.gr-assets.com/books/1312036878l/627830.jpg"
  //       ],
  //       pages: 256
  //     }
  //   ]
  // });
});

export default router;
