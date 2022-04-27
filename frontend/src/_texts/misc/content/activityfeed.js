import imagesoverlap from "_texts/misc/images/imagesoverlap.js";
import writeComment from "_texts/misc/content/writecomment.js";
import comment from "_texts/misc/content/comment.js";

const textProps = {
  title: "What people say...",
  user: require("assets/img/faces/team-1.jpg").default,
  username: "John Snow",
  date: "3 days ago",
  description:
    "Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off exactly why they should hire you.",
  button: {
    color: "pink",
    size: "sm",
    children: "Follow",
  },
  image: require("assets/img/new-york-city.jpg").default,
  likes: {
    href: "#pablo",
    children: "150",
  },
  comments: {
    href: "#pablo",
    children: "36",
  },
  shares: {
    href: "#pablo",
    children: "12",
  },
  imagesoverlap: {
    ...imagesoverlap,
  },
  loadPrevious: {
    href: "#pablo",
  },
  loadNext: {
    href: "#pablo",
  },
  writeComment: {
    ...writeComment,
  },
  commentPosts: [
    {
      ...comment,
    },
    {
      username: "Jessica Stones",
      description:
        "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down.",
      image: require("assets/img/faces/team-2.jpg").default,
      likes: {
        children: 10,
        href: "#pablo",
      },
      shares: {
        children: 1,
        href: "#pablo",
      },
    },
  ],
};
export default textProps;
