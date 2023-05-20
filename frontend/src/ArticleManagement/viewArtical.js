import React, { useState, useEffect } from 'react'
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
import Nav from "../Ui/AdminNavBar";
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Articles() {

    //Search date and get details
    const [search, setSearch] = useState("");
    function searchItem(event) {
        setSearch(event.target.value);
        console.log(event.target.value)
    }

    //For category dropdown
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

    }, [Article])


    //delete article
    const deleteArticle = (e) => {

        var result = window.confirm("Are you sure?");
        if (result == true) {
            axios.delete(`http://localhost:8050/article/delete/${e._id}`).then((res) => {
            }).catch(e => {
                Swal.fire({
                    icon: 'success',
                    title: 'Item Deleted !!',
                })
                refreshPage()
            })
        } else {
            refreshPage()
        }
    }

    //refreash
    function refreshPage() {
        window.location.reload(false);
    }


    //pdf generation 
    function downloadPDF() {

        var today = new Date();
        var curr_date = today.getDate();
        var curr_month = today.getMonth();
        var curr_year = today.getFullYear();

        today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
        var newdat = today;

        const doc = new jsPDF('landscape');
        doc.text("HAPPYlife", 15, 5);
        doc.text(newdat, 255, 5);

        doc.text("Articles & Books", 130, 12);
        doc.autoTable({
            head: [['Title', 'Type', 'Category', 'Article', 'Author-Name', 'Post-Date']],
            body: Article.filter(e =>

                e.title.toLowerCase().includes(search) ||
                e.authorName.toLowerCase().includes(search)

            ).map(function (e, i) {
                return (
                    [e.title,
                    e.type,
                    e.category,
                    e.article,
                    e.authorName,
                    e.postDate
                    ]

                );
            })
        })
        doc.save("Articles.pdf");
    }


    return (
        <div>


            <Nav />
            <div style={{ marginBottom: "-45px" }}>

                <div className='addarticlebtn'>
                    <Button to="/addarticle" LinkComponent={Link} variant="contained">Add Article</Button>
                </div>
                <input
                    onChange={searchItem}
                    className='form-control searchbararticleAdmin'
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

            <div className='generatebutton'><button onClick={downloadPDF} type="button2" class="btn btn-info" ><SimCardDownloadIcon />Generate Report</button></div>


            <h1 className='article_topic'><b>Articles & Books</b></h1>
            <center>  <hr className='article_hr'></hr></center>
            <br></br>

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
                            <MDBCard style={{ background: "#fffaa" }}>
                                <MDBCardBody style={{ background: "#fffb" }} >
                                    <center>
                                        <embed src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${e.article}`)} type="application/pdf" width="100%" height="400px" />
                                        <hr></hr>
                                        <div style={{ backgroundColor: ' #fffaa', borderRadius: '10px' }}>
                                            <MDBCardTitle style={{ fontSize: "25px", color: "#000000", textTransform: 'uppercase' }}><u>{e.title}</u></MDBCardTitle>
                                            <MDBCardText style={{ fontSize: "17px" }}>
                                                {e.description}
                                            </MDBCardText>
                                            <br></br>
                                            <MDBCardText style={{ fontSize: "18px" }}>
                                                Author Name - {e.authorName}
                                            </MDBCardText>
                                            <MDBCardText style={{ fontSize: "16px" }}>
                                                Category - {e.category}
                                            </MDBCardText>
                                            <MDBCardText style={{ fontSize: "15px" }}>
                                                Type - {e.type}
                                            </MDBCardText>
                                            <br></br>
                                            <MDBCardFooter style={{ borderRadius: '10px', backgroundColor: ' #8c8c8c' }}>
                                                <small className='text-muted' style={{ fontSize: "15px" }}>{e.postDate}</small>
                                            </MDBCardFooter>
                                        </div>
                                        <br></br>


                                        <Link to={"/updatearticle/" + e._id} >
                                            <Button variant="contained" className='viewPageUpdateBtn' >Update</Button>
                                        </Link>

                                        <Button className='viewPageDeleteBtn' color="error" onClick={() => { deleteArticle(e) }} variant="contained" >
                                            Delete
                                        </Button>

                                    </center>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}

                </MDBRow>

            </div>


        </div >
    )

}
