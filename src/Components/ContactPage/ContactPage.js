import _ from 'lodash'
import React, { Component } from 'react'
import logo from '../../logo.png';
import {
    ResponsiveContainer,
    Button,
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
}

const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
}

const Paragraph = () => (
    <p>
        {[
            'While putting together a computer system can be very simple, there can be many factors at play that can influence the build.  In this experiment, we designed an program to show the effects of different overclocks on the memory and discover various results that one may not have considered in their build.',

            '\r\nTo start off, we implement a memory benchmark that runs simulates a workload with a specified N number of threads that is writing directly to the memory with a memset call. ',
            'Inside, the program there is two parallelized versions using OpenMP. First, memTestNT parallelize such that all threads do the exact same specified amount of work separately. The second function, memTestNT1, parallelize such that all threads contribute to a for loop that specifies the total workload.\r\nWhile this is not the most effective way to write to memory from the excess instructions of the calls, it is the most intuitive way. This shows what typical code for writing to memory and the bandwidth available for the program looks like in terms of when ran on different systems. For more information about the test done, please refer to the following program:\r\nhttps:\/\/github.com\/dontbenchme\/mem\r\n',



        ].join('')}
    </p>
)

export default class StickyLayout extends Component {

  ToMain() {
    this.setState({
      ToMain: true
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      ToMain: false,
      ToResearch: false,
      ToContact: false,
      ToLogin: false,
      ToSignUp: false,
      menuFixed: false,
      overlayFixed: false,

    };

    this.ToMain = this.ToMain.bind(this);

  }
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    handleOverlayRef = (c) => {
        const { overlayRect } = this.state

        if (!overlayRect) {
            this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
        }
    }

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        
      const { menuFixed, overlayFixed, overlayRect } = this.state
      let view =  (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Contact info 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Please send an email to xyzfactoryteam@hotmail.com if you are interested in contribute to our platofrm. We currently do not publish any articles from anyone outside the team, but we are thrilled to first accept your research articles and publish it later. 
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Sponsors
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Unfortunately, we do not currently have any sponsors, so please send us an email if you are interested in sponsoring us.
            </p>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Career
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                We are currently not hiring people for any positions, but you are welcomed to keep in touch with us and follow our new research articles and blogs.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={logo} alt="logo" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button onClick={this.toContact} size='huge'>Join Us</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a great platform"
            </Header>
                <p style={{ fontSize: '1.33em' }}> <Icon name='user' size='small' />
                  <b>Anonymous</b> Master Student from UofT
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I wish I can learn this much before"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                  <Icon name='user' size='small' />
                  <b>Anonymous</b> Compute Science Student from UofT
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Location</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Our Team</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>Discussion Board</List.Item>
                <List.Item as='a'>Premium Membership</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Current Team Memebrs
              </Header>
              <p>
                Jack Yu, Leon Zhang
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

      return (
        view
      );

    }
}