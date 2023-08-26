import { Label } from "flowbite-react";
import React from "react";

type Props = {
  setOtherFiles: any;
  submitRef: any;
};
export default function OtherInfo({ setOtherFiles, submitRef }: Props) {
  const [form, setForm] = React.useState({
    tags: "",
    lesson_name: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOtherFiles(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="xl:text-h3 font-semibold text-xl">Other Information</h3>
      <div className="flex flex-col gap-8 mt-4">
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="tags"
              value="Tags "
              className="xl:text-xl md:text-lg"
            />
          </div>
          <input
            type="text"
            name="tags"
            id="tags"
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="Type here... "
            className="border w-full rounded-lg xl:px-4 xl:py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="lesson_name"
              value="Lesson Name "
              className="xl:text-xl md:text-lg"
            />
          </div>
          <input
            type="text"
            name="lesson_name"
            id="lesson_name"
            onChange={(e) => setForm({ ...form, lesson_name: e.target.value })}
            placeholder="Type here... "
            className="border w-full rounded-lg xl:px-4 xl:py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="description"
              value="Description / Overview "
              className="xl:text-xl md:text-lg"
            />
          </div>
          <textarea
            rows={5}
            name="description"
            id="description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Type here... "
            className="border w-full rounded-lg xl:px-4 xl:py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent p-6 flex justify-start "
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="price"
              value="Price "
              className="xl:text-xl md:text-lg"
            />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="$ "
            className="border w-full rounded-lg xl:px-4 xl:py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      <button type="submit" className="hidden" ref={submitRef}>
        submit
      </button>
    </form>
  );
}
