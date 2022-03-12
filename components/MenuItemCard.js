import { Card, Tag } from 'antd';
import { formatCurrency } from '../utils/lib';
function MenuItemCard({ menuItem }) {
  return (
    <Card title={menuItem.name} bordered={true} style={{ width: 250 }}>
      <p>
        <Tag color="green">{menuItem.category}</Tag>
      </p>
      <p>{menuItem.description}</p>
      <p>{formatCurrency(menuItem.price)}</p>
      <p>{menuItem.calories} calories</p>
      <p>{menuItem.customer_rating} Stars</p>
    </Card>
  );
}

export default MenuItemCard;
