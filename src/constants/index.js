import packageImg1 from "/plan/package.svg";
import packageImg2 from "/plan/package2.svg";
import packageImg3 from "/plan/package3.svg";
import check from "/plan/check-1.svg";

import netflix from "/socials/netflix.svg";
import spotify from "/socials/spotify.svg";
import redit from "/socials/redit.svg";
import discord from "/socials/discord.svg";
import amazon from "/socials/amazzon.svg";

import star from "/feedback/star.svg";
import profile from "/feedback/profile1.png";
import profile2 from "/feedback/profile2.png";
import profile3 from "/feedback/profile3.png";

import facebook from "/icons/facebook.png";
import instagram from "/icons/instagram.png";
import twitter from "/icons/twitter.png";

export const navlinks = [
  {
    id: 1,
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    title: "Features",
    link: "#features",
  },
  {
    id: 3,
    title: "Pricing",
    link: "#pricing",
  },
  {
    id: 4,
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    id: 5,
    title: "Help",
    link: "#help",
  },
];

export const plans = [
  {
    img: packageImg1,
    title: "Free Plan",
    price: "Free",
    features: [
      {
        icon: check,
        info: "Unlimited Bandwitch",
      },
      {
        icon: check,
        info: "Encrypted Connection",
      },
      {
        icon: check,
        info: "No Traffic Logs",
      },
      {
        icon: check,
        info: "Works on All Devices",
      },
    ],
  },
  {
    img: packageImg2,
    title: "Standard Plan",
    price: "$9 / mo",
    features: [
      {
        icon: check,
        info: "Unlimited Bandwitch",
      },
      {
        icon: check,
        info: "Encrypted Connection",
      },
      {
        icon: check,
        info: "No Traffic Logs",
      },
      {
        icon: check,
        info: "Works on All Devices",
      },
      {
        icon: check,
        info: "Connect Anyware",
      },
    ],
  },
  {
    img: packageImg3,
    title: "Premium Plan",
    price: "$12 / mo",
    features: [
      {
        icon: check,
        info: "Unlimited Bandwitch",
      },
      {
        icon: check,
        info: "Encrypted Connection",
      },
      {
        icon: check,
        info: "No Traffic Logs",
      },
      {
        icon: check,
        info: "Works on All Devices",
      },
      {
        icon: check,
        info: "Connect Anyware",
      },
      {
        icon: check,
        info: "Get New Features",
      },
    ],
  },
];

export const socials = [
  {
    social: netflix,
  },
  {
    social: redit,
  },
  {
    social: amazon,
  },
  {
    social: discord,
  },
  {
    social: spotify,
  },
];

export const testimony = [
  {
    profile: profile,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    feedback:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    rating: "4.5",
    icon: star,
  },
  {
    profile: profile2,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    feedback:
      "“I like it because I like to travel far and still can connect with high speed.”.",
    rating: "4.5",
    icon: star,
  },
  {
    profile: profile3,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    feedback:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    rating: "4.5",
    icon: star,
  },
];

export const footer = [
  {
    icon: facebook,
  },
  {
    icon: twitter,
  },
  {
    icon: instagram,
  },
];
