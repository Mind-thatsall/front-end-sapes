import gsap from "gsap";

// These functions are used to animate some elements using gsap like the menu for phones and tablets or the search modal

export function openSearch(input, modal) {
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
      pointerEvents: "none",
    },
    {
      opacity: 1,
      duration: 0.25,
      pointerEvents: "auto",
    }
  );

  gsap.set(input.children[0], {
    pointerEvents: "auto",
  });
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
      pointerEvents: "auto",
    },
    {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
    }
  );

  gsap.set(input.children[0], {
    pointerEvents: "none",
  });
}

export function toggleMenu(menu, menuOpened) {
  if (menuOpened) {
    gsap.fromTo(
      menu,
      {
        clipPath: "circle(100%)",
        opacity: 1,
        pointerEvents: "auto",
      },
      {
        clipPath: "circle(0%)",
        pointerEvents: "none",
        opacity: 0,
        duration: 0.25,
      }
    );
  } else {
    gsap.fromTo(
      menu,
      {
        clipPath: "circle(0%)",
        opacity: 0,
        pointerEvents: "none",
      },
      {
        clipPath: "circle(100%)",
        pointerEvents: "auto",
        opacity: 1,
        duration: 0.25,
      }
    );
  }
}

export function closeMenu(menu) {
  gsap.to(menu, {
    clipPath: "circle(0%)",
    pointerEvents: "none",
    opacity: 0,
    duration: 0.25,
  });
}


export function toggleFilters(filters, filtersOpened) {
  if (filtersOpened) {
    gsap.fromTo(
      filters,
      {
        y: 0,
        opacity: 1,
        pointerEvents: "auto",
      },
      {
        y: 15,
        opacity: 0,
        pointerEvents: "none",
        duration: 0.25,
      }
    );


  } else {
    gsap.fromTo(
      filters,
      {
        y: 15,
        opacity: 0,
        pointerEvents: "none",
      },
      {
        y: 0,
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.25,
      }
    );


  }
}