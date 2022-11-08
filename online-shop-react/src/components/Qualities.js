import "./Qualities.css";
import QualitiesItem from "./QualitiesItem";

function Qualities() {
  return (
    <div class="qualities">
    <div class="qualities-container">
        <div class="qualities-elements">
           <QualitiesItem />
           <QualitiesItem />
           <QualitiesItem />
        </div>
    </div>
</div>
  );
}

export default Qualities;
