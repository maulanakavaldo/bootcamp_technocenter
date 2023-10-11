import satellite from "@services/satellite";
import Image from "next/image";

interface Params {
  params: { id: number };
}

interface Response {
  [key: string]: string | number | boolean | null | undefined;
  backdrop_path: string;
}
async function getMovie(id: number) {
  try {
    const response = await satellite.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRmOTk4MTUyMDE0YjQxNDI3NjZjZDc3ZDY0ZGEzYSIsInN1YiI6IjY1MjM4M2QyZmQ2MzAwMDExYzc3NTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqhIn7K3hWu01PBhS5ysr0Kw2esNatQNDTg4Aub7ua8'
          },
        }
    );
    console.log("RESPONSE SUCCESS", response);
    return response.data;
  } catch (error) {
    console.log("RESPONSE ERROR", error);
    throw error;
  }
}

export default async function MovieDetails({ params: { id } }: Params) {
  try {
    const dataMovie: Response = await getMovie(id);
    return (
      <div className="flex flex-row min-h-screen px-3 pt-3">
        <div className="w-[200px] h-[200px] mr-4">
          {/* <Image
            className="rounded-lg"
            src={dataMovie?.avatar_url}
            width={200}
            height={100}
            alt={"avatar_" + dataMovie?.id}
          ></Image> */}
        </div>
        <div className="flex flex-col">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-bold xl">ID</td>
                <td>:</td>
                <td>{dataMovie?.id}</td>
              </tr>
              <tr>
                <td className="font-bold">Name</td>
                <td>:</td>
                <td>{dataMovie?.title}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
