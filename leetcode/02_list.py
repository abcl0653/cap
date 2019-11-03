from timeit import Timer

# 4 ways to create a list

# append
def test1():
    li = []
    for i in range(10000):
        li.append(i)

# + operation
def test2():
    li = []
    for i in range(10000):
        li += [i]

# Generator
def test3():
    li = [i for i in range(10000)]

# Iterator 
def test4():
    li = list(range(10000)) 

# extend
def test5():
    li = []
    for i in range(10000):
        li.extend([i])


timer1 = Timer('test1()', 'from __main__ import test1')
print("append" , timer1.timeit(100))

timer2 = Timer('test2()', 'from __main__ import test2')
print("+:" , timer2.timeit(100))

timer3 = Timer('test3()', 'from __main__ import test3')
print("Generator:" , timer3.timeit(100))

timer4 = Timer('test4()', 'from __main__ import test4')
print("Iterator" , timer4.timeit(100))

timer5 = Timer('test5()', 'from __main__ import test5')
print("extend" , timer5.timeit(100))