export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 50,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 77,
      damping: 15,
    },
  },
}
