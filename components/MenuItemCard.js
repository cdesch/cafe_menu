import { Card, Tag } from 'antd';

function MenuItemCard({ menuItem }) {
  return (
    <Card title={menuItem.name} bordered={true} style={{ width: 300 }}>
      <p>
        <Tag color="green">{menuItem.category}</Tag>
      </p>
      <p>{menuItem.description}</p>
      <p>${menuItem.price}</p>
      <p>{menuItem.calories} calories</p>
      <p>{menuItem.customer_rating} Stars</p>
    </Card>
  );
}

export default MenuItemCard;
