import java.util.ArrayList;
import java.util.List;

class Solution {
	private List<Character> recommendId = new ArrayList<>();
	
	public String solution(String new_id) {
		String answer = "";
		new_id = new_id.toLowerCase();
		for (int i = 0; i < new_id.length(); i++) {
			if (checkUnfitCharacter(new_id.charAt(i), i)) {
				recommendId.add(new_id.charAt(i));
			}
		}
		checkPeriodLocation();
		checkIdLength();
		answer = makeRecommendId();
		return answer;
	}
	
	private boolean checkUnfitCharacter(char element, int index) {
		if (element == '.') {
			return checkContinuationPeriod(index);
		}
		if (element == '-' || element == '_') {
			return true;
		}
		if ('0' <= element && element <= '9') {
			return true;
		}
		if ('a' <= element && element <= 'z') {
			return true;
		}
		return false;
	}
	
	private boolean checkContinuationPeriod(int index) {
		if (recommendId.size() < 1) {
			return true;
		}
		if (recommendId.get(recommendId.size() - 1) == '.') {
			return false;
		}
		return true;
	}
	
	private void checkPeriodLocation() {
		if (recommendId.get(0) == '.') {
			recommendId.remove(0);
		}
		if (1 <= recommendId.size()) {
			if (recommendId.get(recommendId.size() - 1) == '.') {
				recommendId.remove(recommendId.size() - 1);
			}
		}
	}
	
	private void checkIdLength() {
		if (recommendId.size() == 0) {
			recommendId.add('a');
		}
		while (recommendId.size() < 3) {
			recommendId.add(recommendId.get(recommendId.size() - 1));
		}
		if (15 < recommendId.size()) {
			recommendId = recommendId.subList(0, 15);
		}
		checkPeriodLocation();
	}
	
	private String makeRecommendId() {
		StringBuilder result = new StringBuilder();
		for (char element : recommendId) {
			result.append(element);
		}
		return result.toString();
	}
}