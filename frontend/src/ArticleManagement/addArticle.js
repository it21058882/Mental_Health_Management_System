import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import Swal from 'sweetalert2'
import '../ArticleManagement/articleManagement.css'
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import Nav from "../Ui/AdminNavBar";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddArticleGIF from '../Assets/Images/155129411_l-1.jpg';
import AddArticleGIF_2 from '../Assets/Images/addArticleback5.jpg';





export default function AddArticles() {

  //Add Article
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
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
    Add_Article.append("type", type);
    Add_Article.append("category", category);
    Add_Article.append("description", description);
    Add_Article.append("article", article);
    Add_Article.append("authorName", authorName);
    Add_Article.append("postDate", postDate);

    axios.post("http://localhost:8050/article/add", Add_Article).then(function (res) {
      if (res) {
        Swal.fire({
          icon: 'success',
          title: 'Item Added !!',
        }, refreshPage())

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error !!',
        }, refreshPage())
      }


    })

  }

  //refreash
  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div>
      <Nav />


      <div className="DashBG" style={{ zIndex: 98 }}>

        <div className='viewarticleBtn'>
          <Button to="/viewarticle" LinkComponent={Link} sx={{ marginLeft: 13, marginBottom: -10 }} variant="contained">View Article</Button>
        </div>

        <h1 className='article_topic'><b>Add Articles & Books</b></h1>
        <center>  <hr className='article_hr'></hr></center>
        <br></br>


        <div className="addArticle_div" style={{ backgroundImage: `url(${AddArticleGIF_2})` }}>

          <form noValidate onSubmit={sendData}>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'><b>Title : *</b></label><br></br>
              <input type="text" class="form-control article_EnterTitle" placeholder="Enter title :-" onChange={(event) => {
                setTitle(event.target.value);
              }} required />
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'><b>Type : *</b></label><br></br>
              <div className='radiobtn'>
                <RadioGroup className='radiobtn'
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group "
                  onChange={(event) => { setType(event.target.value); }}
                >
                  <FormControlLabel value="Book" control={<Radio />} label="Book" />
                  <FormControlLabel value="Article" control={<Radio />} label="Article" />
                </RadioGroup></div>
            </div>
            <br></br><br></br>


            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'><b>Category : *</b></label>
              <select class="form-control article_EnterTitle" onChange={(event) => { setCategory(event.target.value); }} required>
                <option value="Depression">Depression</option>
                <option value="Self-Care and Well-being">Self-Care and Well-being</option>
                <option value="Relationship and Communication">Relationship and Communication</option>
                <option value="Stress Management">Stress Management</option>
                <option value="Mindfulness and Meditation">Mindfulness and Meditation</option>
                <option value="Anxiety">Anxiety</option>

              </select>
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'><b>Description : *</b></label>
              <textarea class="form-control article_EnterTitle" placeholder="Enter article :-" onChange={(event) => {
                setDescription(event.target.value);
              }} required></textarea>
            </div>
            <br></br>


            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'><b>Author : *</b></label>
              <input type="text" class="form-control article_EnterTitle" placeholder="Enter Author name :-" onChange={(event) => {
                setAuthorName(event.target.value);
              }} required />
            </div>
            <br></br>

            <div class="form-group" >
              <label for="exampleInputEmail1" className='article_title'><b>PostDate : *</b></label>
              <input type="date" class="form-control article_EnterTitle" placeholder="Enter post date :-" onChange={(event) => {
                setPostDate(event.target.value);
              }} required />


              <img src={AddArticleGIF} class="addArticleGIF" alt="Income image" />
              <div className='DIVADDIMGFIELD'>
                <div className='addarticle'>
                  <div class="form-group" >
                    <label for="exampleInputEmail1" className='ADDarticleDOC_title '><b>Article : *</b></label>
                    <input type="file" class="form-control articleADD_image_field" onChange={onChangeFile} required />
                  </div>
                </div>
              </div>
            </div>

            <br></br>
            <div className='addarticlebtnsgroup'>

              <button type="submit" class="btn btn-success updateBtn"  >Confirm</button>
              <button type="button" class="mx-4 my-4 btn btn-danger cancleBtnAddArticle">Cancel </button>
            </div>
          </form>
        </div>
      </div >

    </div >
  )

}
