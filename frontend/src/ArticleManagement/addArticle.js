import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";

export default function AddArticles() {

  //Add Article
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postDate, setPostDate] = useState("");

  const onChangeFile = e => {
    setFileName(e.target.files[0]);
  }

  function sendData(e) {
    e.preventDefault();

    const Add_Article = new FormData();

    Add_Article.append("title",title);
    Add_Article.append("category",category);
    Add_Article.append("description", description);
    Add_Article.append("articalImg",fileName);
    Add_Article.append("authorName", authorName);
    Add_Article.append("postDate",postDate);

    axios.post("http://localhost:8050/article/add", Add_Article, {

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

      <Button to="/viewarticle" LinkComponent={Link}  sx={{ marginLeft: 1, marginTop: 5 }} variant="contained">View Article</Button>

        <div className='border' style={{ backgroundColor: '#fffc' }}>
          <h1 className='h3 mb-3 font-weight-normal'><center><u>Add Articles</u></center></h1>
          <form noValidate onSubmit={sendData}>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Title: *</label>
              <input type="text" class="form-control" placeholder="Enter title :-" onChange={(event) => {
                setTitle(event.target.value);
              }} required/>
            </div>
            <br></br>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Category: *</label>
              <select onChange={(event) => {setCategory(event.target.value);}}>
                <option value="aaaa">aaaa</option>
                <option value="bbb">bbbb</option>
                <option value="cccc">cccc</option>
                <option value="dddd">dddd</option>
              </select>
            </div>
            <br></br>
            
            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Description:</label>
              <textarea class="form-control" placeholder="Enter article :-" onChange={(event) => {
                setDescription(event.target.value);
              }} ></textarea>
            </div>
            <br></br>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Article Image :</label>
              <input type="file" class="form-control"  onChange={onChangeFile}/>
            </div>
            <br></br>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Author :</label>
              <input type="text" class="form-control" placeholder="Enter Author name :-" onChange={(event) => {
                setAuthorName(event.target.value);
              }} />
            </div>
            <br></br>
            
            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">PostDate: *</label>
              <input type="date" class="form-control" placeholder="Enter post date :-" onChange={(event) => {
                setPostDate(event.target.value);
              }} required/>
            </div>
            <br></br>

            <button type="submit" class="btn btn-success">Confirm</button>
            <button type="button" class="mx-4 my-4 btn btn-danger">Cancel </button>

          </form>
        </div>
      </div>
    </div>
  )

}
