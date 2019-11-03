class Node(object):
    def __init__(self, elem):
        self.elem = elem
        self.next = None

class SingleLinkedList(object):
    """单链表"""
    def __init__(self,node=None):
        self._head = node 

    def is_empty(self):
        return self._head == None

    def length(self):
        # cursor to travel all the nodes
        cur = self._head
        # count to record
        count = 0
        
        while cur != None:
            count += 1
            cur = cur.next
        return count

    def travel(self):
        cur = self._head
        
        while cur != None:
            print(cur.elem)
            cur = cur.next

    def add(self, item):
        """链表头部添加元素"""
        temp = self._head
        self._head = item
        self._head.next = temp

    def append(self, item):
        """链表尾部添加元素"""
        if self.is_empty():
            self._head = item
        else:
            cur = self._head
        
            while cur.next != None:
                cur = cur.next
            cur.next = item

    def insert(self, pos, item):
        """insert into a specific position"""
        pass 

    def remove(self, item):
        """remove a item from the list"""
        pass

    def search(self, item):
        """search an item"""
        pass


def main():
    single_list = SingleLinkedList()

    item1 = Node(10)
    item2 = Node(20)
    item3 = Node(30)
    # single_list.add(item1) # Add item1 to the top
    # single_list.add(item2) # Add item2 to the top
    # single_list.add(item3) # Add item3 to the top
    single_list.append(item1)
    single_list.append(item2)
    single_list.append(item3)

    single_list.travel()

    print("Length of the list is %d" % (single_list.length()))

if __name__ == "__main__":
    main()