import React, {Component} from 'react'
import { Alert } from 'reactstrap'
import { Button, Card, Modal, Header } from 'semantic-ui-react'
import Itinerary from '../containers/Itinerary'


export default class ActivityDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      clickedItineraryId: props.clickedItineraryId,
      alreadyInItinerary: false,
      open: false,
    }
  }

  show = (size) => () => this.setState({size, open: true })
  close = () => this.setState({ open: false })

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
    this.props.setClickedActivity(JSON.parse(e.target.id))
  }



  render(){
    return(
      <div>

        <Card className = 'centered' style={{width: '400px', height: '300px', margin: '30px', border: '2px solid rgba(73, 160, 181, 1)'}}>
          <Card.Content>
            <Card.Header>
              <a href={this.props.details.venue.url} target="_blank">{this.props.details.venue.name}</a>

            </Card.Header>
            <Card.Meta>
              {this.props.details.venue.location.formattedAddress}
            </Card.Meta>
            <Card.Description>
              {this.props.details.tips ? `${this.props.details.tips[0].text} -  ${this.props.details.tips[0].user.firstName}` : null}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>

           <Modal className="scrolling" trigger={<Button basic color='green' onClick={this.handleClick} id={JSON.stringify(this.props.details)}>Add To Trip</Button>}>
            <Modal.Header>Add To Trip</Modal.Header>
            <Modal.Content>
              <Header>{this.props.details.venue.name}</Header>
              <Alert color="success" isOpen={this.props.makeVisible} toggle={this.props.onDismiss}>
                {this.props.details.venue.name} has been added!
              </Alert>
              {this.state.clicked ? <Itinerary auth={this.props.auth} clickHandle={this.props.clickHandle} changeItineraryId={this.props.changeItineraryId} history={this.props.history} sendAlert={true}/> : null}
              <Modal.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>


          </Card.Content>
        </Card>
      </div>
    )
  }
}
