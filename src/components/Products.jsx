import { Link } from "react-router-dom";

const Products = () => {
    const products = [
        { id: 1, name: "Lija 200", extra: "3M", price: 2.56, img: "https://dojiw2m9tvv09.cloudfront.net/79550/product/lijas0483.jpg" },
        { id: 2, name: "Lija 200", extra: "3M", price: 2.56, img: "https://cemacogt.vtexassets.com/arquivos/ids/357406-800-800?v=638438977170370000&width=800&height=800&aspect=true" },
        { id: 3, name: "Lija 200", extra: "3M", price: 2.56, img: "https://dojiw2m9tvv09.cloudfront.net/79550/product/lijas0483.jpg" },
        { id: 4, name: "Lija 200", extra: "3M", price: 2.56, img: "https://dojiw2m9tvv09.cloudfront.net/79550/product/lijas0483.jpg" },
        { id: 5, name: "Lija 200", extra: "3M", price: 2.56, img: "https://dojiw2m9tvv09.cloudfront.net/79550/product/lijas0483.jpg" },
        { id: 6, name: "Lija 200", extra: "3M", price: 2.56, img: "https://dojiw2m9tvv09.cloudfront.net/79550/product/lijas0483.jpg" },
    ];

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold mb-8">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex items-center gap-5">
                        <div className="flex justify-center items-center w-1/2">
                            <img src={product.img} alt={product.name} className="w-full h-28 object-cover rounded-lg" />
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                            <p className="text-gray-600">{product.extra}</p>
                            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                            <Link to={`/products/${product.id}`} className="bg-[#2C3E50] hover:bg-[#1d262f] text-white text-sm font-bold py-2 px-3 mt-2 border border-[#1d262f] rounded">🛒 Añadir</Link>
                        </div>
                    </div>
                ))}
                <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">+ Agregar Producto</Link>
            </div>
        </div>
    );
};

export default Products;
