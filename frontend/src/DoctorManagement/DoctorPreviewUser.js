import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from "../Ui/nav";
import "./DoctorPreview.css";

function Doctor() {
  const [Doctor, setDoctor] = useState([]);


  //Search date and get details

  const [search, setSearch] = useState("");

  function searchItem(event) {

    setSearch(event.target.value);

    console.log(event.target.value)

  }


  const getDoctor = () => {
    axios.get("http://localhost:8050/doctor/getdoctor")
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }




  useEffect(() => { getDoctor() });  //Shows changes of the page

  return (
    <div>
      <Nav />
      <div className='main'>

        <div className='container text-center'>
          <input

            onChange={searchItem}

            className='form-control searchbararticle'

            type='search'

            placeholder='Search ....'

            name='searchQuery'>
          </input>


          <h1 className='text-center-heading'>Therapist</h1>

          <div className='container d-flex flex-wrap' style={{ width: '80%' }}>
            {/* {Doctor.filter(data => data.firstName.)
        map(data => ( */}

            {Doctor.filter(data =>


              data.firstName.toLowerCase().includes(search)

            ).map(data => (





              <Card style={{ width: '25rem', margin: '3rem', padding: '1rem' }}>
                <Card.Img src={data.image} />
                <Card.Body >
                  <Card.Title>Ms. {data.firstName + ' ' + data.lastName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{data.DoctorId}</Card.Subtitle>
                  <Card.Text>

                    First Name = {data.firstName}<br />
                    Last Name = {data.lastName}<br />
                    Type      = {data.type}<br />
                    Gender   = {data.gender}<br />
                    Email    = {data.email}<br />
                    Specialization  ={data.specialization}<br />



                  </Card.Text>

                  <br></br>
                  <Link key={`${data._id} + 4`} to={"/channelForm/" + data._id}>
                    <Button key={`${data._id} + 1`} className='btn3'>Channel</Button>
                  </Link>

                </Card.Body>
              </Card>
            ))}
            <hr></hr>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Doctor;