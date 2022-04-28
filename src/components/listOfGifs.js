import Gif from "./gif";

export default function ListOfGifs({ gifs }) {
  return gifs.map(({ id, title, url }) => (
    <Gif title={title} url={url} id={id} />
  ));
}
