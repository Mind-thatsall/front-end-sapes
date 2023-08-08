import ArticleCart from "@/components/ArticleCart";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = ({ items, removeFromCart, errorState, loadingState }) => {
  async function handleCheckout(items) {
    // Getting all the informations about the user
    const responseUser = await axios.get(
      import.meta.env.VITE_API_URL + "api/secure/user",
      {
        withCredentials: true,
      }
    );

    // Creating an object with the id of the user and the products he wants
    const data = {
      id: responseUser.data.id,
      products: items,
    };

    // Creating a stripe session and redirecting the user to it
    axios
      .post(import.meta.env.VITE_API_URL + "api/checkout", data)
      .then((response) => (window.location.href = response.data));
  }

  function allItemsQuantity(itemsArray) {
    return itemsArray.reduce((acc, item) => acc + item.quantity, 0);
  }

  function allItemsPrice(itemsArray) {
    return (
      itemsArray.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ) / 100
    ).toFixed(2);
  }

  return (
    <div className="h-screen px-[4vw] md:px-[6vw] lg:px-[4vw] flex justify-center items-center text-[#222421]">
      <div
        className="w-[890px] h-[65vh] bg-[#9F948B] border-[4px] border-[#222421] p-[20px] flex gap-4"
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        {items && items.length > 0 ? (
          <>
            <div className="hidden h-full lg:block lg:overflow-auto hide-scroll w-[620px]">
              <div className="grid grid-cols-2 grid-flow-row gap-3 w-full h-fit">
                {items.map((item) => (
                  <Link
                    to={`/article/${item.product.slug}-${item.product.id}`}
                    key={`${item.product.id}-${item.size}`}
                  >
                    <img
                      src={item.product.picture}
                      alt=""
                      width={160}
                      height={200}
                      className="object-cover h-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <span className="w-1 h-full bg-[#222421] hidden lg:block"></span>
            <div className="flex flex-col gap-5 w-full">
              <div className="hide-scroll w-full h-[80%] overflow-auto flex flex-col gap-5">
                {items.map((item) => (
                  <ArticleCart
                    key={`${item.product.id}-${item.size}`}
                    {...item}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
              <span className="w-full h-1 bg-[#222421]"></span>
              <div className="flex justify-between items-center">
                <p>
                  {allItemsQuantity(items)} ARTICLES FOR {allItemsPrice(items)}$
                </p>
                <button
                  type=""
                  onClick={() => handleCheckout(items)}
                  className="px-4 py-2 border-2 border-[#222421] hover:bg-[#222421] hover:text-[#9F948B] transition-colors"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <span className="text-center w-[260px]">
              {errorState ? (
                "ERROR WHILE FETCHING YOUR CART."
              ) : loadingState ? (
                "LOADING..."
              ) : (
                <p>
                  NO ITEMS WERE FOUND, START GETTING SOME AT THE{" "}
                  <Link
                    to="/shop"
                    className="underline"
                    style={{ fontFamily: "ClashDisplay-SemiBold" }}
                  >
                    SHOP
                  </Link>
                </p>
              )}{" "}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
