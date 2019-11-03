# Test return
def test_fun():
    print("start")
    count = 0
    if count == 0:
        count = 1
        return 'return'
    print("will i be called")

    test_fun()

print(test_fun())