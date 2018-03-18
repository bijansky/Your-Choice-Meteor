import React from 'react';
import { Grid, List, Button, Container, Icon, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered padded className="footer-background">
          <Grid.Row>
            <Grid.Column width={1}>
              Home
            </Grid.Column>

            <Grid.Column width={1}>
              Tour
            </Grid.Column>

            <Grid.Column width={1}>
              Shop
            </Grid.Column>

            <Grid.Column width={1}>
              Music
            </Grid.Column>

            <Grid.Column width={4}>
              <List relaxed={1}>
                <List.Item>Search</List.Item>
                <List.Item>Contact Us</List.Item>
                <List.Item>Privacy Policy</List.Item>
                <List.Item>Terms of Service</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <List>
                <List.Item>Join our mailing list</List.Item>
                <List.Item>
                  <Input placeholder="Email Address"/>
                  <Button>SUBSCRIBE</Button>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Container textAlign='left'>
            <Grid.Row>
              <Icon name="facebook"/>
              <Icon name="twitter"/>
              <Icon name="instagram"/>
              <Icon name="snapchat ghost"/>
            </Grid.Row>
          </Container>

        </Grid>

    );
  }
}
