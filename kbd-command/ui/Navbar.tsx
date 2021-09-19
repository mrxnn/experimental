import { FC } from "react";
import { motion } from "framer-motion";
import Keystroke, { Keys } from "@/ui/Keystroke";
import CommandMenu from "@/ui/command";
import ThemeToggle from "@/ui/ThemeToggle";

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
            Software Engineer,{" "}
            <a href="#">
              UENO <span style={{ fontFamily: "Inter" }}>®</span>
            </a>
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
      {/* theme toggle */}
      <div className="ml-auto hidden md:flex items-center mr-60">
        <ThemeToggle />
      </div>
      {/* command menu */}
      <div className="flex items-center space-x-3 translate-y-[-2px]">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2 * 0.15 }}>
          <Keystroke keys={[Keys.Command, Keys.K]} variant="sm" />
        </motion.div>
        <CommandMenu />
      </div>
    </div>
  );
};

export default Navbar;
