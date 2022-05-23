import React, { useState } from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import Drawer from "../components/drawer/Drawer";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/collections.css";
import useImages from "../hooks/useImages";

const Collections = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageOpen, setImageOpen] = useState(false);
  const [height, width] = useWindowSize();
  const isMobile = width < 487;
  const { images, loading, error, id } = useImages();

  const getImg = (img_src) => {
    setImageUrl(img_src);
  };
  const { currentPosts, currentPage, setCurrentPage } = usePagination({
    data: images,
  });

  return (
    <div className="page">
      <div className="wrapper">
        <h1 className="collection-title">{id}</h1>
        <Filters />
        {loading && <p>loading</p>}

        <div className="pics">
          {currentPosts.map((image, i) => (
            <div key={i} onClick={() => getImg(image.img_src)}>
              <img
                className="gallery-image"
                onClick={() => {
                  !isMobile && setImageOpen(true);
                }}
                src={image.img_src}
                alt=""
              />
              <p className="pic-description">
                Photo taken on {image.earth_date} <br />
                Camera: {image.camera.full_name}
              </p>
            </div>
          ))}
          {images.length === 0 && !loading && (
            <p>No results were found, try a different date or camera</p>
          )}
        </div>
        <Drawer
          className="login"
          position="center"
          width="none"
          isOpen={imageOpen}
          onClose={() => setImageOpen(false)}
          positionCloseRight={true}
          closeBtn={true}
        >
          <img className="image-full" src={imageUrl} alt="" />
        </Drawer>
        <Pagination
          data={images}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Collections;
