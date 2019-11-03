class Stack(object):
    def __init__(self):
        self.li = []

    def push(self, item):
        self.li.append(item)
    
    def pop(self):
        self.li.pop()

    def is_empty(self):
        return self.li == []
        
    def peak(self):
        if self.li != []:
            return self.li[len(self.li) - 1]

    def clear(self):
        self.li.clear()

def test(input=""):
    
    stack = Stack()
    orphan = []
    for i in input:
        if i == "{" or i == "[" or i == "(":
            stack.push(i)
        elif i == "}":
            if stack.peak() == "{":
                stack.pop()
            else:
                orphan.append(i)

        elif i == "]":
            if stack.peak() == "[":
                stack.pop()
            else:
                orphan.append(i)
                
        elif i == ")":
            if stack.peak() == "(":
                stack.pop()
            else:
                orphan.append(i)

    print(stack.is_empty() and orphan == [])

def main():
    test_bra = "{[][({})]{[]([{}])}}"
    test_bra_true_1 = "23+{331-33}"
    test_bra_true_2 = "31-{323-(3232+3232)+{321/32}}"
    test_bra_false_1 = "{9123949-32[32-(32])]}"

    test(test_bra)
    test(test_bra_true_1)
    test(test_bra_true_2)
    test(test_bra_false_1)

if __name__ == "__main__":
    main()