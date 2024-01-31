import React from "react";
import { useLocation } from "react-router-dom";

function MovieTicket() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title") || "";

  return (
    <section>
      <div className="container">
        <div className="book__ticket__form">
          <h3>Book Ticket</h3>
          <form>
            <div className="input__group">
              <label>Movie Title</label>
              <input type="text" value={title} readOnly />
            </div>
            <div className="input__group">
              <label>The date you want to attend</label>
              <input type="date" />
            </div>
            <div className="input__group">
              <label>What time suits you?</label>
              <input type="time" />
            </div>
            <div className="input__group">
              <label>Number of tickets</label>
              <input type="number" />
            </div>
            <div className="input__group">
              <label>Reservation Name</label>
              <input type="text" />
            </div>
            <div className="input__group">
              <label>Email Address</label>
              <input type="text" />
            </div>

            <button disabled>Book Ticket</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MovieTicket;
