import infoareaicontitle from "_texts/misc/infoareas/infoareaicontitle.js";
import mediaplayerimageonly from "_texts/blog/mediaplayers/mediaplayerimageonly.js";

const textProps = {
  image: require("assets/img/p2.png").default,
  title: "Build stunning websites and apps",
  color: "blueGray",
  infoAreas: [
    { ...infoareaicontitle },
    {
      icon: "fas fa-trophy",
      title: "Learn from experts",
      description:
        "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love.",
    },
    {
      icon: "fas fa-scroll",
      title: "Get practical advice",
      description:
        "When we lose family over time. What else could rust the heart more over time? Blackgold. It becomes harder...",
    },
  ],
  mediaplayer: { ...mediaplayerimageonly },
};

export default textProps;
