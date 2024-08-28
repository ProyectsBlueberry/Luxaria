import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion"
import useMobile from "../../hooks/useMobile";

interface Props {
    children: React.ReactNode,
    className?: string,
}

const AnimatorFadeUp = ({ className = '', children, }: Props) => {
    const { ref, inView } = useInView();
    const {isMobile} = useMobile()
    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 1 : 1.5, ease: "easeInOut" } },
        hidden: { opacity: 0, y: 90 }
      };
    
    return (
        <motion.div
        className={className}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 2.5 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}

export default React.memo(AnimatorFadeUp);