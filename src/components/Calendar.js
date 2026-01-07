import React, { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const addEvent = () => {
    if (!eventText) return;

    setEvents({
      ...events,
      [selectedDate]: [...(events[selectedDate] || []), eventText]
    });

    setEventText("");
  };

  return (
    <div style={styles.calendar}>
      <div style={styles.header}>
        <button onClick={() => setCurrentDate(new Date(year, month - 1))}>
          ◀
        </button>
        <h2>{months[month]} {year}</h2>
        <button onClick={() => setCurrentDate(new Date(year, month + 1))}>
          ▶
        </button>
      </div>

      <div style={styles.days}>
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div style={styles.dates}>
        {[...Array(firstDay)].map((_, i) => (
          <div key={i}></div>
        ))}

        {[...Array(lastDate)].map((_, i) => {
          const dateKey = `${year}-${month+1}-${i + 1}`;
          return (
            <div
              key={i}
              style={styles.date}
              onClick={() => setSelectedDate(dateKey)}
            >
              {i + 1}
              {events[dateKey] && <div style={styles.dot}></div>}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div style={styles.eventBox}>
          <h3>Events on {selectedDate}</h3>

          {(events[selectedDate] || []).map((e, i) => (
            <p key={i}>• {e}</p>
          ))}

          <input
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            placeholder="Add event"
          />
          <button onClick={addEvent}>Add</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  calendar: {
    width: "350px",
    margin: "40px auto",
    fontFamily: "Arial",
    border: "1px solid black",
    padding: "10px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  days: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginTop: "10px",
    fontWeight: "bold",
    textAlign: "center"
  },
  dates: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginTop: "10px",
    textAlign: "center"
  },
  date: {
    padding: "10px",
    cursor: "pointer",
    position: "relative"
  },
  dot: {
    width: "6px",
    height: "6px",
    background: "red",
    borderRadius: "50%",
    margin: "4px auto 0"
  },
  eventBox: {
    marginTop: "20px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px"
  }
};

export default Calendar;
