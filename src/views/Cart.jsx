import product from "@/assets/images/men.jpg";
import ArticleCart from "@/components/ArticleCart";
import { Link } from "react-router-dom";

const Cart = ({ items, removeFromCart }) => {
  function calculateTotal(items) {
    let result = 0;
    for (const item in items) {
      console.log(item);
      result += items[item].price;
    }
    return result;
  }

  return (
    <div className="h-screen px-[4vw] md:px-[6vw] lg:px-[4vw] flex justify-center items-center text-[#222421]">
      <div
        className="w-[890px] h-[65vh] bg-[#9F948B] border-[4px] border-[#222421] p-[20px] flex gap-6"
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        {items && items.length > 0 ? (
          <>
            <div className="hide-scroll hidden lg:block w-[620px] h-full lg:overflow-auto">
              <div className="grid grid-cols-2 h-fit w-full grid-flow-row gap-3">
                {items.map((item) => (
                  <img
                    key={item.id}
                    src={product}
                    alt=""
                    width={160}
                    height={200}
                    className="h-auto"
                  />
                ))}
              </div>
            </div>
            <span className="w-1 h-full bg-[#222421] hidden lg:block"></span>
            <div className="w-full flex flex-col gap-5">
              <div className="hide-scroll w-full h-[80%] overflow-auto flex flex-col gap-5">
                {items.map((item) => (
                  <ArticleCart
                    key={item.id}
                    {...item}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
              <span className="w-full h-1 bg-[#222421]"></span>
              <div className="flex justify-between items-center">
                <p>
                  {items.length} ARTICLES FOR {calculateTotal(items)}$
                </p>
                <button
                  type=""
                  className="px-4 py-2 border-2 border-[#222421] hover:bg-[#222421] hover:text-[#9F948B] transition-colors"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p className="w-[260px] text-center">
              NO ITEMS WERE FOUND, START GETTING SOME AT THE{" "}
              <Link
                to="/shop"
                className="underline"
                style={{ fontFamily: "ClashDisplay-SemiBold" }}
              >
                SHOP
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
