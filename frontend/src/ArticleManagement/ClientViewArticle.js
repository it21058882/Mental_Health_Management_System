import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from "@mui/material";
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Card, CardBody, CardTitle, CardText, CardFooter, Col, Row } from 'reactstrap';
import AddArticleGIF_3 from '../Assets/Images/clientviewarticle.jpeg';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { Box, styled } from "@mui/system";
import Nav from "../Ui/nav";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
} from 'mdb-react-ui-kit';

import {



    Typography,
    IconButton,

} from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Articles() {

    //Search date and get details
    const [search, setSearch] = useState("");
    function searchItem(event) {
        setSearch(event.target.value);
        console.log(event.target.value)
    }

    //////////////////
    const { id } = useParams();


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

    /////////////////////////////////////////////////////////////////

    const [isLiked, setIsLiked] = useState();
    const [isDisliked, setIsDisliked] = useState();

    const handleLikeButton = async (bid) => {
        try {
            const response = await axios.patch("http://localhost:8050/article/likearticle", {
                id: id,
                bid: bid,
            });

            setIsLiked(response.data.post.isLiked);

            setIsDisliked(response.data.post.isDisliked);

            console.log(response);

        } catch (error) {

            console.log(error);

        }

    };

    const handleDislikeButton = async (bid) => {

        try {

            const response = await axios.patch("http://localhost:8050/article/dislikearticle", {

                id: id,

                bid: bid,

            });

            setIsLiked(response.data.post.isLiked);

            setIsDisliked(response.data.post.isDisliked);

            console.log(response);

        } catch (error) {

            console.log(error);

        }

    };



    return (
        <div>
            <Nav />
            <div className="order_bground" style={{ zIndex: 98 }}>

                <div style={{ marginBottom: "-45px" }}>

                    <input
                        onChange={searchItem}
                        className="form-control searchbararticleClient"
                        type="search"
                        placeholder="Search ...."
                        name="searchQuery"
                    />
                    <div className="dropdownarticleClient">
                        <select
                            className="form-control"
                            value={selectedCategory}
                            onChange={handleCategorySelection}
                            style={{ marginLeft: '250%', width: '200%', marginBottom: '-20px' }}
                        >
                            <option value="">Select Category</option>
                            <option value="Depression">Depression</option>
                            <option value="Self-Care and Well-being">Self-Care and Well-being</option>
                            <option value="Relationship and Communication">Relationship and Communication</option>
                            <option value="Stress Management">Stress Management</option>
                            <option value="Mindfulness and Meditation">Mindfulness and Meditation</option>
                            <option value="Anxiety">Anxiety</option>
                        </select>
                    </div>
                </div>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    className="radioBtnarticleclient"
                    value={selectedType}
                    onChange={handleTypeSelection}
                    style={{ background: '#fff', marginLeft: "85%", marginTop: "10px", marginBottom: '-20px', width: '10%' }}
                >
                    <FormControlLabel value="Book" control={<Radio />} label="Book" />
                    <FormControlLabel value="Article" control={<Radio />} label="Article" />
                </RadioGroup>

                <div className="all_container">
                    <h1 className="article_topic">
                        <b>Articles & Books</b>
                    </h1>
                    <center>
                        <hr className="article_hr" />
                    </center>
                    <br></br>
                    <div class="addArticle_div" style={{ backgroundImage: `url(${AddArticleGIF_3})` }}>
                        <br />
                        <Row className="row-cols-1 row-cols-md-2 g-4">
                            {Article.filter(
                                (e) =>
                                    (selectedCategory === "" || e.category === selectedCategory) ||
                                        e.title.toLowerCase().includes(search) ||
                                        e.authorName.includes(search) 
                                        // ||
                                        // selectedType === "" ? true : e.type === selectedType
                            ).map((e) => (
                                <Col>
                                    <Card>
                                        <CardBody style={{ background: "#ffff", borderRadius:'20px' }}>
                                            <center>
                                                <embed
                                                    src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${e.article}`)}
                                                    type="application/pdf"
                                                    width="100%"
                                                    height="400px"
                                                />
                                                <hr />
                                                <CardTitle style={{ fontSize: "25px", color: "#4CAF50", textTransform: 'uppercase' }}><u><h3>{e.title}</h3></u></CardTitle>
                                                <CardText style={{ fontSize: "14px" }}>{e.description}</CardText>
                                                <br></br>
                                                <CardText style={{ fontSize: "15px" }}>
                                                    Author Name - {e.authorName}
                                                </CardText>
                                                <CardText style={{ fontSize: "15px" }}>
                                                    Category - {e.category}
                                                </CardText>
                                                <CardText style={{ fontSize: "15px" }}>Type - {e.type}</CardText>
                                                <br></br>
                                                <CardFooter style={{ borderRadius: "10px" }}>
                                                    <small className="text-muted" style={{ fontSize: "10px" }}>
                                                        {e.postDate}
                                                    </small>
                                                </CardFooter>
                                                {/* ///////////////////////////////////////////////////////////// */}
                                                <Box display={"flex"} justifyContent={"space-between"}>

                                                    <Box display={"flex"} alignItems={"center"}>

                                                        <IconButton

                                                            onClick={() => handleLikeButton(e._id)}

                                                            style={{

                                                                color: e.isLiked ? "blue" : "inherit",

                                                                transition: "color 0.5s ease",

                                                            }}

                                                        >

                                                            {e.isLiked ? (

                                                                <ThumbUpIcon />

                                                            ) : (

                                                                <ThumbUpOffAltOutlinedIcon />

                                                            )}

                                                        </IconButton>




                                                        <Typography fontSize={20} fontWeight={800} ml={1}>

                                                            {e.likes.length}

                                                        </Typography>

                                                    </Box>

                                                    <Box display={"flex"} alignItems={"center"}>

                                                        <Typography fontSize={20} fontWeight={800} ml={1}>

                                                            {e.dislikes.length}

                                                        </Typography>

                                                        <IconButton

                                                            onClick={() => handleDislikeButton(e._id)}

                                                            style={{

                                                                color: e.isDisliked ? "red" : "inherit",

                                                                transition: "color 0.5s ease",

                                                            }}

                                                        >

                                                            {e.isDisliked ? (

                                                                <ThumbDownIcon />

                                                            ) : (

                                                                <ThumbDownOutlinedIcon />

                                                            )}

                                                        </IconButton>

                                                    </Box>
                                                </Box>
                                                {/* ///////////////////////////////////////////////////////////// */}
                                                <a
                                                    className="btn btn-danger"
                                                    href={"/articlefullview/" + e._id}
                                                    style={{ backgroundColor: "#B4B731", width: "200px" }}
                                                >
                                                    VIEW
                                                </a>
                                            </center>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )

}
