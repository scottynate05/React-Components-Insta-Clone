// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";

const LikeSection = props => {
  const [love, setLove] = useState(0)
  console.log(love);
  console.log(setLove);

  const heart = () => setLove(love + 1);

  // const heart = () => {
  //   if (love === 0) {
  //     props.heart(0);
  //     setLove(1);
  //   } else {
  //     props.heart(1);
  //     setLove(0);
  //   }
  // };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" onClick={()=>setLove(heart)} />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
        <p className="like-number">{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
