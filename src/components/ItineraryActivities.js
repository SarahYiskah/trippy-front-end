import React, {Component} from 'react'
import { Alert } from 'reactstrap'
import { Button, Card, Form, Modal, Header } from 'semantic-ui-react'
import url from '../modules/link.js'

// import Itinerary from '../containers/Itinerary'

export default class ActivityDetails extends Component {

  constructor(props){
    super(props)

    this.state = {
      showButtons: props.showButtons,
      review: '',
      visible: false,
      delVisible: false,
      open: false,
      addReview: false,
      clickedItineraryId: props.clickedItineraryId
    }
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
    if (this.props.auth) {
      fetch(`${url}api/v1/reviews`, {
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
        this.toggleReview()
      })
    } else {
      this.props.history.push('/login')
    }
  }

  deleteActivity = (itineraryId, activityId) => {
    if (this.props.auth) {
      fetch(`${url}api/v1/users/${this.props.auth.user_id}/itineraries/${itineraryId}/activities/${activityId}`, {
        method: "DELETE",
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${this.props.auth.token}`
        }
      })
      .then(res => res.json())
      .then(json => {
        json.error ? null : this.props.changeActivities(json)})
    } else {
      this.props.history.push('/login')
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    let review = {review: `${this.state.review}`, user_id: this.props.auth.user_id, content_name: this.props.details.name}
    this.state.review.length === 0 ? null : this.createReview(review)
    this.setState({
      visible: true
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (e) => {
    this.setState({
      delVisible: true
    })
    let activityId = JSON.parse(e.target.id).id
    let itineraryId = this.state.clickedItineraryId
    this.deleteActivity(itineraryId, activityId)
  }

  render(){
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
          {this.state.showButtons ?
          <Card.Content extra>
            <div className='ui two buttons'>

           <Modal className="scrolling" trigger={<Button basic color='green' className="add-a-review" id={JSON.stringify(this.props.details)}>Add Review</Button>}>
            <Modal.Header>Add A Review</Modal.Header>
            <Modal.Content>
              <Header>{this.props.name}</Header>
              <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                Thank you for your review!
              </Alert>
              <Form onSubmit={this.handleSubmit}><Form.TextArea label='About' onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review}  placeholder="review"/><Form.Button>Submit</Form.Button></Form>
              <Modal.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          <Button basic color='red' onClick={this.handleClick} className="remove-from-trip" id={JSON.stringify(this.props.details)}>Remove From Trip</Button>



            </div>
          </Card.Content> : null }
        </Card>
      </div>
    )
  }
}
