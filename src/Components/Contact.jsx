import React, { useState } from "react";
import ContactDataService from "../service/verse_contact"

const Contact = ({id , setContactId}) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MassageContact, setMassageContact] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const Submit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (Name === "" || Email === "" || MassageContact === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newContact = {
      Name,
      Email,
      MassageContact,
    };
    console.log(newContact);

    try {
        if (id !== undefined && id !== "") {
          await ContactDataService.updateContact(id, newContact);
          setContactId("");
          alert('คุณเคยส่งข้อมูลนี้แล้ว ระบบจะอัปเดทข้อมูลของคุณเป็นข้อมูลใหม่')
          setMessage({ error: false, msg: "Updated successfully!" });
          console.log(message);
        } else {
          await ContactDataService.addContact(newContact);
          alert('ส่งข้อมูลของคุณเรียบร้อยแล้ว')
          setMessage({ error: false, msg: "New Book added successfully!" });
          console.log(message);
        }
      } catch (err) {
        setMessage({ error: true, msg: err.message });
        console.log(message);
      }
      
      setName("");
      setEmail("");
      setMassageContact("");
    };
  

  return (
    <div className="bg-[#00081E] py-[100px] flex justify-center text-white">
      <div className="flex flex-col w-[80%]">
        <span className="text-[#4AE3EA] text-[48px] font-bold text-center ">
          CONTACT
        </span>
        <form onSubmit={Submit}>
        <center>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#334155] rounded-lg text-[16px] py-3 px-3 w-[60%] mt-[80px]"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </center>
        <center>
          <input
            type="text"
            placeholder="Email"
            className="my-[40px] bg-[#334155] rounded-lg text-[16px] py-3 px-3 w-[60%]"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </center>
        <center>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="bg-[#334155] rounded-lg text-[16px] py-3 px-3 w-[60%]"
            value={MassageContact}
            onChange={(e)=>setMassageContact(e.target.value)}
          />
        </center>
        <center>
          <button className="bg-gradient-to-r from-[#FC6A19] to-[#E9B531] py-2 px-16 mt-[50px] rounded-full">
            SEND MESSAGE
          </button>
        </center>
        </form>
      </div>
    </div>
  );
}

export default Contact;
