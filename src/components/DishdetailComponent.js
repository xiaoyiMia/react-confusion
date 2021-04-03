import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ dishComments }) {
    if (dishComments == null) {
        return (
            <div></div>
        );
    }

    const comments = dishComments.map((comment) => {
        return (
            <li key={comment.id}>
                <div>{comment.comment}</div>
                <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</div>
            </li>
        )
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <div><h4>Comments</h4></div>
            <ul className="list-unstyled">{comments}</ul>
        </div>
    );
}

const Dishdetail = (props) => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments dishComments={props.comments} />
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }

}

export default Dishdetail;