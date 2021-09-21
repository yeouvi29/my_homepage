import { memo } from "react";

const ProjectList = (props) => {
  return (
    <li
      id={props.id}
      className={props.imageBox}
      onClick={props.handleClick}
      onMouseOver={props.handleMouseOver}
      onMouseOut={props.handleMouseOut}
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <span>{props.text}</span>
    </li>
  );
};

export default memo(ProjectList);
