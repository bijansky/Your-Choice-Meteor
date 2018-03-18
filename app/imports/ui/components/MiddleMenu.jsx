import React from 'react';
import { Menu, Icon, Dropdown, Grid, Image } from 'semantic-ui-react';

const src1 = 'https://cdn.shopify.com/s/files/1/1961/2255/files/LOGO_SAFE_100x.png?v=1494306682';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">

          <Image src={src1} size='tiny'/>

          <Grid centered container>

            <Menu.Item>Home</Menu.Item>

            <Menu.Item>Tour</Menu.Item>

            <Menu.Item>Shop</Menu.Item>

            <Dropdown item text='Music'>
              <Dropdown.Menu>
                <Dropdown.Item>Streaming</Dropdown.Item>
                <Dropdown.Item>Video</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>Contact Us</Menu.Item>
          </Grid>

          <Menu.Item fitted float='right'><Icon name="search"/></Menu.Item>

          <Menu.Item fitted float='right'><Icon name="user outline"/></Menu.Item>

          <Menu.Item fitted float='right'><Icon name="shopping bag"/></Menu.Item>

        </Menu>
    );
  }
}
