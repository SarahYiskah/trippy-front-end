import React, {Component} from 'react'
import { Alert } from 'reactstrap'
import { Button, Card, Image, Form, Modal, Message, Header } from 'semantic-ui-react'
import Itinerary from '../containers/Itinerary'

export default class ActivityDetails extends Component {

  state = {
    addReview: false,
    review: '',
    visible: false,
    delVisible: false,
    open: false
  }

  show = (size) => () => this.setState({size, open: true })
  close = () => this.setState({ open: false })

  toggleReview = () => {
    this.setState({
      addReview: !this.state.addReview
    })
  }



  onDelDismiss = () => {
    this.setState({ delVisible: false });
  }

  createReview = (review) => {
    fetch(`http://localhost:3000/api/v1/reviews`, {
      headers:  {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      },
      body: JSON.stringify(review),
      method: "POST"
    })
    .then(res => res.json())
    .then(json => {
      console.log("successfully added review", json)
      this.toggleReview()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let review = {review: `${this.state.review}`, user_id: this.props.auth.user_id, content_name: this.props.details.name}
    this.createReview(review)
    this.setState({
      visible: true
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      delVisible: true
    })
    console.log("you will be deleted shortly")
  }

  render(){
    const { open, size } = this.state
    return(
      <div>

        <Card className = 'centered' style={{width: '400px', height: '200px', margin: '40px'}}>
          <Card.Content>
            <Card.Header>
              <a href={this.props.url} target="_blank">{this.props.name}</a>
              <Alert color="danger" isOpen={this.state.delVisible} toggle={this.onDelDismiss}>
                Removed!
              </Alert>
            </Card.Header>
            <Card.Meta>
              {this.props.formattedAddress}
            </Card.Meta>
            <Card.Description>
              {this.props.details.tip ? <p>{this.props.details.tip}</p> : null}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>

           <Modal trigger={<Button basic color='green' className="add-a-review" id={JSON.stringify(this.props.details)}>Add Review</Button>}>
            <Modal.Header>Add A Review</Modal.Header>
            <Modal.Content>
              <Header>{this.props.name}</Header>
              <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                Thank you for your review!
              </Alert>
              <Form onSubmit={this.handleSubmit}><Form.TextArea label='About' placeholder='Tell us more about you...' onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review}  placeholder="review"/><Form.Button>Submit</Form.Button></Form>
              <Modal.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          <Button basic color='red' onClick={this.handleClick} className="remove-from-trip" id={JSON.stringify(this.props.details)}>Remove From Trip</Button>



            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
