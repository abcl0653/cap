# Tree
class Node(object):
    """Node of Tree"""
    def __init__(self, item):
        self.elem = item
        self.lchild = None
        self.rchild = None
        
class Tree(object):
    def __init__(self):
        self.root = None

    def add(self, item):
        node = Node(item)
        if self.root == None:
            self.root = node 
        else:
            queue = [self.root]
            while queue:
                cur = queue.pop(0)
                if cur.lchild == None:
                    cur.lchild = node
                    return
                else:
                    queue.append(cur.lchild)
                if  cur.rchild == None:
                    cur.rchild = node
                    return
                else:
                    queue.append(cur.rchild)

    def breath_travel(self):
        if self.root == None:
            print("Empty Tree")
            return
        queue = [self.root]
        while queue:
            cur = queue.pop(0)
            print(cur.elem, end=" ")
            if cur.lchild != None:
                queue.append(cur.lchild)
            if cur.rchild != None:
                queue.append(cur.rchild)

    def preorder(self,node):
        if node is None:
            return
        print(node.elem, end=" ")
        self.preorder(node.lchild)
        self.preorder(node.rchild)

    def inorder(self,node):
        if node is None:
            return
        self.inorder(node.lchild)
        print(node.elem, end=" ")
        self.inorder(node.rchild)

    def postorder(self,node):
        if node is None:
            return
        self.postorder(node.lchild)
        self.postorder(node.rchild)
        print(node.elem, end=" ")



def main():
    tree = Tree()
    tree.add(1)
    tree.add(2)
    tree.add(3)
    tree.add(4)
    tree.add(5)
    tree.add(6)
    tree.add(7)
    tree.add(8)

    tree.breath_travel()
    print("\n")
    tree.preorder(tree.root)
    print("\n")
    tree.inorder(tree.root)
    print("\n")
    tree.postorder(tree.root)
if __name__ == "__main__":
    main()