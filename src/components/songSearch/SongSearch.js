import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Loader from "../loader/Loader";
import Error404 from "../Error";
import SongDetails from "../songDetails/SongDetails";
import SongForm from "../songForm/SongForm";
import SongTable from "../songTable/SongTable";

let mySongInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Salvando canción en favoritos");
  };

  const handleDeleteSong = (id) => {
    alert(`Eliminando canción con el id: ${id}`);
  };

  return (
    <div>
      <HashRouter basename="songs">
        <header>
          <h2>Song Search</h2>
          <Link to="/">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              />
              <SongTable
                mySongs={mySongs}
                handleDeleteSong={handleDeleteSong}
              />
              <h2>Tabla de canciones</h2>
              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
            </Route>
            <Route exact path="/songs/:id">
              <h2>Página de canción</h2>
            </Route>
            <Route children={<Error404 />}></Route>
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
