import React ,{ useEffect } from "react";

const CGU = () => {

  // useEffect hook to handle clicks on details elements
  useEffect(() => {

    // function to handle clicks on details elements
    const handleDetailsClick = (event) => {

      // find all details elements in the document
      const detailsElements = document.getElementsByTagName("details");

      for (let i = 0; i < detailsElements.length; i++) {

        // get the target of the click event
        const target = event.target;

         // check if the click is outside the current details element
        const isNotDetailsElements = !detailsElements[i].contains(target);

         // if the click is outside, remove the "open" attribute from the details element
        if (isNotDetailsElements) 
        {
          detailsElements[i].removeAttribute("open");
        }
      }
    };

    // add click event listener to document
    document.addEventListener("click", handleDetailsClick);

    // remove event listener on cleanup
    return () => {
      document.removeEventListener("click", handleDetailsClick);
    };
  }, []);

  return ( 
    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 lg:grid-rows-12 min-h-screen">

      <section 
      style={{ position: "fixed", top: "100px", marginLeft:"15vw"}} className="md:col-start-1 lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:row-end-11 max-h-screen overflow-y-auto">
        <div className="container flex flex-col p-4 w-5/6">
		
          <h2 
            style={{ fontFamily: "ClashDisplay-Bold" }}
            className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold leading-none"
          >
            TERMS AND CONDITIONS OF USE (TCU)
          </h2>

          <div style={{ fontFamily: "ClashDisplay-Medium" }} className="flex flex-col divide-y divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl ">
                GENERAL
              </summary>
              <div className="pb-4 text-base">
                <p>
                  This website is operated by SAPES AVENUE. Throughout the site, the terms “we,” “us,” and “our” refer to SAPES AVENUE. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl ">
                USE OF THE SITE
              </summary>
              <div className="pb-4 text-base">
                <p>
                  You may use our website for lawful purposes and in accordance with these terms and conditions. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl  ">
                INTELLECTUAL PROPERTY RIGHTS
              </summary>
              <div className="pb-4 text-base">
                <p>
                  The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by SAPES AVENUE, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl ">
                PRODUCT INFORMATION
              </summary>
              <div className="pb-4 text-base">
                <p>
                  We make every effort to display as accurately as possible the colors and images of our products that appear on the website. However, we do not guarantee that the color or image displayed on your device will be accurate.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
  </div>
  );
};

export default CGU;
