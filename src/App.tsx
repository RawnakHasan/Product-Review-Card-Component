const App = () => {
  return (
    <div className="h-screen bg-cream flex items-center justify-center">
      <div className="container w-2xl bg-white rounded-xl grid grid-cols-2">
        <img
          src="/image-product-desktop.jpg"
          className="rounded-l-xl"
          alt="Product"
        />
        <div className="p-8 flex flex-col justify-between">
          <p className="tracking-[0.4rem] text-[0.875rem] text-grey font-medium">
            PERFUME
          </p>
          <h1 className="text-4xl font-fraunces font-bold">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-grey font-medium">
            Afloral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className="text-4xl flex items-center gap-4 text-green-500 font-bold font-fraunces">
            $149.99
            <span className="text-sm text-grey font-montserrat line-through font-medium">
              $169.99
            </span>
          </p>
          <button className="flex gap-4 text-lg font-bold text-white bg-green-500 w-full rounded-xl h-12 items-center justify-center active:bg-green-700 hover:bg-green-700 hover:cursor-pointer">
            <img src="/icon-cart.svg" alt="icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
