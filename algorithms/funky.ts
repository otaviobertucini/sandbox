// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  isPath: boolean;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.isPath = true;
  }
}

export function binaryTreeDiameter(tree: BinaryTree | null): number {
  if (tree == null) {
    return 0;
  }

  let left = binaryTreeDiameter(tree.left);
  let right = binaryTreeDiameter(tree.right);

  tree.isPath = true;
  if (!left && !right) {
    return 1;
  }

  if (left && !right) {
    if (!tree.left?.isPath) {
      tree.isPath = false;
    }
    return left + 1;
  }

  if (!left && right) {
    if (!tree.right?.isPath) {
      tree.isPath = false;
    }
    return right + 1;
  }

  tree.isPath = false;
  if (tree.left?.isPath && tree.right?.isPath) {
    return left + right;
  }

  console.log(tree.value, left, right)
  return left > right ? left : right;
}
