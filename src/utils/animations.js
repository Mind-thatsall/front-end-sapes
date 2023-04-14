import gsap from "gsap";

export function openSearch(input, modal) {
  console.log("launch");

  gsap.fromTo(
    modal,
    {
      backdropFilter: "blur(0px)",
      pointerEvents: "none",
      opacity: 0,
    },
    {
      backdropFilter: "blur(40px)",
      pointerEvents: "auto",
      opacity: 1,
      duration: 0.25,
    }
  );

  gsap.fromTo(
    input,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.25,
    }
  );
}

export function closeSearch(input, modal) {
  gsap.fromTo(
    modal,
    {
      backdropFilter: "blur(40px)",
      pointerEvents: "auto",
      opacity: 1,
    },
    {
      backdropFilter: "blur(0px)",
      pointerEvents: "none",
      opacity: 0,
      duration: 0.25,
    }
  );

  gsap.fromTo(
    input,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.25,
    }
  );
}
