import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { projectActions } from "./../../store/project-slice";
import ProjectDetail from "./ProjectDetail";
import ProjectList from "./ProjectList";
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
  const dispatch = useDispatch();
  const name = useSelector((state) => state.project.name);
  const languages = useSelector((state) => state.project.languages);
  const projectDetail = useSelector((state) => state.project.projectDetail);
  const isEntered = useSelector((state) => state.project.isEntered);

  const handleClick = (e) => {
    const el = e.target.id;
    if (!el) return;
    info.forEach((prj) => {
      if (prj.id === el) window.open(prj.website);
    });
  };

  const handleMouseOver = (e) => {
    const el = e.target.id;
    if (!el) return;
    dispatch(projectActions.changeEnteringState());
    info.forEach((prj) => {
      if (prj.id === el) dispatch(projectActions.displayInfo(prj));
    });
  };

  const imageEls = imgs.map((img, i) => {
    const text = img
      .match(/(?!.+\/)(\w+-\w+)+(?=\.\w+)/g)[0]
      .replace(/-/g, " ")
      .toUpperCase();

    return (
      <ProjectList
        id={info[i].id}
        key={img + i}
        className={classes["image-box"]}
        handleClick={handleClick}
        handleMouseOver={handleMouseOver}
        imageBox={classes["image-box"]}
        img={img}
        text={text}
      />
    );
  });

  return (
    <Card styles={classes["card-style"]}>
      <ul className={classes["project-lists"]}>{imageEls}</ul>
      <div className={classes["container--detail"]}>
        {name && (
          <ProjectDetail
            isEntered={isEntered}
            name={name}
            languages={languages}
            detail={projectDetail}
          />
        )}
      </div>
    </Card>
  );
};

export default memo(Project);
