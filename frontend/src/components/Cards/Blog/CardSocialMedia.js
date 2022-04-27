import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardSocialMedia({
  icon,
  title,
  subtitle,
  color,
  link,
  outline,
}) {
  const colors = {
    facebook:
      "text-white bg-facebook-regular border-facebook-regular active:bg-facebook-active active:border-facebook-active",
    twitter:
      "text-white bg-twitter-regular border-twitter-regular active:bg-twitter-active active:border-twitter-active",
    instagram:
      "text-white bg-instagram-regular border-instagram-regular active:bg-instagram-active active:border-instagram-active",
    github:
      "text-white bg-github-regular border-github-regular active:bg-github-active active:border-github-active",
    pinterest:
      "text-white bg-pinterest-regular border-pinterest-regular active:bg-pinterest-active active:border-pinterest-active",
    youtube:
      "text-white bg-youtube-regular border-youtube-regular active:bg-youtube-active active:border-youtube-active",
    vimeo:
      "text-white bg-vimeo-regular border-vimeo-regular active:bg-vimeo-active active:border-vimeo-active",
    slack:
      "text-white bg-slack-regular border-slack-regular active:bg-slack-active active:border-slack-active",
    dribbble:
      "text-white bg-dribbble-regular border-dribbble-regular active:bg-dribbble-active active:border-dribbble-active",
    reddit:
      "text-white bg-reddit-regular border-reddit-regular active:bg-reddit-active active:border-reddit-active",
    tumblr:
      "text-white bg-tumblr-regular border-tumblr-regular active:bg-tumblr-active active:border-tumblr-active",
    linkedin:
      "text-white bg-linkedin-regular border-linkedin-regular active:bg-linkedin-active active:border-linkedin-active",
    light:
      "text-blueGray-800 bg-blueGray-200 border-blueGray-200 active:bg-blueGray-300 active:border-blueGray-300",
    dark:
      "text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900",
    blueGray:
      "text-white bg-blueGray-500 border-blueGray-500 active:bg-blueGray-600 active:border-blueGray-600",
    red:
      "text-white bg-red-500 border-red-500 active:bg-red-600 active:border-red-600",
    orange:
      "text-white bg-orange-500 border-orange-500 active:bg-orange-600 active:border-orange-600",
    amber:
      "text-white bg-amber-500 border-amber-500 active:bg-amber-600 active:border-amber-600",
    emerald:
      "text-white bg-emerald-500 border-emerald-500 active:bg-emerald-600 active:border-emerald-600",
    teal:
      "text-white bg-teal-500 border-teal-500 active:bg-teal-600 active:border-teal-600",
    lightBlue:
      "text-white bg-lightBlue-500 border-lightBlue-500 active:bg-lightBlue-600 active:border-lightBlue-600",
    indigo:
      "text-white bg-indigo-500 border-indigo-500 active:bg-indigo-600 active:border-indigo-600",
    purple:
      "text-white bg-purple-500 border-purple-500 active:bg-purple-600 active:border-purple-600",
    pink:
      "text-white bg-pink-500 border-pink-500 active:bg-pink-600 active:border-pink-600",
    "facebook-outline":
      "text-facebook-regular border-facebook-regular active:bg-facebook-active active:border-facebook-active active:text-white",
    "twitter-outline":
      "text-twitter-regular border-twitter-regular active:bg-twitter-active active:border-twitter-active active:text-white",
    "instagram-outline":
      "text-instagram-regular border-instagram-regular active:bg-instagram-active active:border-instagram-active active:text-white",
    "github-outline":
      "text-github-regular border-github-regular active:bg-github-active active:border-github-active active:text-white",
    "pinterest-outline":
      "text-pinterest-regular border-pinterest-regular active:bg-pinterest-active active:border-pinterest-active active:text-white",
    "youtube-outline":
      "text-youtube-regular border-youtube-regular active:bg-youtube-active active:border-youtube-active active:text-white",
    "vimeo-outline":
      "text-vimeo-regular border-vimeo-regular active:bg-vimeo-active active:border-vimeo-active active:text-white",
    "slack-outline":
      "text-slack-regular border-slack-regular active:bg-slack-active active:border-slack-active active:text-white",
    "dribbble-outline":
      "text-dribbble-regular border-dribbble-regular active:bg-dribbble-active active:border-dribbble-active active:text-white",
    "reddit-outline":
      "text-reddit-regular border-reddit-regular active:bg-reddit-active active:border-reddit-active active:text-white",
    "tumblr-outline":
      "text-tumblr-regular border-tumblr-regular active:bg-tumblr-active active:border-tumblr-active active:text-white",
    "linkedin-outline":
      "text-linkedin-regular border-linkedin-regular active:bg-linkedin-active active:border-linkedin-active active:text-white",
    "light-outline":
      "text-blueGray-200 border-blueGray-200 active:bg-blueGray-300 active:border-blueGray-300 active:text-blueGray-800",
    "dark-outline":
      "text-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 active:text-white",
    "blueGray-outline":
      "text-blueGray-500 border-blueGray-500 active:bg-blueGray-600 active:border-blueGray-600 active:text-white",
    "red-outline":
      "text-red-500 border-red-500 active:bg-red-600 active:border-red-600 active:text-white",
    "orange-outline":
      "text-orange-500 border-orange-500 active:bg-orange-600 active:border-orange-600 active:text-white",
    "amber-outline":
      "text-amber-500 border-amber-500 active:bg-amber-600 active:border-amber-600 active:text-white",
    "emerald-outline":
      "text-emerald-500 border-emerald-500 active:bg-emerald-600 active:border-emerald-600 active:text-white",
    "teal-outline":
      "text-teal-500 border-teal-500 active:bg-teal-600 active:border-teal-600 active:text-white",
    "lightBlue-outline":
      "text-lightBlue-500 border-lightBlue-500 active:bg-lightBlue-600 active:border-lightBlue-600 active:text-white",
    "indigo-outline":
      "text-indigo-500 border-indigo-500 active:bg-indigo-600 active:border-indigo-600 active:text-white",
    "purple-outline":
      "text-purple-500 border-purple-500 active:bg-purple-600 active:border-purple-600 active:text-white",
    "pink-outline":
      "text-pink-500 border-pink-500 active:bg-pink-600 active:border-pink-600 active:text-white",
  };
  const className =
    "w-full px-6 py-6 text-sm px-6 py-3 shadow hover:shadow-lg rounded-lg outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold block " +
    colors[color + (outline ? "-outline" : "")];
  let children = (
    <>
      <i className={"my-4 text-2xl " + icon}></i>
      <h2 className="text-5xl leading-normal font-bold lowercase mt-2">
        {title}
      </h2>
      <p>
        <small className="uppercase">{subtitle}</small>
      </p>
    </>
  );
  return (
    <>
      {link && link.to ? (
        <Link {...link} className={className}>
          {children}
        </Link>
      ) : (
        <a {...link} className={className}>
          {children}
        </a>
      )}
    </>
  );
}

CardSocialMedia.defaultProps = {
  color: "blueGray",
  outline: false,
};

CardSocialMedia.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // properties to pass to the link object that wrapps the card
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the share icon is set by default,
  // // // you only need to set the number of comments
  link: PropTypes.object,
  outline: PropTypes.bool,
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "github",
    "pinterest",
    "youtube",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
    "linkedin",
    "light",
    "dark",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
