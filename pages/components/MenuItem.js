function MenuItem({ menuItem }) {
  return (
    <li key={menuItem.name}>
      {menuItem.name} - {menuItem.category} - {menuItem.description} -
      {menuItem.price} - {menuItem.calories}
    </li>
  );
}

export default MenuItem;
