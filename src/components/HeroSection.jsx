import React from "react";
import search from "../assets/icons/search.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import rocket from "../assets/rocket.png";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            Introducing the Revolutionary New Token:
            <span className="highlighted">GPT</span>
          </h1>
          <p className="hero-info-description">
            GPT is the game-changing token that is set to revolutionize the way
            we interact with the digital world. With its advanced technology and
            innovative features, GPT is poised to become the go-to token for all
            of your online needs.
          </p>
          <div className="search-container">
            <div className="search-input-wrapper">
              <img className="search" src={search} alt="search" />
              <input
                className="search-input"
                placeholder="Search 5000+ tokens across 9 Chains..."
              ></input>
            </div>
            <button className="search-btn primary">
              <span className="start-swapping">Start Swapping</span>
            </button>
          </div>
          <div className="social-links-container">
            <div className="social-links">
              <a href="/">
                <TelegramIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <YouTubeIcon />
              </a>
              <a href="/">
                <DiscordIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-img" src={rocket} alt="blockchain" />
      </div>
    </div>
  );
};

export default HeroSection;
