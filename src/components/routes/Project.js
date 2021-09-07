import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import info from "./project-info";
import Card from "../../UI/Card";
import travelApp from "./../../images/travel-app.png";
import tipCalculator from "./../../images/tip-calculator.png";
import catSocialMedia from "./../../images/cat-social-media.png";
import textBeautifier from "./../../images/text-beautifier.png";
import catGallery from "./../../images/cat-gallery-responsive.png";
import dadJoke from "./../../images/dad-joke-generator.png";
import classes from "./Project.module.css";
const imgs = [
  travelApp,
  tipCalculator,
  catSocialMedia,
  textBeautifier,
  catGallery,
  dadJoke,
];
const Project = () => {
  const [name, setName] = useState("");
  const [languages, setLanguaes] = useState("");
  const [prjDetail, setprjDetail] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const handleClick = (e) => {
    const el = e.target.id;
    if (!el) return;
    info.forEach((prj) => {
      if (prj.id === el) window.open(prj.website);
    });
  };

  const handleMouseEnter = (e) => {
    const el = e.target.id;
    if (!el) return;
    setIsEntered(true);
    info.forEach((prj) => {
      if (prj.id === el) {
        setName(prj.name);
        setLanguaes(prj.language);
        setprjDetail(prj.detail);
      }
    });
  };
  const imageEls = imgs.map((img, i) => {
    const text = img
      .match(/(?!.+\/)(\w+-\w+)+(?=\.\w+)/g)[0]
      .replace(/-/g, " ")
      .toUpperCase();

    return (
      <li
        id={info[i].id}
        key={img + i}
        className={classes["image-box"]}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <span>{text}</span>
        {/* <i className={`fas fa-external-link-alt ${classes.external}`}></i> */}
      </li>
    );
  });
  console.log(isEntered);
  return (
    <Card styles={classes["card-style"]}>
      <ul className={classes["project-lists"]} onMouseEnter={handleMouseEnter}>
        {imageEls}
      </ul>
      <div className={classes["container--detail"]}>
        {name && (
          <ProjectDetail
            isEntered={isEntered}
            name={name}
            languages={languages}
            detail={prjDetail}
          />
        )}
      </div>
    </Card>
  );
};

export default Project;
