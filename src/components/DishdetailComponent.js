import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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
            let dte = new Date(cmt.date)
            let Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            let ProperDate=Months[dte.getMonth()]+" "+dte.getDate()+", "+dte.getFullYear();
            return(
                <li key={cmt.id}>
                    <div>{cmt.comment}</div>
                    <br></br>
                    <div>-- {cmt.author} , {ProperDate}</div>
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )
        }
        return(<div></div>)
    }
}
export default DishDetail;