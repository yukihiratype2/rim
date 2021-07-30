import { List, ListItem } from '@material-ui/core';
import { AssetCategory } from '../../../../shared/types/asset';

const categories = [{
  category: AssetCategory.Inbox,
  label: 'Inbox',
  icon: 'icon',
}, {
  category: AssetCategory.Trash,
  label: 'Trash',
  icon: 'icon',
}];

const Category = () => (
  <List>
    {categories.map((category) => (
      <ListItem key={category.label}>{category.label}</ListItem>
    ))}
  </List>
);

export default Category;
