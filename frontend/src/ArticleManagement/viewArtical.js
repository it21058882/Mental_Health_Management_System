import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import axios from 'axios';


export default function Articles() {

    //Search date and get details
    const [search, setSerch] = useState("");
    function searchItem(event) {
        setSerch(event.target.value);
    }

    //view all pending orders
    const [Article, setArtical] = useState([]);
    useEffect(() => {
        function getArticles() {
            axios.get("http://localhost:8050/article/viewArticle").then((res) => {
                console.log(res.data);
                setArtical(res.data)
            }).catch((err) => {
                alert(err.message)
            })
        }
        getArticles();

    }, [])


     //delete article
     const deleteArticle = (e) => {

        var result = window.confirm("Are you sure?");

        if (result == true) {

            axios.delete(`http://localhost:8050/article/delete/${e._id}`).then((res) => {

            }).catch(e => {

                alert("Article delete", refreshPage())

            })

        } else {

            e.preventDefault();

        }

    }

      //refreash
  function refreshPage() {
    window.location.reload(false);
  }

   

    return (
        <div>

            <div className="order_bground" style={{ zIndex: 98 }} >

 <Button to="/addarticle" LinkComponent={Link} sx={{ marginLeft: 1, marginTop: 5 }} variant="contained">Add Article</Button>

                <div className='all_container'>
                    <div className='row'>
                        <div className='col-lg-9 mt-2 mb-2'>
                            <h2 class="B_heading"><center><u>Articles</u></center></h2>
                            <br></br><br></br>
                        </div>

                    </div>

                   



                    <input
                        onChange={searchItem}
                        className='form-control'
                        type='search'
                        placeholder='Search....'
                        name='searchQuery'>
                    </input>
                    <br></br>
                    <br></br>
                    <br></br>


                    <table class="table" style={{ width: "800px"}}>
                        <thead class="thead-dark">
                            <tr>
                                <th >Title</th>
                                <th >Article</th>
                                <th >Author Name</th>
                                <th >Post Date</th>
                             
                              
                            </tr>
                        </thead>

                        <tbody>
                            {Article.filter(e =>
                                e.title.toLowerCase().includes(search) ||
                                e.authorName.includes(search)
                            ).map(e => (
                                <tr>
                                    <td>{e.title}</td>
                                    <td>{e.article}</td>
                                    <td>{e.authorName}</td>
                                    <td>{e.postDate}</td>
                                    <td></td>
                                    <td></td>
                                    <td><Button color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
                                        Delete
                                    </Button></td>
                                    
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>




                </div>
            </div>
        </div>
    )

}
