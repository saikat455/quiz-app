import classNames from "../styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
    return (
        <div className ={classNames.videos}>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            
        </div>
    );
};

export default Videos;