import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
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

    renderComments(dishComments) {
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

    render() {
        const dish = this.props.selectedDish;

        if (dish) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default Dishdetail;