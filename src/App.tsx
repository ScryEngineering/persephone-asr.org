import * as React from 'react';
import './App.css';

import { Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

import './semantic/dist/semantic.min.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Segment vertical={true} className="background phone" inverted={true}>
          <Container>
            <Header as="h1" inverted={true}>
              Persephone
              <Header.Subheader>Simple, reproducible, fast.</Header.Subheader>
            </Header>
          </Container>
          <Container className="section first">
            <Grid>
              <Grid.Column width={12}>
                <Header as="h1" inverted={true}>
                  Transcribe your audio into phonemes with an intuitive graphical tool that leverages the power of machine learning.
                </Header>
              </Grid.Column>
              <Grid.Column width={10}>
                <p>Persephone is a powerful open source toolkit for streamlining audio transcription processes.</p>
                <p>Persephone is used by linguists in leading research institutions around the world, including North America, Europe, and the Asia-Pacific region. The tool saves these teams hundreds of hours of work every year by automating the laborous process of transcribing audio recordings.</p>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <Segment vertical={true} textAlign="center" className="section">
          <Header as="h2" className="section_header">Trusted by leading research institutions around the world</Header>
          <Image.Group size="small">
            <Image fluid={true} src="/img/unimelb_logo.jpg" />
            <Image fluid={true} src="/img/anu_logo.jpg" />
            <Image fluid={true} src="/img/cmu_logo.jpg" />
            <Image fluid={true} src="/img/cnrs_logo.jpg" />
            <Image fluid={true} src="/img/uq_logo.jpg" />
          </Image.Group>
        </Segment>
        <Segment textAlign="center" vertical={true} className="section background vinyl" inverted={true}>
          <Header as="h2" className="section_header">An intuitive, streamlined process</Header>
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
        </Segment>
        <Segment vertical={true} textAlign="center" className="section">
          <Header as="h2" className="section_header">Get started in five minutes</Header>
          <Container text={true}>
            <p>Lorem ipsum.</p>
          </Container>
        </Segment>
        <Segment textAlign="center" vertical={true} className="section background wood">
          <Header as="h2" className="section_header" inverted={true}>Documentation, community, and commercial support</Header>
          <Grid centered={true} columns="equal" relaxed="very" stackable={true} padded="horizontally">
            <Grid.Column>
              <Container className="bottom_card">
                <Header as="h3">Community</Header>
                <p>Join the Persephone users’ community on our official mailing lists, for community support and announcements!</p>
              </Container>
              <Container textAlign="right" className="bottom_link">To mailing lists <Icon name="arrow circle right" /></Container>
            </Grid.Column>
            <Grid.Column>
              <Container className="bottom_card">
                <Header as="h3">Code</Header>
                <p>Persephone is Open Source. All code for the Persephone suite is hosted on GitHub.</p>
              </Container>
              <Container textAlign="right" className="bottom_link">To GitHub <Icon name="arrow circle right" /></Container>
              </Grid.Column>
            <Grid.Column>
              <Container className="bottom_card">
                <Header as="h3">Documentation</Header>
                <p>Persephone documentation is hosted on Read the Docs.</p>
              </Container>
              <Container textAlign="right" className="bottom_link">Read the Docs <Icon name="arrow circle right" /></Container>
              </Grid.Column>
            <Grid.Column>
              <Container className="bottom_card">
                <Header as="h3">Support</Header>
                <p>Custom Programming Solutions provides commercial support to users of the Persephone library.</p>
              </Container>
              <Container textAlign="right" className="bottom_link">Get support <Icon name="arrow circle right" /></Container>
              </Grid.Column>
          </Grid>
        </Segment>
        <Segment vertical={true} className="footer">
          <Grid stackable={true}>
            <Grid.Column floated="left" width="8" textAlign="left">
              &copy; 2018 The Persephone Authors
            </Grid.Column>
            <Grid.Column floated="right" width="8" textAlign="right">
              The Persephone Suite is proudly supported by Custom Programming Solutions Pty Ltd
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
