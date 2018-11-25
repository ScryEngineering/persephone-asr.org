import * as React from 'react';
import './App.css';

import { Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

import './semantic/dist/semantic.min.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Segment vertical={true} className="background phone" inverted={true}>
          <Container className="section_container">
            <Header as="h1" inverted={true}>
              Persephone
              <Header.Subheader>Simple, reproducible, fast.</Header.Subheader>
            </Header>
          </Container>
          <Container className="section first section_container">
            <Header as="h1" inverted={true} className="masthead_heading">
              Transcribe your audio into phonemes with an intuitive graphical tool that leverages the power of machine learning.
            </Header>
            <p className="masthead_sub">Persephone is a powerful open source toolkit for streamlining audio transcription processes.</p>
            <p className="masthead_sub">Persephone is used by linguists in leading research institutions around the world, including North America, Europe, and the Asia-Pacific region. The tool saves these teams hundreds of hours of work every year by automating the laborous process of transcribing audio recordings.</p>
            <Grid stackable={true} centered={true} columns="3" className="illustration">
              <Grid.Column textAlign="center">
                <Image src="/img/white-waveform.png" />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Icon name="long arrow alternate down" size="massive" className="down_arrow" />
                <Icon name="long arrow alternate right" size="massive" className="right_arrow" />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Image src="/img/persephone.png" />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <Segment vertical={true} textAlign="center" className="section">
          <Container className="section_container">
            <Header as="h2" className="section_header">Trusted by leading research institutions around the world</Header>
            <Image.Group size="small">
              <Image fluid={true} src="/img/unimelb_logo.jpg" />
              <Image fluid={true} src="/img/anu_logo.jpg" />
              <Image fluid={true} src="/img/cmu_logo.jpg" />
              <Image fluid={true} src="/img/cnrs_logo.jpg" />
              <Image fluid={true} src="/img/uq_logo.jpg" />
            </Image.Group>
          </Container>
        </Segment>
        <Segment textAlign="center" vertical={true} className="section background vinyl" inverted={true}>
          <Container className="section_container">
            <Header as="h2" className="section_header" inverted={true}>An intuitive, streamlined process</Header>
            <Grid centered={true} columns="equal" relaxed="very" stackable={true} padded="horizontally">
              <Grid.Column textAlign="center">
                <Header as="h3" icon={true} textAlign="center" inverted={true}>
                  <Icon name="cloud upload" />
                  <Header.Content>Upload</Header.Content>
                </Header>
                <p>Upload audio files and training transcriptions</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h3" icon={true} textAlign="center" inverted={true}>
                  <Icon name="box" />
                  <Header.Content>Group</Header.Content>
                </Header>
                <p>Group utterances into a corpus and define language model parameters</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h3" icon={true} textAlign="center" inverted={true}>
                  <Icon name="hourglass start" />
                  <Header.Content>Train</Header.Content>
                </Header>
                <p>Train the model on a CPU or a GPU</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h3" icon={true} textAlign="center" inverted={true}>
                  <Icon name="language" />
                  <Header.Content>Transcribe</Header.Content>
                </Header>
                <p>Use the trained language model to transcribe the remaining audio</p>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <Segment vertical={true} textAlign="center" className="section">
          <Container className="section_container">
            <Header as="h2" className="section_header">Get started in five minutes</Header>
            <Container text={true} textAlign="left">
              <p>You can automatically deploy the Persephone web stack including the web API and web frontend by using <span className="inline_code"><a href="https://www.docker.com/">docker</a></span> and <span className="inline_code"><a href="https://docs.docker.com/compose/">docker-compose</a></span> which runs the various required <span className="inline_code">docker</span> images.</p>
              <p>Begin by installing <span className="inline_code">docker-compose</span> as in the <span className="inline_code"><a href="https://docs.docker.com/compose/install/">official install instructions</a></span>. Because the <span className="inline_code">docker-compose.yml</span> file specifies compose file format <span className="inline_code">3.0</span> you will need to have at least <span className="inline_code">docker</span> engine <span className="inline_code">1.13.0</span> or higher.</p>
              <p>Once you have docker and <span className="inline_code">docker-compose</span> installed, clone the <span className="inline_code"><a href="https://github.com/aapeliv/persephone-docker">persephone-docker</a></span> repository with the following commands:</p>
              <p className="code_block">git clone git@github.com:aapeliv/persephone-docker.git<br />cd persephone-docker</p>
              <p>Now run the docker containers with the following command:</p>
              <p className="code_block">docker-compose up</p>
              <p>The Persephone frontend should now be running at <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>.</p>
            </Container>
          </Container>
        </Segment>
        <Segment textAlign="center" vertical={true} className="section background wood">
          <Container className="section_container">
            <Header as="h2" className="section_header" inverted={true}>Documentation, community, and commercial support</Header>
            <Grid centered={true} columns="equal" relaxed="very" stackable={true} padded="horizontally">
              <Grid.Column>
                <Container className="bottom_card">
                  <Header as="h3">Community</Header>
                  <p>Join the Persephone users’ community on our official mailing lists, for community support and announcements!</p>
                </Container>
                <Container textAlign="right" className="bottom_link"><a href="https://lists.persephone-asr.org/" className="bottom_link_a">To mailing lists <Icon name="arrow circle right" /></a></Container>
              </Grid.Column>
              <Grid.Column>
                <Container className="bottom_card">
                  <Header as="h3">Code</Header>
                  <p>Persephone is Open Source. All code for the Persephone suite is hosted on GitHub.</p>
                </Container>
                <Container textAlign="right" className="bottom_link"><a href="https://github.com/persephone-tools/" className="bottom_link_a">To GitHub <Icon name="arrow circle right" /></a></Container>
                </Grid.Column>
              <Grid.Column>
                <Container className="bottom_card">
                  <Header as="h3">Documentation</Header>
                  <p>Persephone documentation is hosted on Read the Docs.</p>
                </Container>
                <Container textAlign="right" className="bottom_link"><a href="https://persephone.readthedocs.io/" className="bottom_link_a">Read the Docs <Icon name="arrow circle right" /></a></Container>
                </Grid.Column>
              <Grid.Column>
                <Container className="bottom_card">
                  <Header as="h3">Support</Header>
                  <p>Custom Programming Solutions provides commercial support to users of the Persephone library.</p>
                </Container>
                <Container textAlign="right" className="bottom_link"><a href="https://www.customprogrammingsolutions.com/" className="bottom_link_a">Get support <Icon name="arrow circle right" /></a></Container>
                </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <Segment vertical={true} className="footer">
          <Grid stackable={true}>
            <Grid.Column floated="left" width="8" textAlign="left">
              &copy; 2018 The Persephone Authors
            </Grid.Column>
            <Grid.Column floated="right" width="8" textAlign="right">
              The Persephone Suite is proudly supported by <a href="https://www.customprogrammingsolutions.com/">Custom Programming Solutions Pty Ltd</a>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
