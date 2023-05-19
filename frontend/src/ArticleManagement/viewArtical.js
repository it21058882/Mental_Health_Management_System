/*import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
//import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddArticleGIF_3 from '../Assets/Images/addArticleback3.jpg';
import Swal from 'sweetalert2'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
} from 'mdb-react-ui-kit';
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from "@mui/material";
// import axios from 'axios';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Articles() {

    //Search date and get details
    const [search, setSearch] = useState("");
    function searchItem(event) {
        setSearch(event.target.value);
        console.log(event.target.value)
    }

    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategorySelection = (event) => {
        setSelectedCategory(event.target.value);
        console.log(event.target.value)
    };

    //For type radio button
    const [selectedType, setSelectedType] = useState("");
    const handleTypeSelection = (event) => {
        setSelectedType(event.target.value);
        console.log(event.target.value)
    };




    //view all article
    const [Article, setArtical] = useState([]);
    const [pdfUrl, setPdfUrl] = useState([]);
    const [Article1_1, setArtical1_1] = useState([]);
    useEffect(() => {
        function getArticles() {
            axios.get("http://localhost:8050/article/viewArticle").then((res) => {
//     //view all article
//     const [Article, setArtical] = useState([]);
//     const [pdfUrl, setPdfUrl] = useState('');
//     const [Article1_1, setArtical1_1] = useState([]);
//     useEffect(() => {
//         function getArticles() {
//             axios.get("http://localhost:8050/article/viewArticle").then((res) => {

                const articlesWithPdfUrl = res.data.map(article => {
                    return {
                        ...article,
                        pdfUrl: `C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${article.article}`
                    };
                });


              
                setArtical1_1(articlesWithPdfUrl);
                setArtical(res.data)
            }).catch((err) => {
                alert(err.message)
            })
        }
        getArticles();
//                 console.log(res.articlesWithPdfUrl);
//                 setArtical1_1(articlesWithPdfUrl);
//                 setArtical(res.data)
//             }).catch((err) => {
//                 alert(err.message)
//             })
//         }
//         getArticles();

    }, [Article])


    //delete article
    const deleteArticle = (e) => {

        var result = window.confirm("Are you sure?");
        if (result == true) {
            axios.delete(`http://localhost:8050/article/delete/${e._id}`).then((res) => {
            }).catch(e => {
                alert("Article delete", refreshPage())
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Item Deleted !!',
            })
        }
    }

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

//     //refreash
//     function refreshPage() {
//         window.location.reload(false);
//     }


    return (
        <div style={{ width: "100%" }}>

//     return (
//         <div>

                <div className='viewarticleBtn'>
                    <Button to="/addarticle" LinkComponent={Link} sx={{ marginLeft: 13, marginBottom: -30 }} variant="contained">Add Article</Button>
                </div>

                <div style={{ marginBottom: "-45px" }}>

//                 <input
//                     onChange={searchItem}
//                     className='form-control searchbararticle'
//                     type='search'
//                     placeholder='Search ....'
//                     name='searchQuery'>
//                 </input>

                <select value={selectedCategory} onChange={handleCategorySelection}>
                    <option value="">Select category</option>
                    <option value="aaaa">aaaa</option>
                    <option value="bbbb">bbbb</option>
                    <option value="cccc">cccc</option>
                    <option value="dddd">dddd</option>
                </select>



                <div className='all_container'>

                    <h1 className='article_topic'><b>Articles & Books</b></h1>
                    <center>  <hr className='article_hr'></hr></center>
                    <div class="addArticle_div">

                        <br></br>


//                         <br></br>
//                         <br></br>
//                         <br></br>

                        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                            {Article.filter(e =>
                                (selectedCategory === "" || e.category === selectedCategory) ||
                                e.title.toLowerCase().includes(search) ||
                                e.authorName.includes(search) ||

                                e.type.includes(selectedType)

                            ).map(e => (
                                <MDBCol>
                                    <MDBCard >
                                        <MDBCardBody>
                                            <center>
                                                <embed src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${e.article}`)} type="application/pdf" width="100%" height="400px" />
                                                <hr></hr>
                                                <MDBCardTitle style={{ fontSize: "25px" }}>{e.title}</MDBCardTitle>
                                                <MDBCardText style={{ fontSize: "17px" }}>
                                                    {e.description}
                                                </MDBCardText>
                                                <MDBCardText style={{ fontSize: "15px" }}>
                                                    Author Name - {e.authorName}
                                                </MDBCardText>
                                                <MDBCardText style={{ fontSize: "15px" }}>
                                                    Category - {e.category}
                                                </MDBCardText>
                                                <MDBCardText style={{ fontSize: "15px" }}>
                                                    Type - {e.type}
                                                </MDBCardText>
                                                <MDBCardFooter style={{ borderRadius: '10px' }}>
                                                    <small className='text-muted' style={{ fontSize: "14px" }}>{e.postDate}</small>
                                                </MDBCardFooter>
                                                <Link to="/updatearticle"><button type="button" class="btn btn-warning btn-lg" >Update </button></Link>
                                                <Button color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
                                                    Delete
                                                </Button>
//                         <table class="table" style={{ width: "800px" }}>
//                             <thead class="thead-dark">
//                                 <tr>
//                                     <th >Title</th>
//                                     <th >Category</th>
//                                     <th >Description</th>
//                                     <th >Article</th>
//                                     <th >Author Name</th>
//                                     <th >Post Date</th>

                                                    <Link to={"/updatearticle/" + e._id} >
                                                        <Button style={{
                                                            backgroundColor: "#B4B731", marginRight: "20px"
                                                        }} variant="contained" >Update</Button>
                                                    </Link>

                                                    <Button color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </center>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            ))}

                        </MDBRow>
//                                 </tr>
//                             </thead>

                    </div>
                </div>
            </div>

            <div style={{ marginBottom: "-45px" }}>
            <div className='generatebutton'><button onClick={downloadPDF} type="button2" class="btn btn-info" style={{ backgroundColor: "#2E2EFF" }}><SimCardDownloadIcon />Generate Report</button></div>

                <input
                    onChange={searchItem}
                    className='form-control searchbararticle'
                    type='search'
                    placeholder='Search ....'
                    name='searchQuery'>
                </input>
                <div className='dropdownarticle' style={{ width: '20%' }}>
                    <select className='form-control' value={selectedCategory} onChange={handleCategorySelection}  >
                        <option value="">Select Category</option>
                        <option value="Depression">Depression</option>
                        <option value="Self-Care and Well-being">Self-Care and Well-being</option>
                        <option value="Relationship and Communication">Relationship and Communication</option>
                        <option value="Stress Management">Stress Management</option>
                        <option value="Mindfulness and Meditation">Mindfulness and Meditation</option>
                        <option value="Anxiety">Anxiety</option>
                    </select>
                </div></div>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group" className='radioBtnarticle'
                value={selectedType} onChange={handleTypeSelection} style={{ marginLeft: "65%", marginTop: "-10px" }}
            >
                <FormControlLabel value="Book" control={<Radio />} label="Book" />
                <FormControlLabel value="Article" control={<Radio />} label="Article" />
            </RadioGroup>




            <h1 className='article_topic'><b>Articles & Books</b></h1>
            <center>  <hr className='article_hr'></hr></center>
            <div class="addArticle_div" style={{ backgroundImage: `url(${AddArticleGIF_3})` }}>

                <br></br>

                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                    {Article.filter(e =>

                        (selectedCategory === "" || e.category === selectedCategory) ||
                            e.title.toLowerCase().includes(search) ||
                            e.authorName.includes(search) ||
                            selectedType === "" ? true : e.type === selectedType

                    ).map(e => (
                        <MDBCol>
                            <MDBCard style={{ background: "#fffaa" }} >
                                <MDBCardBody style={{ background: "#fffb" }} >
                                    <center>
                                        <embed src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${e.article}`)} type="application/pdf" width="100%" height="400px" />
                                        <hr></hr>
                                        <div style={{ backgroundColor: ' #fffaa', borderRadius: '10px' }}>
                                            <Link to={"/articlefullview/" + e._id}><MDBCardTitle style={{ fontSize: "25px", color: "#000000", textTransform: 'uppercase' }}><u>{e.title}</u></MDBCardTitle></Link>
                                            <MDBCardText style={{ fontSize: "17px" }}>
                                                {e.description}
                                            </MDBCardText>
                                            <MDBCardText style={{ fontSize: "15px" }}>
                                                Author Name - {e.authorName}
                                            </MDBCardText>
                                            <MDBCardText style={{ fontSize: "15px" }}>
                                                Category - {e.category}
                                            </MDBCardText>
                                            <MDBCardText style={{ fontSize: "15px" }}>
                                                Type - {e.type}
                                            </MDBCardText>
                                            <MDBCardFooter style={{ borderRadius: '10px', backgroundColor: ' #8c8c8c' }}>
                                                <small className='text-muted' style={{ fontSize: "15px" }}>{e.postDate}</small>
                                            </MDBCardFooter>
                                        </div>

                                        <div style={{
                                            marginLeft: "400px", marginTop: "10px"
                                        }}>

                                            <Link to={"/updatearticle/" + e._id} >
                                                <Button style={{
                                                    backgroundColor: "#75E6DA", marginRight: "20px"
                                                }} variant="contained" >Update</Button>
                                            </Link>

                                            <Button color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
                                                Delete
                                            </Button>
                                        </div>
                                    </center>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}

                </MDBRow>

            </div>


        </div >
    )

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
//                                             </Button> *}
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

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }
*/
