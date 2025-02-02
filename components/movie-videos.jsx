import { URL } from "../app/(home)/page";

const getVideos = async (id) => {
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
};

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
