/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./heroBanner.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./heroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  //! we get data of upcoming movies from useFetch hook. like Images
  const { data, loading } = useFetch("/movie/upcoming");

  //! we use useEffect hook to set background image randomly from data of upcoming movies.🙂
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies , TV show and people to discover. Explore now.
          </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie, tv show......"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={() =>{navigate(`/search/${query}`);}}>
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default HeroBanner;
