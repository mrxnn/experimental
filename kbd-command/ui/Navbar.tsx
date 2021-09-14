import { FC } from "react";
import { motion } from "framer-motion";
import Kbd, { Keys } from "@/ui/Kbd";
import { Menu } from "@/ui/Menu/Index";
import CommandMenu from "./Command/CommandMenu";

const Navbar: FC<{}> = ({}) => {
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
      {/* command menu */}
      <div className="flex items-center space-x-3">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2 * 0.15 }}>
          <Kbd keys={[Keys.Command, Keys.K]} variant="sm" />
        </motion.div>
        <Menu />
        <CommandMenu />
      </div>
    </div>
  );
};

export default Navbar;
