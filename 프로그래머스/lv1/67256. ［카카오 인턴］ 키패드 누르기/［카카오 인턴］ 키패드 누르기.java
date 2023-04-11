class Solution {
	public String solution(int[] numbers, String hand) {
		String answer = "";
		StringBuilder builder = new StringBuilder();
		for (int number : numbers) {
			builder.append(checkLeftOrRight(number, hand));
		}
		answer = builder.toString();
		return answer;
	}
	
	private int leftHand = 10;
	private int rightHand = 12;
	
	private String checkLeftOrRight(int number, String hand) {
		if (number == 0) number = 11;
		if (number == 1 || number == 4 || number == 7) {
			leftHand = number;
			return "L";
		}
		if (number == 3 || number == 6 || number == 9) {
			rightHand = number;
			return "R";
		}
		return checkHandLocation(number, hand);
	}
	
	private String checkHandLocation(int number, String hand) {
		int leftHandInterval = Math.abs(number - leftHand) / 3 + Math.abs(number - leftHand) % 3;
		int rightHandInterval = Math.abs(number - rightHand) / 3 + Math.abs(number - rightHand) % 3;
		if (leftHandInterval > rightHandInterval) {
			rightHand = number;
			return "R";
		}
		if (rightHandInterval > leftHandInterval) {
			leftHand = number;
			return "L";
		}
		if (hand.equals("right")) {
			rightHand = number;
			return "R";
		}
		leftHand = number;
		return "L";
	}
}