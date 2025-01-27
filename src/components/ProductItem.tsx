import { useState } from "react";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Product {
  id: number;
  name: string;
  detailedDescription: string;
  description: string;
  image: string;
  price: number;
}
interface ProductProps {
  product: Product;  // Change from review to product to match the prop name
}

export const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative group w-full max-w-[300px] mx-auto border-2 border-[#443] 
          rounded-[95%_4%_97%_5%/_4%_94%_3%_95%] text-[#443] 
          hover:rounded-[4%_95%_6%_95%/_95%_4%_92%_5%] hover:border-dashed 
          transition-all duration-300 p-4 mb-6"
    >
      <div className="flex items-center gap-4 w-full">
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-full cursor-default
              transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-grow min-w-0"> {/* Added min-w-0 to allow truncation */} 
          <div className="flex items-center gap-1 mb-1">
            <div className="flex-shrink-0 relative">
              <FontAwesomeIcon
                icon={faInfo}
                className="p-0.5 font-bold border-2 cursor-pointer rounded-full w-2 h-2 border-[#443] hover:bg-[#443] hover:text-white transition-colors"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
              />
              {showTooltip && (
                <div className="absolute z-10 w-48 p-2 bg-white border-2 border-[#443] rounded-lg shadow-lg bottom-8 left-1/2 -translate-x-1/2 text-sm">
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-[#443] border-r-8 border-r-transparent" />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white border-r-8 border-r-transparent" />
                  {product.detailedDescription}
                </div>
              )}
            </div>
            <h3 className="text-lg lg:text-xl font-poppins text-[#443] font-semibold truncate">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {product.description}
          </p>
          <span className="text-lg font-bold text-[#4a4a3b] block">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
