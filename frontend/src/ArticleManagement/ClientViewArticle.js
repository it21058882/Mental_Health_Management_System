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



    //refreash
    function refreshPage() {
        window.location.reload(false);
    }



    return (
        <div>

            <div className="order_bground" style={{ zIndex: 98 }} >


                <div style={{ marginBottom: "-45px" }}>

                    <input
                        onChange={searchItem}
                        className='form-control searchbararticle'
                        type='search'
                        placeholder='Search ....'
                        name='searchQuery'>
                    </input>
                    <div className='dropdownarticle'>
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
                    value={selectedType} onChange={handleTypeSelection} style={{ marginLeft: "52%", marginTop: "-10px" }}
                >
                    <FormControlLabel value="Book" control={<Radio />} label="Book" />
                    <FormControlLabel value="Article" control={<Radio />} label="Article" />
                </RadioGroup>



                <div className='all_container'>

                    <h1 className='article_topic'><b>Articles & Books</b></h1>
                    <center>  <hr className='article_hr'></hr></center>
                    <div class="addArticle_div">

                        <br></br>

                        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                            {Article.filter(e =>
                                (selectedCategory === "" || e.category === selectedCategory) ||
                                e.title.toLowerCase().includes(search) ||
                                e.authorName.includes(search) ||

                                e.type === selectedType

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
                                                    <small className='text-muted' style={{ fontSize: "10px" }}>{e.postDate}</small>
                                                </MDBCardFooter>

                                                <Link to={"/articlefullview/" + e._id} >
                                                        <Button style={{
                                                            backgroundColor: "#B4B731", marginRight: "20px"
                                                        }} variant="contained" >view</Button>
                                                    </Link>

                                            </center>  </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            ))}

                        </MDBRow>

                    </div>
                </div>
            </div>
        </div >
    )

}