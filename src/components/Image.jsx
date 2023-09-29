import { getImageUrl } from "../utils/func";

function Image({ src }) {
  return <img crossOrigin="anonymous" src={getImageUrl(src)} />;
}

export default Image;
