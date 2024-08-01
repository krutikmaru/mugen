import { motion } from "framer-motion";

export default function VisualArea({ service }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      className="w-full h-[400px] bg-[#efefef] dark:bg-[#0F0E29] lg:w-[35%] lg:h-full relative rounded-lg overflow-hidden mx-5"
    >
      <img
        src={service.displayImage}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
}
