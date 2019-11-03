import time
start_time = time.time()
for a in range(1,1000):
    for b in range(1,1000 - a ):
        c = 1000 - a - b
        if c > 0 and a ** 2 + b ** 2 == c ** 2:
            print('a = %d; b = %d; c = %d' %(a,b,c) )
end_time = time.time()
print('Time: %f' % (end_time - start_time))