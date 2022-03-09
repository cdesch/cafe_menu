import MenuItemCard from './MenuItemCard';
import { Row, Col, Divider } from 'antd';

function MenuListGrid({ menuItems }) {
  return (
    <>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {menuItems.map((item) => (
          <Col className="gutter-row" span={6} key={item.name}>
            <MenuItemCard menuItem={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MenuListGrid;
