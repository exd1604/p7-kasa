/*  DropItem component
  It gets a prop defining the component that called it.
  This allows to have a "caller name" class used within CSS to manage specific CSS properties. (i.e: Width of the block)  
*/

import "../../utils/styles/DropItemStyle.css";
import { useState } from "react";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";

function DropItem({ title, type, content, caller }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`dropItem-wrapper ${caller}`}>
      <div className={`dropItem-wrapper-title ${caller}`}>
        <p>{title}</p>
        <span onClick={() => setIsExpanded(!isExpanded)}>
          <img
            src={isExpanded ? arrowUp : arrowDown}
            alt={
              isExpanded
                ? "Flèche vers le haut - Replier le texte"
                : "Flèche vers le bas - Déplier le texte"
            }
          />
        </span>
      </div>
      {isExpanded && type === "text" ? (
        <div className={`dropItem-wrapper-detail  ${caller}`}>
          <p>{content}</p>
        </div>
      ) : null}

      {isExpanded && type === "list" ? (
        <ul className={`dropItem-wrapper-detail ${caller}`}>
          {content.map((value, index) => (
            <li key={`list-${index}`}>{value}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

DropItem.defaultProps = {
  content: [],
};

export default DropItem;
