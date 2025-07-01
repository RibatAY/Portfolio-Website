import React from 'react';
import { motion } from 'framer-motion';

const RevealItem = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  once = false,
  className = '',
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    viewport={{ once }}
  >
    {children}
  </motion.div>
);

export default RevealItem;
