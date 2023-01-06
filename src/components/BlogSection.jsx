import React from "react";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import BlogCard from "./BlogCard";

export const BlogSection = () => {
  const blogs = [
    {
      title: "Did Twitter REALLY Integrate Bitcoin Payments for Tipping?",
      description:
        "Recently, Jack Mallers of Strike announced that Twitter was implementing a new tipping function, first on iOS and then on Android soon, that would purportedly run on the Lightning Network and allow anyone to send a user Bitcoin tips at no cost and with no third parties involved.",
      imgUrl: news1,
    },
    {
      title: "Bitcoin 5 Years Later",
      imgUrl: news2,
    },
    {
      title: "Death To 2022: A Rekt Man’s Diary",
      imgUrl: news3,
    },
  ];
  return (
    <div className="blog-section-container">
      <div className="blog-section-header">
        <h1>Learn More</h1>
        <button className="secondary">View More</button>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
