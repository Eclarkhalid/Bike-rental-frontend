import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../lib/CartContext";
import toast from "react-hot-toast";

// Utility function to format price with a comma for thousands
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Products({ products }) {
  const { addProduct } = useContext(CartContext)

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold tracking-tight text-text">Our Latest Bicycles</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products?.length > 0 && products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
                <div className="p-1">
                  <div className="relative h-[300px] sm:h-[300px]">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src={product.images[1]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div className="relative  p-3 border-t">
                    <Link href={'/products/' + product._id}>
                      <h3
                        className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate"
                      >
                        {product.title}
                      </h3>
                    </Link>

                    <div className="mt-1.5 flex items-center justify-between text-text">
                      <p className="tracking-wide text-primary">ksh. {formatPrice(product.price)}</p>


                      <button onClick={() => {
                        addProduct(product._id);
                        toast.success('Item added to cart!!')
                      }} type="button" class="flex items-center divide-x rounded-lg border border-primary bg-white text-center text-md font-medium text-secondary-700 shadow-sm hover:bg-gray-100">
                        <div class="flex items-center space-x-2 py-2.5 px-3">



                          <span>Book now</span>
                        </div>
                        {/* <div class="py-2.5 px-3">18</div> */}
                      </button>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
