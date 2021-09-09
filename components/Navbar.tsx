import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="flex justify-between items-start">
      <div>
        <motion.div className="overflow-hidden">
          <motion.p
            initial={{ translateY: 44 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            Mayura Ramanayaka
          </motion.p>
        </motion.div>

        <motion.div className="overflow-hidden">
          <motion.p
            initial={{ translateY: 44 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 * 0.15 }}>
            Software Engineer, <a href="#">UENO®</a>
          </motion.p>
        </motion.div>

        <motion.div className="overflow-hidden">
          <motion.p
            initial={{ translateY: 44 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2 * 0.15 }}>
            Kandy, Sri Lanka
          </motion.p>
        </motion.div>
      </div>
      <div className="flex items-center space-x-5">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2 * 0.15 }}
          className="underline">
          Blog
        </motion.div>
        <motion.button
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 3 * 0.15 }}
          className="text-xl has-tooltip relative">
          <span className="tooltip absolute px-3 py-1 rounded top-full -right-1 mt-2">
            Menu
          </span>
          ⌘
        </motion.button>
      </div>
    </div>
  );
}
