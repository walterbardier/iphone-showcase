import PhoneScene from "./PhoneScene";

export default function Hero() {
  return (
    <div className="hero-content">
      <div className="hero-copy">
        <span>iPhone 14 Pro Max</span>

        <h1>
          Pro.
          <br />
          Beyond.
        </h1>

        <p>
          Featuring Dynamic Island, the powerful A16 Bionic chip,
          and a breakthrough 48MP camera system. Built to redefine
          what a smartphone can do.
        </p>

        <button className="hero-button">
          Discover iPhone
        </button>
      </div>

      <div className="phone-wrapper">
        <PhoneScene />

        <div className="glass-card">
          <p>Pro Series</p>
          <h3>Crafted from surgical-grade stainless steel.</h3>
        </div>
      </div>
    </div>
  );
}