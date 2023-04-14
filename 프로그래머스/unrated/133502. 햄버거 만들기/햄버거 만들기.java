import java.util.Stack;

class Solution {
	public int solution(int[] ingredient) {
		int answer = 0;
		
		for (int element : ingredient) {
			stackHamberger(element);
		}
		answer = count;
		return answer;
	}
	
	private int count = 0;
	private Stack<Integer> hamberger = new Stack<>();
	
	private void stackHamberger(int element) {
		hamberger.push(element);
		
		if (hamberger.size() < 4) return;
		if (hamberger.size() >= 4) {
			checkGredient();
		}
	}
	
	private void checkGredient() {
		if(hamberger.get(hamberger.size() - 1) == 1
				&& hamberger.get(hamberger.size() - 2) == 3
				&& hamberger.get(hamberger.size() - 3) == 2
				&& hamberger.get(hamberger.size() - 4) == 1) {
			packaging();
		}
	}
	
	private void packaging() {
		for (int i = 0; i < 4; i++) {
			hamberger.pop();
		}
		count++;
	}
}