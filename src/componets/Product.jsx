const Product = ({ title, quantity, image, decrease, increase, remove }) => (
  <div className="border w-[31%] h-[400px] p-2 flex flex-col gap-y-[40px] items-center">
    <div>
    <h3 className="font-bold">{title}</h3>
    <img src={image} alt={title} />
    </div>
    <div className="flex gap-x-[10px]">
        <button onClick={decrease} className="border w-10">-</button>
        <p>{quantity}</p>
        <button onClick={increase} className="border w-10">+</button>
    </div>
    <button onClick={remove} className="border p-3 w-[45px] rounded-md">x</button>
  </div>
);

export default Product;
