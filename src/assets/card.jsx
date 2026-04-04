import { useState } from "react";
import { Bookmark, Weight, BookmarkCheck } from 'lucide-react'
const Card = (props) => {
  const [saved, setSaved] = useState(false);

return (
      <div className="card">
<div>
      <div className="top-part">
      <img src={props.logo}/>
      <button onClick={() => setSaved(!saved)}> Save
        {saved ? <BookmarkCheck /> : <Bookmark />}
      </button>
    </div>
    <div className="center-part">
<h3>{props.name} <span>{props.time}</span></h3>
<h2>{props.work}</h2>
<div>
  <h4>{props.tag1}</h4>
  <h4>{props.tag2}</h4>
</div>
    </div>
</div>
    <div className="buttom-part">
<div>
        <h3>{props.pay}</h3>
      <p>{props.location}</p>
</div>
      <button>Apply now</button>
    </div>
  </div>
)


}
export default Card