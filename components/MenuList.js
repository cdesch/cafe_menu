import MenuItem from './MenuItem';
function MenuList({ menuItems }) {
  return (
    <ul>
      {menuItems.map((item) => (
        <MenuItem key={item.name} menuItem={item} />
      ))}
    </ul>
  );
}

export default MenuList;
