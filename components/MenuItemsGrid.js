import MenuItemCard from './MenuItemCard';
// import { Row, Col, Divider } from 'antd';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

function MenuListGrid({ menuItems }) {
  return (
    <>
      {/* <Divider orientation="left">Responsive</Divider> */}
      <Grid fluid>
        <Row>
          {menuItems.map((item) => (
            <Col key={item.name} xs={6} md={3}>
              <MenuItemCard menuItem={item} />
            </Col>
          ))}
        </Row>
      </Grid>
      {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {menuItems.map((item) => (
          <Col className="gutter-row" span={8} key={item.name}>
            <MenuItemCard menuItem={item} />
          </Col>
        ))}
      </Row> */}
    </>
  );
}

export default MenuListGrid;
