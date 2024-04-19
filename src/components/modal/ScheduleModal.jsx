import React from "react";
import "./Modal.css";

const ScheduleModal = () => {
    const isNearDate = (startDate, endDate) => {
        const currentDate = new Date();
        return currentDate >= startDate && currentDate <= endDate;
    };

    const schedule = [
        { startDate: new Date(2024, 4, 28), endDate: new Date(2024, 5, 19), description: "Złożenie wniosku" },
        { date: new Date(2024, 6, 8), description: "Uzupełnienie wniosku o świadectwo oraz wyniki egzaminu" },
        { date: new Date(2024, 6, 10), description: "Ogłoszenie listy kandydatów zakwalifikowanych" },
        { startDate: new Date(2024, 5, 21), endDate: new Date(2024, 6, 15), description: "Potwierdzenie przez rodzica kandydata woli przyjęcia (oryginał świadectwa i zaświadczenie z egzaminu osómoklasisty)" },
        { date: new Date(2024, 6, 16), description: "Ogłoszenie listy kandydatów przyjętych i kandydatów nieprzyjętych" }
    ];

    return (
        <div className="modal-window">
            <div className="modal-content">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/130/130882.png"
                    alt="back-icon"
                    className="back-icon"
                    onClick={() => window.location.reload()}
                />

                <div className="schedule-title">
                    <h1>Harmonogram rekrutacji</h1>
                </div>

                <div className="schedule-date">
                    <p>Dzisiaj mamy <b>{new Date().getDate()}.{new Date().getMonth() + 1}.{new Date().getFullYear()}</b></p>
                </div>

                <hr />

                <div className="schedule-content">
                    <ul>
                        {schedule.map((item, index) => {
                            if (item.startDate && item.endDate) {
                                return (
                                    <li key={index} className={isNearDate(item.startDate, item.endDate) ? "near" : ""}>
                                        <b>{item.startDate.toLocaleDateString("pl-PL")} - {item.endDate.toLocaleDateString("pl-PL")}:</b> {item.description}
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={index} className={isNearDate(item.date, item.date) ? "near" : ""}>
                                        <b>{item.date.toLocaleDateString("pl-PL")}:</b> {item.description}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;
