def binsearch(list, target):
    if len(list) == 0:
        return False
    index = (0 + len(list)) // 2
    
    if target == list[index]:
        return True
    elif target > list[index]:
        return binsearch(list[(index+1):],target)
    elif target < list[index]:
        return binsearch(list[:index-1], target)

    return False

def main():
    li = [1,3,5,7,9,132,32342,564634]
    # print(binsearch(li,5))
    print(binsearch(li,5))
    print(binsearch(li,9))
    print(binsearch(li,43213214))

if __name__ == "__main__":
    main()