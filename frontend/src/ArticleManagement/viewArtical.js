<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
} from 'mdb-react-ui-kit';
=======
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from "@mui/material";
// import axios from 'axios';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// export default function Articles() {

//     //Search date and get details
//     const [search, setSerch] = useState("");
//     function searchItem(event) {
//         setSerch(event.target.value);
//     }

<<<<<<< HEAD
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategorySelection = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    console.log(selectedCategory)

    //view all article
    const [Article, setArtical] = useState([]);
    const [pdfUrl, setPdfUrl] = useState([]);
    const [Article1_1, setArtical1_1] = useState([]);
    useEffect(() => {
        function getArticles() {
            axios.get("http://localhost:8050/article/viewArticle").then((res) => {
=======
//     //view all article
//     const [Article, setArtical] = useState([]);
//     const [pdfUrl, setPdfUrl] = useState('');
//     const [Article1_1, setArtical1_1] = useState([]);
//     useEffect(() => {
//         function getArticles() {
//             axios.get("http://localhost:8050/article/viewArticle").then((res) => {
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//                 const articlesWithPdfUrl = res.data.map(article => {
//                     return {
//                         ...article,
//                         pdfUrl: `C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${article.article}`
//                     };
//                 });

<<<<<<< HEAD
              
                setArtical1_1(articlesWithPdfUrl);
                setArtical(res.data)
            }).catch((err) => {
                alert(err.message)
            })
        }
        getArticles();
=======
//                 console.log(res.articlesWithPdfUrl);
//                 setArtical1_1(articlesWithPdfUrl);
//                 setArtical(res.data)
//             }).catch((err) => {
//                 alert(err.message)
//             })
//         }
//         getArticles();
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//     }, [Article])


<<<<<<< HEAD
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
=======

//     //delete article
//     const deleteArticle = (e) => {

//         var result = window.confirm("Are you sure?");

//         if (result == true) {

//             axios.delete(`http://localhost:8050/article/delete/${e._id}`).then((res) => {

//             }).catch(e => {

//                 alert("Article delete", refreshPage())

//             })

//         } else {

//             e.preventDefault();

//         }

//     }
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//     //refreash
//     function refreshPage() {
//         window.location.reload(false);
//     }


<<<<<<< HEAD
    return (
        <div style={{ width: "100%" }}>
=======

//     return (
//         <div>
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//             <div className="order_bground" style={{ zIndex: 98 }} >

//                 <div className='viewarticleBtn'>
//                     <Button to="/addarticle" LinkComponent={Link} sx={{ marginLeft: 1, marginTop: 5 }} variant="contained">Add Article</Button>
//                 </div>

//                 <input
//                     onChange={searchItem}
//                     className='form-control searchbararticle'
//                     type='search'
//                     placeholder='Search ....'
//                     name='searchQuery'>
//                 </input>

<<<<<<< HEAD
                <select value={selectedCategory} onChange={handleCategorySelection}>
                    <option value="">Select category</option>
                    <option value="aaaa">aaaa</option>
                    <option value="bbbb">bbbb</option>
                    <option value="cccc">cccc</option>
                    <option value="dddd">dddd</option>
                </select>



                <div className='all_container'>
=======
//                 <div className='all_container'>
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//                     <h1 className='article_topic'>Articles</h1>
//                     <hr className='article_hr'></hr>
//                     <div class="addArticle_div">

<<<<<<< HEAD
                        <br></br>
=======


//                         <br></br>
//                         <br></br>
//                         <br></br>
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

                        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                            {Article.filter(e =>
                                (selectedCategory === "" || e.category === selectedCategory)||
                                e.title.toLowerCase().includes(search) ||
                                e.authorName.includes(search) 

<<<<<<< HEAD
                            ).map(e => (
                                <MDBCol>
                                    <MDBCard >
                                        <MDBCardBody>
                                            <center>
                                                <embed src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${e.article}`)} type="application/pdf" width="100%" height="400px" />
                                                <MDBCardTitle style={{ fontSize: "25px" }}>{e.title}</MDBCardTitle>
                                                <MDBCardText style={{ fontSize: "16px" }}>
                                                    {e.description}
                                                </MDBCardText>
                                                <MDBCardText style={{ fontSize: "14px" }}>
                                                    authorName - {e.authorName}
                                                </MDBCardText>
                                                <MDBCardText style={{ fontSize: "14px" }}>
                                                    category - {e.category}
                                                </MDBCardText>
                                                <MDBCardFooter style={{ borderRadius: '10px' }}>
                                                    <small className='text-muted' style={{ fontSize: "10px" }}>{e.postDate}</small>
                                                </MDBCardFooter>
                                                <Link to="/updatearticle"><button type="button" class="btn btn-warning btn-lg" >Update </button></Link>
                                                <Button color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
                                                    Delete
                                                </Button>
=======
//                         <table class="table" style={{ width: "800px" }}>
//                             <thead class="thead-dark">
//                                 <tr>
//                                     <th >Title</th>
//                                     <th >Category</th>
//                                     <th >Description</th>
//                                     <th >Article</th>
//                                     <th >Author Name</th>
//                                     <th >Post Date</th>
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

                                            </center>  </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            ))}

<<<<<<< HEAD
                        </MDBRow>
=======
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {Article.filter(e =>
//                                     e.title.toLowerCase().includes(search) ||
//                                     e.authorName.includes(search)
//                                 ).map(e => (
//                                     <tr>
//                                         <td>{e.title}</td>
//                                         <td>{e.category}</td>
//                                         <td>{e.description}</td>

//                                         <td>
//                                             <a href={e.pdfUrl} target="_blank">
//                                                 {e.article}
//                                             </a>
//                                             {/* <Button
//                                                 color="primary"
//                                                 onClick={() => {
//                                                     window.open(e.article, "_blank");
//                                                 }}
//                                                 variant="contained"
//                                             >
//                                                 Open PDF
//                                             </Button> */}
//                                             <embed src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${e.article}`)} type="application/pdf" width="100%" height="400px" />
//                                         </td>

//                                         <td>{e.authorName}</td>
//                                         <td>{e.postDate}</td>
//                                         <td></td>
//                                         <td></td>
//                                         <td><Button color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
//                                             Delete
//                                         </Button></td>
//                                         <td><Link to = "updatearticle"><button type="button" class="btn btn-warning btn-lg" >Update </button></Link></td>

//                                     </tr>
//                                 ))
//                                 }

//                             </tbody>
//                         </table>
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }
