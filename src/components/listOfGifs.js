import Gif from "./gif";

export default function ListOfGifs({ gifs }) {
  return gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} url={url} id={id} />
  ));
}
