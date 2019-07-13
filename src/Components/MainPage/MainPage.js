

class App extends Component {
  state = {users:[]}
  componentDidMount(){
    fetch('/users')
    .then(res=> res.json())
    .then(users=> this.setState({}))
  }
  ToContact(){
    this.setState({
      ToContact: true
    })
  }
  ToArticle() {
    this.setState({
      ToArticle: true
    })
  }
  constructor(props){
      super(props);
    this.state = {
        ToArticle:false,
        ToResearch:false,
        ToContact:false,
        ToLogin:false,
        ToSignUp:false,

    }; 
    this.ToArticle = this.ToArticle.bind(this);
    this.ToContact = this.ToContact.bind(this);
  }


  
  render() {
    let view =  (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Mission 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We are currently aimed to expland our site and increase the volume of our publicactions. 
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Goal
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Encourage enthusiasts to conduct their research and innovate their ideas.Yes that's right, send your articles to us and we will select the best ones to publish on our site.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={logo} alt="logo" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
                <Button onClick={this.ToContact} as='a' size='huge'>Join Us</Button>
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
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
      
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Guide to the Memory of a Program
   
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            While putting together a computer system can be very simple, there can be many factors at play that can influence the build.  In this experiment, we designed .......
        </p>
        <Button onClick={this.ToArticle} as='a' size='large'>
         Read More
        </Button>
      </Container>
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
                <List.Item as='a'>Research Opportunities</List.Item>
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



    if (this.state.ToContact === true){
      view = (
        <ContactPage />
      );
    }
    if (this.state.ToArticle === true) {
      view = (
        <ArticlePage />
      );
    }
    return (
      view
    );

  }
}


export default App;