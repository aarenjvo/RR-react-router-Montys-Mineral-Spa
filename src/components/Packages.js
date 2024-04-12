import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
        // <Container>
        //     <Carousel>
        //         <Carousel.Item>
        //             <Carousel.Caption>
        //                 <h3>Our Packages</h3>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <Carousel.Caption>
        //                 Check out some of our packages! Every package is ethically sourced and organic!
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             {displayPackages}
        //         </Carousel.Item>
        //     </Carousel>
        // </Container>

        // <div>
        //     <div className="packages">
        //         <div className="packagesHeader">
        //             <h1>Our Packages</h1>
        //         </div>
        //         <ul>
        //             { displayPackages }
        //         </ul>

        //     </div>
        // </div>
    )
}