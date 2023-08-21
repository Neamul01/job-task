import { Button, Label } from "flowbite-react";
import React from "react";

interface FormValues {
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  email: string;
  phone: string;
  cover_letter: string;
}
export default function PersonalInfo() {
  const [form, setForm] = React.useState<FormValues>({
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "male",
    email: "",
    phone: "",
    cover_letter: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newForm: Record<string, any> = {};
    newForm["full_name"] = form.first_name + " " + form.last_name;
    newForm["birth_date"] = form.birth_date;
    newForm["gender"] = form.gender;
    newForm["email"] = form.email;
    newForm["phone"] = form.phone;
    newForm["cover_letter"] = form.cover_letter;

    console.log(newForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-h3">Personal Information</h3>
      <div className="flex flex-col gap-8 mt-4">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="first_name"
                value="First Name "
                className="text-2xl"
              />
            </div>
            <input
              type="text"
              name="first_name"
              id="first_name"
              defaultValue={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              placeholder="Type here... "
              className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="last_name"
                value="Last Name "
                className="text-2xl"
              />
            </div>
            <input
              type="text"
              name="last_name"
              id="last_name"
              defaultValue={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              placeholder="Type here... "
              className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="birth_date"
                value="Date of Birth "
                className="text-2xl"
              />
            </div>
            <input
              type="text"
              name="birth_date"
              id="birth_date"
              defaultValue={form.birth_date}
              onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
              placeholder="Type here... "
              className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="gender" value="Gender" className="text-2xl" />
            </div>
            <div className="relative">
              <select
                name="gender"
                id="gender"
                defaultValue={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                className="border w-full rounded-lg px-4 py-6 focus:outline-none
            focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value={"male"} className="custom-option">
                  Male
                </option>
                <option value={"female"} className="custom-option">
                  Female
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email Address "
              className="text-2xl"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Type here..."
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone Number " className="text-2xl" />
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            defaultValue={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Type here... "
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="cover_letter"
              value="Cover Letter "
              className="text-2xl"
            />
          </div>
          <input
            type="text"
            name="cover_letter"
            id="cover_letter"
            defaultValue={form.cover_letter}
            onChange={(e) => setForm({ ...form, cover_letter: e.target.value })}
            placeholder="Type here... "
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="">
          <Button type="submit" className="bg-primary px-[60px] py-3">
            Update
          </Button>
        </div>
      </div>
    </form>
  );
}
