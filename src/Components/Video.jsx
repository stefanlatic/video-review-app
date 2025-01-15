import { useParams } from "react-router-dom";
import VIDEOS from './../videos.json'

const Video = () => {

    const {id} = useParams();

    let VideoFound = null;

    VIDEOS.forEach( video => {
        if( video.id == id) {
            VideoFound = video;
        }
    });
    if(VideoFound == null) {
        return <h1>Video does not exist</h1>
    }

    return(
        <>
        <h3>{ VideoFound.title }</h3>
        <p>{ VideoFound.url }</p>
        <iframe src={VideoFound.url}></iframe>
        </>
    )
}
export default Video;