import React, {Component} from 'react'
import { Alert } from 'reactstrap'
import { Button, Card, Image, Form, Modal, Message, Header } from 'semantic-ui-react'
import Itinerary from '../containers/Itinerary'

export default class ActivityDetails extends Component {

  state = {
    // addReview: false,
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

  onDismiss = () => {
    this.setState({ visible: false });
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
        {/* <div className="activity-box">
          <div className="content">
            <div className="title"><a href={this.props.url} target="_blank">{this.props.name}</a></div>
            <div className="meta">
              {this.props.formattedAddress}
            </div>
            <div className="description">
              {this.props.details.tip ? <p>{this.props.details.tip}</p> : null}
            </div>
          </div>
          <br/>
          <button onClick={this.toggleReview} className="add-a-review" id={JSON.stringify(this.props.details)}>
            <i className="add icon"></i>
            Add review
          </button>
          <br/>
          {this.state.addReview ? <form onSubmit={this.handleSubmit}><br/><textarea onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review} placeholder="review"/><br/><input type="submit"/></form> : null}
          <br/>
          <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
            Thank you for your review!
          </Alert>
          <button onClick={this.handleClick} className="remove-from-trip" id={JSON.stringify(this.props.details)}>
            <i className="remove icon"></i>
            Remove from trip
          </button>
          <Alert color="danger" isOpen={this.state.delVisible} toggle={this.onDelDismiss}>
            This activity has been removed from your trip
          </Alert>
        </div> */}
        <Card className = 'centered' style={{width: '400px', height: '200px', margin: '40px'}}>
          <Card.Content>
            <Card.Header>
              <a href={this.props.url} target="_blank">{this.props.name}</a>
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

               <Button basic color='green' onClick={this.toggleReview} className="add-a-review" id={JSON.stringify(this.props.details)}>Add Review</Button>

               <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                Thank you for your review!
              </Alert>

              {this.state.addReview ? <Form onSubmit={this.handleSubmit}><Form.TextArea label='About' placeholder='Tell us more about you...' onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review}  placeholder="review"/><Form.Button>Submit</Form.Button></Form> : null}

              {/* <Modal trigger={this.state.addReview === true}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal> */}

              {/* <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>
                  Submit Review
                </Modal.Header>
                <Modal.Content>
                  <Form onSubmit={this.handleSubmit}><Form.TextArea label='About' placeholder='What did you think?' onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review}  placeholder="review"/><Form.Button>Submit</Form.Button></Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button negative>
                    No
                  </Button>
                  <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                </Modal.Actions>
              </Modal> */}

              {/* <Button basic color='green' onClick={this.toggleReview} className="add-a-review" id={JSON.stringify(this.props.details)}>Add Review</Button>
              <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                Thank you for your review!
              </Alert>

              {this.state.addReview ? <Form onSubmit={this.handleSubmit}><Form.TextArea label='About' placeholder='Tell us more about you...' onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review}  placeholder="review"/><Form.Button>Submit</Form.Button></Form> : null} */}

              {/* {this.state.addReview ? <form onSubmit={this.handleSubmit}><br/><textarea onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review} placeholder="review"/><br/><input type="submit"/></form> : null} */}

              <Button basic color='red' onClick={this.handleClick} className="remove-from-trip" id={JSON.stringify(this.props.details)}>Remove From Trip</Button>


              <Alert color="danger" isOpen={this.state.delVisible} toggle={this.onDelDismiss}>
                Removed!
              </Alert>

            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
