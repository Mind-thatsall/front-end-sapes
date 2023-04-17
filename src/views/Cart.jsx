import product from "@/assets/images/men.jpg";
import ArticleCart from "@/components/ArticleCart";

const Cart = () => {
  return (
    <div className="h-screen px-[4vw] md:px-[6vw] lg:px-[4vw] flex justify-center items-center text-[#222421]">
      <div
        className="w-[890px] h-[65vh] bg-[#9F948B] border-[4px] border-[#222421] p-[20px] flex gap-6"
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        <div className="hide-scroll hidden lg:flex w-[620px] gap-3 h-full lg:flex-wrap lg:overflow-auto">
          <img src={product} alt="" width={160} height={200} />
          <img src={product} alt="" width={160} height={200} />
          <img src={product} alt="" width={160} height={200} />
          <img src={product} alt="" width={160} height={200} />
          <img src={product} alt="" width={160} height={200} />
        </div>
        <span className="w-1 h-full bg-[#222421] hidden lg:block"></span>
        <div className="w-full flex flex-col gap-5">
          <div className="hide-scroll w-full h-[80%] overflow-auto flex flex-col gap-5">
            <ArticleCart />
            <ArticleCart />
            <ArticleCart />
            <ArticleCart />
            <ArticleCart />
          </div>
          <span className="w-full h-1 bg-[#222421]"></span>
          <div className="flex justify-between items-center">
            <p>4 ARTICLES</p>
            <button
              type=""
              className="px-4 py-2 border-2 border-[#222421] hover:bg-[#222421] hover:text-[#9F948B] transition-colors"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
