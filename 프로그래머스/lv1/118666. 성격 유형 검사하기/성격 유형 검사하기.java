import java.util.HashMap;
import java.util.Map;

class Solution {
	public String solution(String[] survey, int[] choices) {
		String answer = "";
		
		setIndicator();
		for (int i = 0; i < survey.length; i++) {
			setScore(survey[i], choices[i]);
		}
		answer = makeAnswer();
		return answer;
	}
	
	private Map<Character, Integer> indicatorMap = new HashMap<>();
	
	private void setIndicator() {
		indicatorMap.put('R', 0); indicatorMap.put('T', 0);
		indicatorMap.put('C', 0); indicatorMap.put('F', 0);
		indicatorMap.put('J', 0); indicatorMap.put('M', 0);
		indicatorMap.put('A', 0); indicatorMap.put('N', 0);
	}
	
	private void setScore(String type, int choice) {
		char typeA = type.charAt(0), typeB = type.charAt(1);
		int score = Math.abs(choice - 4);
		
		if (choice < 4) {
			indicatorMap.put(typeA, indicatorMap.get(typeA) + score);
		}
		if (4 < choice) {
			indicatorMap.put(typeB, indicatorMap.get(typeB) + score);
		}
	}

	private String makeAnswer() {
		StringBuilder result = new StringBuilder();
		String indicator = "RTCFJMAN";
		for (int i = 0; i < indicator.length(); i += 2) {
			result.append(comparisonScore(indicator.charAt(i), indicator.charAt(i + 1)));
		}
		return result.toString();
	}
	
	private Character comparisonScore(char indicatorA, char indicatorB) {
		char result = 0;
		if (indicatorMap.get(indicatorA) < indicatorMap.get(indicatorB)) {
			result = indicatorB;
		}
		if (indicatorMap.get(indicatorB) < indicatorMap.get(indicatorA)) {
			result = indicatorA;
		}
		if (indicatorMap.get(indicatorA) == indicatorMap.get(indicatorB)) {
			result = comparisonCharacter(indicatorA, indicatorB);
		}
		return result;
	}
	
	private Character comparisonCharacter(char indicatorA, char indicatorB) {
		char result = 0;
		if (indicatorA < indicatorB) {
			result = indicatorA;
		}
		if (indicatorB < indicatorA) {
			result = indicatorB;
		}
		return result;
	}
}