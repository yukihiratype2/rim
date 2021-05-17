import { TreeItem as MatTreeItem, TreeView as MatTreeView, TreeItemProps as MatTreeItemProps } from '@material-ui/lab';

export type TreeProps = {
  data: TreeItemProps[]
};

export type TreeItemProps = {
  children?: TreeItemProps[]
} & MatTreeItemProps;

const TreeItem = ({ children, ...rest }: TreeItemProps) => (
  <MatTreeItem {...rest}>
    {children && children.map((node) => (<TreeItem key={node.nodeId} {...node} />))}
  </MatTreeItem>
);

const Tree = ({ data }: TreeProps) => (
  <MatTreeView>
    {data.map((node) => <TreeItem key={node.nodeId} {...node} />)}
  </MatTreeView>
);
export default Tree;
