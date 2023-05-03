import product from "@/assets/images/men.jpg";
import ArticleCart from "@/components/ArticleCart";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = ({ items, removeFromCart, errorState, loadingState }) => {
  async function handleCheckout(items) {
    const responseUser = await axios.get(import.meta.env.VITE_API_URL + "api/secure/user", {
      withCredentials: true
    })

    const data = {
      id: responseUser.data.id,
      products: items
    };

    axios.post(import.meta.env.VITE_API_URL + "api/checkout", data).then((response) => window.location.href = response.data)
  }

  return (
    <div className='h-screen px-[4vw] md:px-[6vw] lg:px-[4vw] flex justify-center items-center text-[#222421]'>
      <div
        className='w-[890px] h-[65vh] bg-[#9F948B] border-[4px] border-[#222421] p-[20px] flex gap-4'
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        {items && items.length > 0 ? (
          <>
            <div className='hide-scroll hidden lg:block w-[620px] h-full lg:overflow-auto'>
              <div className='grid w-full grid-flow-row grid-cols-2 gap-3 h-fit'>
                {items.map((item) => (
                  <Link
                    to={`/article/${item.product.slug}-${item.product.id}`}
                    key={`${item.product.id}-${item.size}`}
                  >
                    <img
                      src={item.product.picture}
                      alt=''
                      width={160}
                      height={200}
                      className='object-cover h-full'
                    />
                  </Link>
                ))}
              </div>
            </div>
            <span className='w-1 h-full bg-[#222421] hidden lg:block'></span>
            <div className='flex flex-col w-full gap-5'>
              <div className='hide-scroll w-full h-[80%] overflow-auto flex flex-col gap-5'>
                {items.map((item) => (
                  <ArticleCart
                    key={`${item.product.id}-${item.size}`}
                    {...item}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
              <span className='w-full h-1 bg-[#222421]'></span>
              <div className='flex items-center justify-between'>
                <p>
                  {items.length} ARTICLES FOR {(items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0) / 100).toFixed(2)}$
                </p>
                <button
                  type=''
                  onClick={() => handleCheckout(items)}
                  className='px-4 py-2 border-2 border-[#222421] hover:bg-[#222421] hover:text-[#9F948B] transition-colors'
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center w-full h-full'>
            <span className='w-[260px] text-center'>
              {errorState ? (
                "ERROR WHILE FETCHING YOUR CART."
              ) : loadingState ? (
                "LOADING..."
              ) : (
                <p>
                  NO ITEMS WERE FOUND, START GETTING SOME AT THE{" "}
                  <Link
                    to='/shop'
                    className='underline'
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
