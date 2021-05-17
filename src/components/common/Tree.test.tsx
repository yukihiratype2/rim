import { render, screen } from '@testing-library/react';
import Tree, { TreeProps } from './Tree';

const tree: TreeProps = {
  data: [{
    nodeId: '1',
    label: 'Node 1',
    children: [{
      nodeId: '2',
      label: 'Node 2',
    }],
  }],
};

describe('Tree Component', () => {
  it('render tree', () => {
    render(<Tree data={tree.data} />);
    const node1 = screen.queryByText('Node 1');
    let node2 = screen.queryByText('Node 2');
    expect(node1).toBeInTheDocument();
    expect(node2).toBeNull();
    node1?.click();
    node2 = screen.queryByText('Node 2');
    expect(node2).toBeInTheDocument();
  });
});
