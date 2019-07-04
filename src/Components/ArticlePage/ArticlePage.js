import _ from 'lodash'
import React, { Component } from 'react'
import processors from './processors.png'
import processors2 from './processors2.png'
import graph from './graph.png'
import graph1 from './graph1.png'
import graph2 from './graph2.png'
import logo from './logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactPage from '../ContactPage/ContactPage'
import App from '../../App.js';

import {
    Button,
    Container,
    Divider,
    Item,
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

const RightImage = () => (
    <Image
        floated='right'
        size='medium'
        src={graph} alt="graph"
      style={{ margin: '2em -4em 2em 2em' }}
    />

)
const NameImage = () => (
    <Image
        floated='left'
        size='medium'
        src={processors} alt="processors"
       
    /> 
)
const SecondRightImage = () => (
    <Image
        floated='right'
        size='medium'
        src={graph1} alt="graph1"
        style={{ margin: '2em -4em 2em 2em' }}
    />
)
const SecondGraphImage = () => (
    <Image
        floated='right'
        size='medium'
        src={graph2} alt="graph2"
        style={{ margin: '2em -4em 2em 2em' }}
    />
)

const SecondProcessorsImage = () => (
    <Image
        floated='right'
        size='medium'
        src={processors2} alt="processors2"
        style={{ margin: '2em -4em 2em 2em' }}
    />
)

const Paragraph = () => (
    <p>
        {[
            'While putting together a computer system can be very simple, there can be many factors at play that can influence the build.  In this experiment, we designed an program to show the effects of different overclocks on the memory and discover various results that one may not have considered in their build.',
            
            '\r\nTo start off, we implement a memory benchmark that runs simulates a workload with a specified N number of threads that is writing directly to the memory with a memset call. ',
            
            'Inside, the program there is two parallelized versions using OpenMP. First, memTestNT parallelize such that all threads do the exact same specified amount of work separately. The second function, memTestNT1, parallelize such that all threads contribute to a for loop that specifies the total workload.\r\nWhile this is not the most effective way to write to memory from the excess instructions of the calls, it is the most intuitive way. This shows what typical code for writing to memory and the bandwidth available for the program looks like in terms of when ran on different systems. For more information about the test done, please refer to the following program:\r\nhttps:\/\/github.com\/dontbenchme\/mem\r\n',

         
            
        ].join('')}
    </p>
)
const typelist = ['Ryzen 5 2600 @4.0GHz',
    '2x 4GB XPG DDR4 2666 16 - 16 - 16 - 39',
    'Asrock x370 Taichi',
    'intel 760p 512GB SSD',
    'MSI V1 Radeon RX 580 8GB',
    'Corsair HX 1200 Platinum']
const listItems = (list) => list.map((item) =>
    <li>{item}</li>
);
const SecondParagraph = () => (
    <p>
        {[
            'The main purpose of this is to test the bandwidth available for this operation and compare various memory configurations as well as various systems. For our initial testing, the benchmark will run on following systems to attain the results for the comparison:'].join('')}
            </p>
   
    
    
)

const ThirdParagraph = () => (
    <p>
        {[
            'The following chart shows the results of the benchmarks:\r\n\r\n\r\n\r\n\r\n\r\nIn terms of the two options to write to memory, there was not much significant differences, as the outcome is mainly dependent on the system that the program runs on.\r\n\r\n\r\n\r\n\r\n\r\nAs expected, we see single channel mode to be on the bottom. But what is more interesting is that under this method of writing to memory, intel does not scale with more threads whatsoever and the bandwidth only decrease as the number of threads increase which is potentially due to contention of resources and extra instructions.',
            'Surprisingly, the Snapdragon system actually beats AMD for single threaded as well as the absolute maximum while the bandwidth slightly increases as the number of threads increase. As for our Ryzen system, the bandwidth appears to be maxed out at 2 threads and decreases as the number of threads increase. ',
            'Lastly for our Opteron, we would give it an E for effort as it does scale from an increase in threads, it does not have a high throughput at all compared to the others.',

        ].join('')}
    </p>,
    <p>
        {[
            'As Ryzen is known to scale with memory overclocks we will proceed with our testing on our Ryzen systems. Our system for this test will be the 2600, as it had a higher maximum bandwidth at our initial test and \r\nwhy 2600 over the 1700?\r\nAlthough we do not know why the bandwidth scales\r\n ',
             'The system for the test will be built with the following:',
          
        ].join('')}
    </p>

)


const FourthParagraph = () => (
    <p>
        {[
            'In both methods of writing to memory, we see that when running in single channel, the maximum bandwidth is attained by using only one thread. This is also significantly lower when compared to any of the dual channel modes except for dual channel at 1866MHz. ',
'Next, consider the bandwidth of dual channel.In all cases, it appears that the bandwidth is maximized with two active threads running the algorithm. At each clock speed that was tested, we see that the bandwidth can be further maximized by tightening the timing. With the maximum bandwidth of 16.6GB/s with 3000MHz at 17-17-17-36, it appears that, when overclocking memory, the best case seems to be to prioritize the maximization of the frequency of the memory first before tightening up any timings.',
        'As an added bonus for our final test to bring some closure to the insignificance of using Ryzen 7 1700 vs Ryzen 5 2600, we ran the test on our Ryzen 7 1700 at 1.6GHz to see if the older CPU with a lower clock speed affects memory. Please take a look at the following output:',
        
        'Therefore, we can see that the frequency of the CPU and an older architecture did not have any significance on this test as we were able to reach a bandwidth that is with minimal differences as the Ryzen 2600 running at 4GHz.',
        
        ].join('')}
    </p>

)



const FifthParagraph = () => (
    <p>
        {[
            '\r\n\r\n\r\n\r\n\r\n\r\nProgramming conclusion:',
'\r\n\r\n\r\n\r\n\r\n\r\nFrom this test, it may appear that when writing programs that involves significant memory operations, it may be helpful to consider the following.',
'For mobile applications, the bandwidth scales well with an increase in the number of threads actively writing to memory.So to optimize mobile applications, one may consider liberally using all the cores available to their disposal.',
        'Applications written for the intel platform may consider only utilizing one thread, unless the parallized nature of the application have other requirements.When writing with only one thread the application can leave resources to other parts of the application or other applications for a more overall optimal use of resources.',
        'Optimizations for AMD on the other hand may be best to write in parallel.If the program can be written to utilize multiple threads, one may consider only using two threads active at a time for memory operations.We saw evidence of this with the bandwidth being maximized at two threads and slowly decreases as the number of threads increases.',
        
        '\r\n\r\n\r\n\r\n\r\n\r\nOverclocking conclusion:',
        '\r\n\r\n\r\n\r\n\r\n\r\nIn general, while many common workloads do not depend on memory or use these type of instructions for memory, it still may be worthwhile to take advantage of the increase in performance.Personally, from testing on the Ryzen platform, I have a preference on maximizing the frequency of the memory over tightening the timings of memory.Especially since Ryzen is dependent on memory it may be better  to increase the clock speed while loosening the timings to get a more well rounded system for various workloads.' ,
        'If one would like to make use of this tool, feel free to clone it from the GitHub repo and run it to optimize their memory overclock.To run the application after cloning the repo please refer to the README document.',
        
                ].join('')}
    </p>

)
function DisplayList(list) {
    return (
        <div>
            {list.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
}
export default class StickyLayout extends Component {
    ToContact() {
        this.setState({
            ToContact: true
        })
    }
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
        this.secondlist = ['Ryzen 5 2600 @4.0GHz',
        '2x 4GB XPG DDR4 2666 16 - 16 - 16 - 39',
        'Asrock x370 Taichi',
        'intel 760p 512GB SSD',
        'MSI V1 Radeon RX 580 8GB',
        'Corsair HX 1200 Platinum']
        this.firstlist = [
        'Ryzen 5 2600 @4.0GHz, Single channel 8GB DDR4 @2666MHz 16 - 16 - 16 - 39',
        'Ryzen 7 1700 @3.8GHz, dual channel 8GB DDR4 @2666MHz 16 - 16 - 16 - 39',
        'Intel i7 - 3632QM, dual channel 8GB DDR3 @1666MHz 11 - 11 - 11 - 28',
        'Intel i7 - 3632QM, Single channel 8GB DDR3 @1666MHz 11 - 11 - 11 - 28',
        'Intel i7 - 7700K @4.2GHz, Dual channel 32GB DDR4 @3000MHz 15 - 17 - 17 - 35',
        'Snapdragon 845 SoC(Using Samsung S9 + with Termux)',
        'AMD Opteron 6348 x4, quad channel 64GB DDR3',
]
        this.ToMain = this.ToMain.bind(this);
        this.ToContact = this.ToContact.bind(this);
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
        let view = (
            <div>
                {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
                <style>{`
          html, body {
            background: #fff;
          }
        `}
                </style>

                <Container text style={{ marginTop: '2em' }}>
                    <Header as='h1'>Experiment of Memory Benchmark</Header>
                    <p>
                        This article is written by Jack Yu
          </p>
                </Container>

                {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src={logo} alt="logo" />
                            </Menu.Item>
                            <Menu.Item header>Memory Benchmark</Menu.Item>
                            <Menu.Item as='a'>CPU</Menu.Item>
                            <Menu.Item as='a' >Articles</Menu.Item>

                            <Menu.Menu position='right'>
                                <Dropdown text='Dropdown' pointing className='link item'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Header>Header Item</Dropdown.Header>
                                        <Dropdown.Item>
                                            <i className='dropdown icon' />
                                            <span className='text'>Submenu</span>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>List Item</Dropdown.Item>
                                                <Dropdown.Item>List Item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Visibility>

                <Container text>
              
                    {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
                    <Visibility
                        offset={80}
                        once={false}
                        onTopPassed={this.stickOverlay}
                        onTopVisible={this.unStickOverlay}
                        style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
                    />

                    <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
                        <Menu
                            icon='labeled'
                            style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                            vertical
                        >
                            <Menu.Item>
                                <Icon name='twitter' />
                                Twitter
              </Menu.Item>

                            <Menu.Item>
                                <Icon name='facebook' />
                                Share
              </Menu.Item>

                            <Menu.Item>
                                <Icon name='mail' />
                                Email
              </Menu.Item>
                        </Menu>
                    </div>


                    <Paragraph />
                    <Router 
                        path="https://github.com/dontbenchme/mem"
                        render={
                         () => 
                             <h3>https://github.com/dontbenchme/mem</h3>
                        }
                    
                    
                    />
                    <RightImage />
                   
                    <SecondParagraph />
                   

                    <ul>{listItems(this.firstlist)}</ul>
                    <SecondGraphImage />
                    <NameImage />
                    <ThirdParagraph />
                    <SecondRightImage />
                    <ul>{listItems(this.secondlist)}</ul>
              
                    <FourthParagraph />
                    <SecondProcessorsImage/>
                    <FifthParagraph/>
                   
                

                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button onClick={this.ToMain} size='huge'>Back to Main Page</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Container>

            
            </div>);
        if (this.state.ToContact === true) {
            view = (
                <ContactPage />
            );
        }
        if (this.state.ToMain === true) {
            view = (
                <App />
            );
        }
        return (
            view
        );
        
    }
}