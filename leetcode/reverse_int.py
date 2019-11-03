class Solution:
    def reverse(number: int) -> int:
        result = 0
        while number != 0:
            pop = number % 10
            number = number // 10
            result = result * 10 + pop
        return result

        
print(Solution.reverse(-93))

