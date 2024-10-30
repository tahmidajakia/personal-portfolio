// ../variants.js
export const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === 'down' ? -80 : 0 ,// Moves element up or down
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: 'tween',
          delay: delay,
          duration: 1.2,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  