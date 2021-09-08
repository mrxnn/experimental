import { motion } from "framer-motion";
import projects from "../data/projects.json";
import { zeroPad } from "../lib/numbers";

export default function Articles() {
  return (
    <div className="flex flex-col">
      <ArticleHeader />
      {projects.map(({ description }, index) => (
        <Article
          key={index}
          description={description}
          index={zeroPad(++index, 3)}
          delay={index}
        />
      ))}
    </div>
  );
}

export function Article({ index, description, delay }) {
  return (
    <motion.div
      className="flex items-center border-b py-9"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 + 0.6 }}>
      <p className="w-36 md:w-52">{index}</p>
      <p className="flex-1">{description}</p>
    </motion.div>
  );
}

export function ArticleHeader() {
  return (
    <motion.div
      className="flex items-center border-b py-9"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}>
      <p className="w-36 md:w-52">#</p>
      <p className="flex-1">Name</p>
      <p className="rotate-90">&rarr;</p>
    </motion.div>
  );
}
