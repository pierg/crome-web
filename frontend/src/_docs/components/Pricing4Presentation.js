import "prop-types"
import "react"
import PropTypes
import React

// components

export default function Pricing4({ heading2, buttons, cards }) {
  return (
    <>
      <div className="py-20 bg-blueGray-50">
        <div class="container mx-auto px-4">
          <div class="mb-12 flex flex-wrap -mx-4 justify-center">
            <div class="px-4 relative w-full lg:w-8/12 text-center">
              <h6 class="mb-2 text-lg font-bold uppercase text-emerald-500">
                Our licenses
              </h6>
              <h2 class="text-4xl font-bold mt-0 mb-1 text-blueGray-700">
                Ready to grab this beauty?
              </h2>
              <p class="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">
                Based on the license you get, you will have direct access to our team of
                developers who built the product.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="px-4 relative w-full md:w-4/12">
              <div class="bg-white mb-6 text-center shadow-lg rounded-xl relative flex flex-col min-w-0 break-words w-full mb-6">
                <div class="px-5 py-3 mx-4 border-b border-black border-opacity-10">
                  <h4 class="font-bold my-2">Freelancer</h4>
                </div>
                <div class="lg:px-12 px-4 py-5 flex-auto">
                  <div class="text-5xl leading-tight font-bold">$149</div>
                  <span class="text-sm text-blueGray-500">For personal projects</span>
                  <ul class="my-8 list-none">
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-cube"></i>
                        </span>
                        <h6 class="text-base">Fully Coded Components</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="far text-sm fa-clock"></i>
                        </span>
                        <h6 class="text-base">Lifetime access</h6>
                      </div>
                    </li>

                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-headphones"></i>
                        </span>
                        <h6 class="text-base">6 Months Tech Support</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-laptop-code"></i>
                        </span>
                        <h6 class="text-base">1 Developer Access</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-rocket"></i>
                        </span>
                        <h6 class="text-base">1 Project</h6>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="https://secure.avangate.com/order/checkout.php?PRODS=35275283&OPTIONS35275283=FREELANCER&CART=1&CARD=2&CLEAN_CART=1&SHORT_FORM=1"
                    class="mb-2 inline-flex text-sm px-6 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded-md outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="px-4 relative w-full md:w-4/12">
              <div class="bg-blueGray-900 mb-6 text-center shadow-lg rounded-xl relative flex flex-col min-w-0 break-words w-full mb-6 text-white">
                <div class="px-5 py-3 mx-4 border-b border-white border-opacity-10">
                  <h4 class="font-bold my-2 text-white">Company</h4>
                </div>
                <div class="lg:px-12 px-4 py-5 flex-auto">
                  <div class="text-6xl leading-tight font-bold text-white">$249</div>
                  <span class="text-sm text-blueGray-500">For commercial projects</span>
                  <ul class="my-8 list-none">
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-white">
                          <i class="fas text-sm fa-cube"></i>
                        </span>
                        <h6 class="text-base">Fully Coded Components</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-white">
                          <i class="far text-sm fa-clock"></i>
                        </span>
                        <h6 class="text-base">Lifetime access</h6>
                      </div>
                    </li>

                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-white">
                          <i class="fas text-sm fa-headphones"></i>
                        </span>
                        <h6 class="text-base">12 Months Tech Support</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-white">
                          <i class="fas text-sm fa-laptop-code"></i>
                        </span>
                        <h6 class="text-base">Up to 10 Developers Access</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-white">
                          <i class="fas text-sm fa-rocket"></i>
                        </span>
                        <h6 class="text-base">Unlimited Projects</h6>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="https://secure.avangate.com/order/checkout.php?PRODS=35275283&OPTIONS35275283=COMPANY&CART=1&CARD=2&CLEAN_CART=1&SHORT_FORM=1"
                    class="mb-2 inline-flex outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-blueGray-800 bg-white border-white active:bg-blueGray-100 active:border-blueGray-100 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="px-4 relative w-full md:w-4/12">
              <div class="bg-white mb-6 text-center shadow-lg rounded-xl relative flex flex-col min-w-0 break-words w-full mb-6">
                <div class="px-5 py-3 mx-4 border-b border-black border-opacity-10">
                  <h4 class="font-bold my-2">Enterprise</h4>
                </div>
                <div class="lg:px-12 px-4 py-5 flex-auto">
                  <div class="text-5xl leading-tight font-bold">$499</div>
                  <span class="text-sm text-blueGray-500">For internal apps</span>
                  <ul class="my-8 list-none">
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-cube"></i>
                        </span>
                        <h6 class="text-base">Fully Coded Components</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="far text-sm fa-clock"></i>
                        </span>
                        <h6 class="text-base">Lifetime access</h6>
                      </div>
                    </li>

                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-headphones"></i>
                        </span>
                        <h6 class="text-base">18 Months Tech Support</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-laptop-code"></i>
                        </span>
                        <h6 class="text-base">More than 10 Developers Access</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <span class="text-blueGray-500 inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 bg-blueGray-100">
                          <i class="fas text-sm fa-rocket"></i>
                        </span>
                        <h6 class="text-base">Unlimited Projects</h6>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="https://secure.avangate.com/order/checkout.php?PRODS=35275283&OPTIONS35275283=ENTERPRISE&CART=1&CARD=2&CLEAN_CART=1&SHORT_FORM=1"
                    class="mb-2 inline-flex text-sm px-6 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded-md outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-6/12 mx-auto">
              <p class="text-center mt-5 text-blueGray-600">
                <i class="fa fa-lock"></i> Secured Payment by <b> 2Checkout </b> with:
                <br />
                <i class="fab fa-cc-paypal text-3xl mr-1 mt-1"></i>
                <i class="fab fa-cc-visa text-3xl mr-1 mt-1"></i>
                <i class="fab fa-cc-mastercard text-3xl mr-1 mt-1"></i>
                <i class="fab fa-cc-amex text-3xl mr-1 mt-1"></i>
              </p>

              <p class="text-center text-blueGray-600 mt-4 mx-auto">
                <b>Info:</b> If you are a Registered Company inside the European Union
                you will be able to add your VAT ID after your Press "Buy Now"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Pricing4.defaultProps = {
  cards: [],
  buttons: [],
  heading2: null,
};
Pricing4.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the CardPricingDetails component
  cards: PropTypes.arrayOf(PropTypes.object),
};
