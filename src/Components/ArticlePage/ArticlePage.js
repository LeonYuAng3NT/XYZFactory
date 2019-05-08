import _ from 'lodash'
import React, { Component } from 'react'

import {
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

const LeftImage = () => (
    <Image
        floated='left'
        size='medium'
        src='./Processors.png'
        style={{ margin: '2em 2em 2em -4em' }}
    />
)

const RightImage = () => (
    <Image
        floated='right'
        size='medium'
        src='../img/BenchChart_one.png'
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
const SecondParagraph = () => (
    <p>
        {[
            'The main purpose of this is to test the bandwidth available for this operation and compare various memory configurations as well as various systems. For our initial testing, the benchmark will run on following systems to attain the results for the comparison:\r\nRyzen 5 2600 @4.0GHz, dual channel 8GB DDR4 @2666MHz 16-16-16-39\r\nRyzen 5 2600 @4.0GHz, Single channel 8GB DDR4 @2666MHz 16-16-16-39\r\nRyzen 7 1700 @3.8GHz, dual channel 8GB DDR4 @2666MHz 16-16-16-39\r\nIntel i7-3632-QM, dual channel 8GB DDR3 @1666MHz 11-11-11-28\r\nIntel i7-3632-QM, Single channel 8GB DDR3 @1666MHz 11-11-11-28\r\nintel i7-7700K @4.2GHz, Dual channel 32GB DDR4 @3000MHz 15-17-17-35\r\nSnapdragon 845 SoC (Using Samsung S9+ with Termux)\r\nAMD Opteron 6348 x4, quad channel 64GB DDR3\r\nThe following chart shows the results of the benchmarks:\r\n\r\n\r\n\r\n\r\n\r\nIn terms of the two options to write to memory, there was not much significant differences, as the outcome is mainly dependent on the system that the program runs on.\r\n\r\n\r\nAs expected, we see single channel mode to be on the bottom. But what is more interesting is that under this method of writing to memory, intel does not scale with more threads whatsoever and the bandwidth only decrease as the number of threads increase which is potentially due to contention of resources and extra instructions. Surprisingly, the Snapdragon system actually beats AMD for single threaded as well as the absolute maximum while the bandwidth slightly increases as the number of threads increase. As for our Ryzen system, the bandwidth appears to be maxed out at 2 threads and decreases as the number of threads increase. Lastly for our Opteron, we would give it an E for effort as it does scale from an increase in threads, it does not have a high throughput at all compared to the others.',
        ].join('')}
    </p>
)

const ThirdParagraph = () => (
    <p>
        {[
            '\r\nMemory Overclocks\r\nAs Ryzen is known to scale with memory overclocks we will proceed with our testing on our Ryzen systems. Our system for this test will be the 2600, as it had a higher maximum bandwidth at our initial test and \r\nwhy 2600 over the 1700?\r\nAlthough we do not know why the bandwidth scales\r\n The system for the test will be built with the following:\r\nRyzen 5 2600 @4.0GHz\r\n2x 4GB XPG DDR4 2666 16-16-16-39\r\nAsrock x370 Taichi\r\nintel 760p 512GB SSD\r\nMSI V1 Radeon RX 580 8GB\r\nCorsair HX 1200 Platinum\r\n\r\nTo start off, we begin with once again using the XMP profile of 2666MHz 16-16-16-39 for our baseline and the timings of 17-17-17-36 for our testings with variations in memory clocks as this is the lowest possible when the clock speed is maximized to 3000MHz. \r\n<chart>\r\nHere we can see that the bandwidth maximizes to 16.6 GB\/s with 3000MHz 17-17-17-36 and the bandwidth decreases as the memory frequency decrease.\r\n\r\nNext, we want to see what about the timings, what is the effect of having tighter timings while decreasing the clocked speed of the memory\r\n\r\nAs an added bonus for our final test to see if CPU clock speed affects memory, we ran the test wtih our 2600 at stock, 3.0GHz, and 2.5GHz.\r\n\r\nThere was not very much significant changes past 2 threads on my ryzen 2600 system with the maximum at when writing at 2 threads. The bottleneck appears to be due to dual channel.\r\nThis can be further confirmed when the memory is physically removed leaving 1 stick\r\n\r\n\r\nProgramming conclusion:\r\nMobile, supported instructions\r\noptimizations for intel\r\noptimizations for AMD\r\n\r\n\r\nOverclocking conclusion:\r\nIn general, while many common workloads do not depend on memory or use these type of instructions for memory, it still may be worth while to take advantage of the increase in performance\r\nIn terms of ryzen, as noted that this platform is dependent on memory it may be best to increase the clock speed while loosening the timings to get a more well rounded system for various workloads. As we can see, the timings did not have as much of a significant impact as the clock speed.\r\n\r\n',
        ].join('')}
    </p>
)

export default class StickyLayout extends Component {
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

        return (
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
                                <Image size='mini' src='/logo.png' />
                            </Menu.Item>
                            <Menu.Item header>Project Name</Menu.Item>
                            <Menu.Item as='a'>Blog</Menu.Item>
                            <Menu.Item as='a'>Articles</Menu.Item>

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
                    <RightImage />

     
                    <SecondParagraph />
                    <LeftImage />

                    <ThirdParagraph />
                    <RightImage />


                  
                </Container>

                <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                    <Container textAlign='center'>
                        <Grid columns={4} divided stackable inverted>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 1' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 2' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 3' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Footer Header' />
                                    <p>
                                        Extra space for a call to action inside the footer that could help re-engage
                                        users.
                  </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider inverted section />
                        <Image src='/logo.png' centered size='mini' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
              </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
              </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
              </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
              </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}