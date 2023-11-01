"use client";
import { FunctionComponent } from "react";

interface ModalProps {
  title: string;
  body: string;
}

const Modal: FunctionComponent<ModalProps> = ({
  title,
  body,
}) => {
  return (
    <section className="flex fixed text-tertiary inset-0 backdrop-brightness-50 z-20  justify-center items-center">
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-secondary p-4 rounded-lg shadow-md z-10  w-[60vw] ">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{body}</p>
          <div className="flex gap-2">
            <button
              color="warning"
              className="mt-4 bg-blue-500 py-2 px-4 rounded-md"
              onClick={() => {}}
            >
              Close
            </button>
            <button
              className="mt-4 bg-gray-500  py-2 px-4 rounded-md"
              onClick={() => {}}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
