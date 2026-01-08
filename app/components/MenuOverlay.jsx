import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.ul
        className='flex flex-col py-4 items-center text-2xl'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ y: -50, opacity: 0 }}
      >
        {links.map((link, index) => (
          <li key={index}>
            <NavLinks href={link.href} title={link.title} />
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default MenuOverlay;
