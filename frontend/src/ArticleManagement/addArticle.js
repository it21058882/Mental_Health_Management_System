import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import Swal from 'sweetalert2'
import '../ArticleManagement/articleManagement.css'
import AddArticleGIF from '../Assets/Images/AddArticle.gif'

export default function AddArticles() {

  //Add Article
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [article, setFileName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postDate, setPostDate] = useState("");

  const onChangeFile = e => {
    setFileName(e.target.files[0]);
  }

  function sendData(e) {
    e.preventDefault();

    const Add_Article = new FormData();

    Add_Article.append("title", title);
    Add_Article.append("category", category);
    Add_Article.append("description", description);
    Add_Article.append("article", article);
    Add_Article.append("authorName", authorName);
    Add_Article.append("postDate", postDate);

    axios.post("http://localhost:8050/article/add", Add_Article).then(function (res) {
      if (res) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1900
        }, refreshPage())
        console.log(res.data)
        sendData(false);
      }
    })

  }

  //refreash
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>

      <div className="DashBG" style={{ zIndex: 98 }}>

        <div className='viewarticleBtn'>
          <Button to="/viewarticle" LinkComponent={Link} sx={{ marginLeft: 1, marginTop: 5 }} variant="contained">View Article</Button>
        </div>

        <h1 className='article_topic'>Add Articles</h1>
        <hr className='article_hr'></hr>

        <div class="addArticle_div">

          <form noValidate onSubmit={sendData}>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'>Title: *</label><br></br>
              <input type="text" class="form-control article_EnterTitle" placeholder="Enter title :-" onChange={(event) => {
                setTitle(event.target.value);
              }} required />
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'>Category: *</label>
              <select class="form-control article_EnterTitle" onChange={(event) => { setCategory(event.target.value); }}>
                <option value="aaaa">aaaa</option>
                <option value="bbb">bbbb</option>
                <option value="cccc">cccc</option>
                <option value="dddd">dddd</option>
              </select>
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'>Description:</label>
              <textarea class="form-control article_EnterTitle" placeholder="Enter article :-" onChange={(event) => {
                setDescription(event.target.value);
              }} ></textarea>
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'>Author :</label>
              <input type="text" class="form-control article_EnterTitle" placeholder="Enter Author name :-" onChange={(event) => {
                setAuthorName(event.target.value);
              }} />
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'>PostDate: *</label>
              <input type="date" class="form-control article_EnterTitle" placeholder="Enter post date :-" onChange={(event) => {
                setPostDate(event.target.value);
              }} required />
            </div>

            <div >
              <img src={AddArticleGIF} class="addArticleGIF" alt="Income image" />
              <div className='DIVADDIMGFIELD'>
                <div class="form-group" >
                  <label for="exampleInputEmail1" className='ADDarticleDOC_title '>Article * :</label>
                  <input type="file" class="form-control articleADD_image_field" onChange={onChangeFile} />
                </div>
              </div>
            </div>

            <br></br>

            <button type="submit" class="btn btn-success confimBtnAddArticle">Confirm</button>
            <button type="button" class="mx-4 my-4 btn btn-danger confimBtnAddArticle">Cancel </button>

          </form>
        </div>
      </div>
    </div >
  )

}
