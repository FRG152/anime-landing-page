import gsap from "gsap";

const hideInfo = {
  duration: 2,
  opacity: 0,
};
const showInfo = {
  duration: 2,
  opacity: 1,
};

const CIRCLE_COLOR = "#0000003d";

export const slideAnimation = () => {
  // gsap.fromTo(
  //   ".video-border-top",
  //   {
  //     ...hideInfo,
  //     height: "0px",
  //   },
  //   { ...showInfo, height: "150px" }
  // );
  // gsap.fromTo(
  //   ".video-border-bottom",
  //   {
  //     ...hideInfo,
  //     height: "0px",
  //   },
  //   { ...showInfo, height: "150px" }
  // );
  gsap.fromTo(
    "#video_circle_01",
    {
      width: "3000px",
      height: "3000px",
      opacity: 1,
      duration: 1,
      backgroundColor: CIRCLE_COLOR,
    },
    {
      width: "500px",
      height: "500px",
      opacity: 1,
      duration: 1,
      backgroundColor: CIRCLE_COLOR,
    }
  );
  gsap.fromTo(
    "#video_circle_02",
    {
      width: "3000px",
      height: "3000px",
      opacity: 1,
      duration: 1.5,
      backgroundColor: CIRCLE_COLOR,
    },
    {
      width: "700px",
      height: "700px",
      opacity: 1,
      duration: 1.5,
      backgroundColor: CIRCLE_COLOR,
    }
  );
  gsap.fromTo(
    "#video_circle_03",
    {
      width: "3000px",
      height: "3000px",
      opacity: 1,
      duration: 2,
    },
    { width: "900px", height: "900px", opacity: 1, duration: 2 }
  );
};

export const slideAnimationShow = () => {
  gsap.to(".hero-title", {
    ...hideInfo,
  });
  gsap.to(".hero-bg", {
    ...hideInfo,
  });
  gsap.to(".hero-synopsis", {
    ...hideInfo,
  });
  gsap.to(".container-column", {
    ...hideInfo,
  });
  gsap.to("#container_card", {
    ...hideInfo,
  });
  gsap.to(".hero-indicator", {
    ...hideInfo,
  });
  // gsap.to(".video-border-top", {
  //   ...hideInfo,
  //   height: "0px",
  // });
  // gsap.to(".video-border-bottom", {
  //   ...hideInfo,
  //   height: "0px",
  // });
  gsap.to("#video_circle_01", {
    width: "0px",
    height: "0px",
    ...hideInfo,
  });
  gsap.to("#video_circle_02", {
    width: "0px",
    height: "0px",
    ...hideInfo,
  });
  gsap.to("#video_circle_03", {
    width: "0px",
    height: "0px",
    ...hideInfo,
  });
};

export const slideAnimationHide = () => {
  gsap.to(".hero-title", {
    ...showInfo,
  });
  gsap.to(".hero-bg", {
    ...showInfo,
  });
  gsap.to(".hero-synopsis", {
    ...showInfo,
  });
  gsap.to(".container-column", {
    ...showInfo,
  });
  gsap.to("#container_card", {
    ...showInfo,
  });
  gsap.to(".hero-indicator", {
    ...showInfo,
  });
  // gsap.to(".video-border-top", {
  //   ...showInfo,
  //   height: "150px",
  // });
  // gsap.to(".video-border-bottom", {
  //   ...showInfo,
  //   height: "150px",
  // });
  gsap.to("#video_circle_01", {
    width: "500px",
    height: "500px",
    ...showInfo,
  });
  gsap.to("#video_circle_02", {
    width: "700px",
    height: "700px",
    ...showInfo,
  });
  gsap.to("#video_circle_03", {
    width: "900px",
    height: "900px",
    ...showInfo,
  });
};
