import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AddArticles() {

  //place Order
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postDate, setPostDate] = useState("");

  function sendData(e) {
    e.preventDefault();

    const Add_Article = {
      title,
      article,
      authorName,
      postDate
    }

    axios.post("http://localhost:8050/article/addArticle", Add_Article, {

    }).then(() => {
      alert("New Article Post", refreshPage())
    }).catch((err) => {
      alert(err)
    })
    console.log(Add_Article)
  }

  //refreash
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>

      <div className="DashBG" style={{ zIndex: 98 }}>

        <div className='border' style={{ backgroundColor: '#fffc' }}>
          <h1 className='h3 mb-3 font-weight-normal'><center><u>Add Articles</u></center></h1>
          <form noValidate onSubmit={sendData}>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Title: *(Kg)</label>
              <input type="text" class="form-control" placeholder="Enter title :-" onChange={(event) => {
                setTitle(event.target.value);
              }} required/>
            </div>
            
            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Article:</label>
              <textarea class="form-control" placeholder="Enter article :-" onChange={(event) => {
                setArticle(event.target.value);
              }} ></textarea>
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Author :</label>
              <input type="text" class="form-control" placeholder="Enter Author name :-" onChange={(event) => {
                setAuthorName(event.target.value);
              }} />
            </div>
            
            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">PostDate: *</label>
              <input type="date" class="form-control" placeholder="Enter post date :-" onChange={(event) => {
                setPostDate(event.target.value);
              }} required/>
            </div>

            <button type="submit" class="btn btn-success">Confirm</button>
            <button type="button" class="mx-4 my-4 btn btn-danger">Cancel </button>

          </form>
        </div>
      </div>
    </div>
  )

}
