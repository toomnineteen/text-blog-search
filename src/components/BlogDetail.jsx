import "../style/BlogDetail.css";
import myData from "../data/Data";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogDetail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [subtitles, setSubtitles] = useState("");
  const [img_url, SetImg_url] = useState("");

  useEffect(() => {
    //ดึงข้อม฿ล
    const result = myData.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setSubtitles(result.subtitles);
    SetImg_url(result.img_url);
  }, [id]);

  return (
    <div className="container-detail">
      <div className="detail-img">
        <img src={img_url} alt="img" />
      </div>
      <div className="detail-text">
        <h1>บทความเกี่ยวกับ  {title}</h1>
        <p>{subtitles}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
