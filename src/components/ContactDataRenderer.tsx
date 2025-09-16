
import React, { useState } from "react";

import type { Contact } from "../types/contact";

type props = {
    contacts: Contact[];
}
const ContactDateRender: React.FC<props> = ({ contacts }) => {
    const [filter, setFilter] = useState("");

    const filteredContacts = contacts.filter(
        (c) => (c.name + c.email).toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <div className="main-section">
            
            <div className="data-section">
                <h1>Contact Data</h1>
                <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}

                />

                <ul className="main">
                    
                    {filteredContacts.map((c) => (
                        <li key={c.id} className=" filter-section">
                            <p id="content">{c.name}</p>
                            <p id="content">{c.phone}</p>
                            <p id="content">{c.email}</p>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )

}

export default ContactDateRender;
