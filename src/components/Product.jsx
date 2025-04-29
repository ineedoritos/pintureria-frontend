import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="p-10 w-full flex items-center justify-center gap-20">
            <div className="flex justify-center items-center max-w-1/2">
                <img src="https://dojiw2m9tvv09.cloudfront.net/79550/product/lijas0483.jpg" />
            </div>
            <div className="">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Lija 200 3M</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Categoria 1</h2>
                <p className="text-gray-600 mb-6 w-1/2">Phasellus condimentum orci a augue dapibus lacinia. Vestibulum consequat orci pharetra ipsum dapibus, quis porta elit dapibus.</p>
                <div className="mb-8">
                    <p className="font-semibold text-gray-700 mb-2">Cantidad:</p>
                    <div className="flex items-center border border-gray-300 rounded-md w-fit">
                        <button onClick={handleDecrease} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-lg font-bold rounded-l-md transition-colors">-</button>
                        <span className="px-4 py-1 text-center min-w-[40px]">{quantity}</span>
                        <button onClick={handleIncrease} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-lg font-bold rounded-r-md transition-colors">+</button>
                    </div>
                </div>
                <hr className="my-4 border-gray-200" />
                <div className="flex justify-start mt-6 gap-2">
                    <button className="bg-[#2C3E50] hover:bg-[#1d262f] text-white font-bold py-2 px-6 border border-[#1d262f] rounded">🛒 Añadir</button>
                    <Link to="/products" className="hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 border border-gray-600 rounded transition-colors">Regresar</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;