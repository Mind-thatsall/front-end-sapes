const SideBars = ({ rotate, side }) => {
  return (
    <div
      style={{
        writingMode: "vertical-lr",
        textOrientation: "mixed",
        fontFamily: "ClashDisplay-Medium",
        zIndex: 2,
      }}
      className={`hidden whitespace-nowrap md:flex items-center justify-center bg-[#222421] text-[#9F948B] fixed h-full w-[4vw] cursor-vertical-text top-0 ${side} ${rotate} text-[1.3vw] overflow-hidden`}
    >
      <p className="marquee">
        FRANCE, PARIS (22.2904482° N, 33.7482194° W) - NEW COLLECTION SUMMER
        2K23 -&nbsp;
      </p>
      <p className="marquee">
        FRANCE, PARIS (22.2904482° N, 33.7482194° W) - NEW COLLECTION SUMMER
        2K23 -&nbsp;
      </p>
      <p className="marquee">
        FRANCE, PARIS (22.2904482° N, 33.7482194° W) - NEW COLLECTION SUMMER
        2K23 -&nbsp;
      </p>
      <p className="marquee">
        FRANCE, PARIS (22.2904482° N, 33.7482194° W) - NEW COLLECTION SUMMER
        2K23 -&nbsp;
      </p>
    </div>
  );
};

export default SideBars;
