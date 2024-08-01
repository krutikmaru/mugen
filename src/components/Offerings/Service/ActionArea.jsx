import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ActionArea({ service }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      className="w-full h-auto lg:w-[25%] lg:h-full flex flex-col md:flex-row lg:flex-col items-stretch justify-start space-y-2 md:space-y-0 md:space-x-2 lg:space-x-0 lg:space-y-2"
    >
      <GetServiceActionCard
        title={service.getServiceActionCardTitle}
        description={service.getServiceActionCardDescription}
      />
      <NextServiceActionCard
        image={service.nextServiceImage}
        title={service.nextServiceTitle}
        slug={service.nextServiceSlug}
      />
    </motion.div>
  );
}

function GetServiceActionCard({ title, description }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
      className="w-full md:w-1/2 lg:w-full lg:h-1/2 px-6 py-10 border-[1px] border-[#c8c8c8] dark:border-0 bg-white dark:bg-[#0F0E29] rounded-md flex justify-center items-center"
    >
      <div className="flex flex-col justify-start items-start space-y-4">
        <h3 className="text-xl text-[#C985FF] font-bold tracking-tighter">
          {title}
        </h3>
        <p className="text-sm lg:text-xs tracking-tight text-black dark:text-white">
          {description}
        </p>
        <button className="text-sm text-white lg:text-xs tracking-tight px-3 py-2 bg-[#B352FF] border border-[#8339BD] rounded-md flex justify-center items-center space-x-2">
          <span>Get Started</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </motion.div>
  );
}

function NextServiceActionCard({ image, title, slug }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="w-full md:w-1/2 lg:w-full lg:h-1/2 px-6 py-6 lg:py-5 border-[1px] border-[#c8c8c8] dark:border-0 bg-white dark:bg-[#0F0E29] rounded-md flex justify-center items-center"
    >
      <div className="flex flex-col justify-start items-start space-y-2 w-full h-full">
        <div className="w-full h-[250px] md:h-full rounded-md overflow-hidden relative">
          <img
            src={image}
            alt="Test"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold tracking-tighter text-black dark:text-white">
          {title}
        </h3>
        <Link
          to={`/services/${slug}`}
          className="text-sm lg:text-xs tracking-tight font-medium text-[#C985FF] flex justify-center items-center space-x-2"
        >
          <span>Next Service</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </motion.div>
  );
}
