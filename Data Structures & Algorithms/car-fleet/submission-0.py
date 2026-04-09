class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pairs = sorted(zip(position, speed), reverse=True)
        
        stack = [(target - pairs[0][0]) / pairs[0][1]]
        
        for i in range(1, len(pairs)):
            time = (target - pairs[i][0]) / pairs[i][1]
            if (time > stack[-1]):
                stack.append(time)
                
        
        return len(stack)
            

