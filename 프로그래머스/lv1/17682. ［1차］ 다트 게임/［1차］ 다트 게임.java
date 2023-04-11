class Solution {
	public int solution(String dartResult) {
		int answer = 0;
		for (int i = 0; i < dartResult.length(); i++) {
			scoreClassification(dartResult.charAt(i));
		}
		for (int score : scores) {
			answer += score;
		}
		return answer;
	}
	
	private int[] scores = new int[3];
	private int index = 0;
	
	private void scoreClassification(char element) {
		if ('0' <= element && element <= '9') {
			checkNumber(element);
		}
		if (element == 'S' || element == 'D' || element == 'T') {
			checkArea(element);
			index++;
		}
		if (element == '*' || element == '#') {
			checkAward(element);
		}
	}
	
	private void checkNumber(char element) {
		if (element == '0') {
			if (scores[index] != 0) {
				scores[index] *= 10;
			}
		}
		if ('1' <= element && element <= '9') {
			scores[index] = element - 48;
		}
	}
	
	private void checkArea(char element) {
		if (element == 'D') {
			scores[index] = (int) Math.pow(scores[index], 2);
		}
		if (element == 'T') {
			scores[index] = (int) Math.pow(scores[index], 3);
		}
	}
	
	private void checkAward(char element) {
		if (element == '*') {
			scores[index - 1] *= 2;
			if (0 < index - 1) {
				scores[index - 2] *= 2;
			}
		}
		if (element == '#') {
			scores[index - 1] *= -1;
		}
	}
}