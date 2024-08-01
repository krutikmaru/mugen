import React from "react";
import { useParams } from "react-router-dom";
import ContentArea from "./ContentArea";
import VisualArea from "./VisualArea";
import ActionArea from "./ActionArea";
import { services } from "../../../data/services";
import { motion } from "framer-motion";
export default function Service() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  return (
    <motion.div
      className="p-10 font-inter bg-white dark:bg-mugen-purple-dark w-screen min-h-screen lg:h-screen flex flex-col lg:flex-row justify-start lg:justify-center items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-2"
      id="content"
    >
      <ContentArea service={service} />
      <VisualArea service={service} />
      <ActionArea service={service} />
    </motion.div>
  );
}
