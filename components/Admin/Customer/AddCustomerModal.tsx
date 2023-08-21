"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  aboutMe?: string;
  state: string;
}
export default function AddCustomerModal({
  openModal,
  setOpenModal,
  data,
  addData,
  mode,
}: {
  openModal: any;
  setOpenModal: any;
  data: FormData;
  addData: any;
  mode: string;
}) {
  const [formData, setFormData] = useState<FormData>({ ...data });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addData(formData);
  };
  return (
    <>
      <Modal
        show={openModal === "form-elements"}
        size="4xl"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add a Customer
            </h3>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Username
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="username"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address
                        </label>
                        <input
                          onChange={handleChange}
                          name="email"
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          First Name
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="firstName"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Last Name
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="lastName"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="relative w-full mb-3 px-4">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number
                      </label>
                      <input
                        onChange={handleChange}
                        type="number"
                        name="phone"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="address"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          City
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="city"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Country
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="country"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Postal Code
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="postalCode"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          About me
                        </label>
                        <textarea
                          onChange={handleChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          rows={4}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
