import { Accordion } from "flowbite-react";
import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export default function CurricilumTabAccordian() {
  return (
    <Accordion className="border-0">
      <Accordion.Panel>
        <Accordion.Title>Lesson 1 - Introduction</Accordion.Title>
        <Accordion.Content>
          <ul className="flex flex-col gap-2 last:border-none">
            <li className="flex gap-2 items-center justify-between py-4 border-b">
              <div className="flex gap-2 items-center">
                <AiOutlinePlayCircle className="text-primary text-xl" />
                <p className="text-sm">U1: Presentation</p>
              </div>
              <TiTick className="text-green-600" />
            </li>
            <li className="flex gap-2 items-center justify-between py-4 border-b">
              <div className="flex gap-2 items-center">
                <AiOutlinePlayCircle className="text-primary text-xl" />
                <p className="text-sm">
                  U2: Job opportunities (career profile)
                </p>
              </div>
              <TiTick className="text-green-600" />
            </li>
            <li className="flex gap-2 items-center justify-between py-4 border-b">
              <div className="flex gap-2 items-center">
                <AiOutlinePlayCircle className="text-primary text-xl" />
                <p className="text-sm">
                  U2: How to get the most out of this course!
                </p>
              </div>
              <TiTick className="text-green-600" />
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Lesson 2 - Learn Manufacturing</Accordion.Title>
        <Accordion.Content>
          <ul className="flex flex-col gap-2 last:border-none">
            <li className="flex gap-2 items-center py-4 border-b">
              <AiOutlinePlayCircle className="text-primary text-xl" />
              <p className="text-sm">U1: Presentation</p>
            </li>
            <li className="flex gap-2 items-center py-4 border-b">
              <AiOutlinePlayCircle className="text-primary text-xl" />
              <p className="text-sm">U2: Job opportunities (career profile)</p>
            </li>
            <li className="flex gap-2 items-center py-4">
              <AiOutlinePlayCircle className="text-primary text-xl" />
              <p className="text-sm">
                U2: How to get the most out of this course!
              </p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Lesson 3 - Field Experience testing modules & investers!
        </Accordion.Title>
        <Accordion.Content>
          <ul className="flex flex-col gap-2 last:border-none">
            <li className="flex gap-2 items-center py-4 border-b">
              <AiOutlinePlayCircle className="text-primary text-xl" />
              <p className="text-sm">U1: Presentation</p>
            </li>
            <li className="flex gap-2 items-center py-4 border-b">
              <AiOutlinePlayCircle className="text-primary text-xl" />
              <p className="text-sm">U2: Job opportunities (career profile)</p>
            </li>
            <li className="flex gap-2 items-center py-4">
              <AiOutlinePlayCircle className="text-primary text-xl" />
              <p className="text-sm">
                U2: How to get the most out of this course!
              </p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
