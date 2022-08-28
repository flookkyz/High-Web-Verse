import React, { useEffect, useState } from "react";
import ContactDataService from "../../service/verse_contact";

const ContactList = ({ getBookId }) => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const data = await ContactDataService.getAllContact();
    console.log(data.docs);
    setContact(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ContactDataService.deleteContact(id);
    getContact();
  };
  return (
    <div className="pt-[100px] px-[100px]">
      <div className="mb-2 flex justify-end">
        <button
          className="bg-gradient-to-r from-[#FC6A19] to-[#E9B531] py-2 px-16 mt-[50px] rounded-full"
          onClick={getContact}
        >
          Refresh List
        </button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-[50px] text-white">
          <table class="w-full text-sm text-left">
            <thead class="uppercase bg-[#1d2531]">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Email
                </th>
                <th scope="col" class="py-3 px-6">
                  Massage
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contact.map((doc, index) => {
                return (
                  <tr class="bg-[#334155] hover:bg-gray-600 ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium whitespace-nowrap "
                    >
                      {doc.Name}
                    </th>
                    <td class="py-4 px-6">{doc.Email}</td>
                    <td class="py-4 px-6">{doc.MassageContact}</td>
                    <td class="py-4 px-6">
                      <button
                        variant="danger"
                        className="text-red-600"
                        onClick={(e) => deleteHandler(doc.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default ContactList;
