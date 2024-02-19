class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        invalid = set()
        stack = []
        i = 0
        for c in s:
            if c == ')' or c == '(': i += 1
            if not stack and c == ')':
                invalid.add(i)
            elif stack and c == ')':
                stack.pop()
            elif c == '(':
                stack.append(i)
        while stack:
            invalid.add(stack.pop())
        
        res = []
        count = 0
        for c in s:
            if c == ')' or c == '(': 
                count += 1
                if count in invalid:
                    continue
            res.append(c)

        return "".join(res)

