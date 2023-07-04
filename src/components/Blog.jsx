import "../style/Blog.css";
import myData from "../data/Data";
import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useState } from "react";

function Blog() {

  const [search,setSearch] = useState('')

  return (
    <div className="container-blog">
      <h1>ค้นหาบทความ</h1>
      <div className="container-search">
        <input 
          type="search" 
          name="" id="" 
          placeholder="Search" 
          onChange={(e)=> setSearch(e.target.value)}
        />
      </div>

      {myData.filter((item)=>{
        return search.toLocaleLowerCase() === ''
        ? item
        : item.title.toLocaleLowerCase().includes(search)
      })
      .map((item) => (
        <Link to={`/blog-detail/${item.id}`} key={item.id}>
          <div className="item-blog">
            <h4>
              {item.title}
              <BsArrowRight />
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Blog;
