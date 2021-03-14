import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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

    const dish = props.selectedDish;

    if (dish) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments dishComments={dish.comments} />
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }

}

export default Dishdetail;