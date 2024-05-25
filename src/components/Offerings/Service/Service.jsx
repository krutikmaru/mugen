import React from "react";
import { useParams } from "react-router-dom";
import ContentArea from "./ContentArea";
import VisualArea from "./VisualArea";
import ActionArea from "./ActionArea";

export default function Service() {
  const { id } = useParams();

  return (
    <div
      className="p-10 font-inter text-white w-screen min-h-screen lg:h-screen flex flex-col lg:flex-row justify-start lg:justify-center items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-2"
      id="content"
    >
      <ContentArea />
      <VisualArea />
      <ActionArea />
    </div>
  );
}
