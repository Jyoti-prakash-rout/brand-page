const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEAT DESERVE THE BEST</h1>
        <p>
          YOUR FEAT DESERVE THE BEST AND HERE WE ARE TO HELP yOU YOUR FEAT
          DESERVE THE BEST AND HERE WE ARE TO HELP yOU
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>ALso avilable on </p>
          <div className="brand-icons">
            <img src="Images/amazon.png" alt="amazon.com" />
            <img src="Images/flipkart.png" alt="flipkart.com" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="Images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default Hero;
