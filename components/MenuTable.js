import { Table } from 'antd';
import { formatCurrency } from '../utils/lib';
import MenuItem from './MenuItem';

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    sorter: (a, b) => a.category.localeCompare(b.category),
    // sortDirections: ['descend'],
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    // sortDirections: ['descend'],
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price < b.price,
    render: (price) => formatCurrency(price),
  },

  {
    title: 'Calories',
    dataIndex: 'calories',
    key: 'calories',
  },
  {
    title: 'Customer Rating',
    dataIndex: 'customer_rating',
    key: 'customer_rating',
  },
];

function MenuTable({ menuItems }) {
  return <Table dataSource={menuItems} columns={columns} />;
}

export default MenuTable;
