import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    renderDish(dish) {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody> 
            </Card>
        );
    }
    
    renderComments(comments) {
        let list_cmt=comments.map((cmt)=>{
            return(
                <li key={cmt.id}>
                    <div>{cmt.comment}</div>
                    <br></br>
                    <div>-- {cmt.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(cmt.date)))}</div>
                    <br></br>
                </li>
            );
        })
        if(comments){
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {list_cmt}
                    </ul>
                </div>
            );
        }
        return(<div></div>);
    }

    render(){
        if (this.props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            )
        }
        return(<div></div>)
    }
}
export default DishDetail;