import React, { useState, useRef } from "react";
import "./fileUploader.style.scss";
import logo from "../../assets/file-uploader-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import uploadFileAction from "../../actions/fileUploadAction";
import { IoCloseCircle } from "react-icons/io5";

const FileUpload = () => {
  const dispatch = useDispatch();
  const { imageUrl } = useSelector((state) => state.file);
  const wrapperRef = useRef(null);
  const [isFileSizeBig, setIsFieSizeBig] = useState(false);
  const [uploadPercent, setUploadPercent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const options = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      let percent = Math.floor((loaded * 100) / total);
      setUploadPercent(percent);
    },
  };

  const onFileDrop = (e) => {
    if (e.target.files[0].size < 409600) {
      setIsFieSizeBig(false);
      setIsLoading(true);
      const file = e.target.files[0];

      dispatch(uploadFileAction(file, options));
    } else {
      setIsFieSizeBig(true);
    }
  };

  return (
    <>
      {isLoading ? (
        imageUrl?.url ? (
          <div className="uploaded-img">
            <img src={imageUrl.url} alt="product"></img>
            <div className="img-close-btn" onClick={() => setIsLoading(false)}>
              <IoCloseCircle className="close-icon" />
            </div>
          </div>
        ) : (
          <div className="drop-file-input">
            <div className="progressbar__container">
              %{uploadPercent}
              <div className="progressbar">
                <div style={{ width: `${uploadPercent}%` }}></div>
              </div>
              <p>Yükleniyor</p>
            </div>
          </div>
        )
      ) : (
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="drop-file-input__label">
            <p>Sürükleyip bırakarak yükle veya</p>
          </div>

          <label htmlFor="file">Görsel Seçin</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={onFileDrop}
            // accept=".png, .jpg, .jpeg"
            accept="image/*"
          />

          <span>PNG ve JPEG Dosya Boyutu max 400kb</span>
        </div>
      )}
      {isFileSizeBig && <div>Dosya boyutu max 400kb olmalı!</div>}
    </>
  );
};

export default FileUpload;
