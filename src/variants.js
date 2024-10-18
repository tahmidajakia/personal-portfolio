// ../variants.js
export const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 20 : -20, // Moves element up or down
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  };
  