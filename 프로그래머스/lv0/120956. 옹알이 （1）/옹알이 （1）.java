class Solution {
	public int solution(String[] babbling) {
		int answer = 0;
		for (String word : babbling) {
			if (checkWord(word)) {
				answer += 1;
			}
		}
		return answer;
	}
	
	private boolean checkWord(String word) {
		String[] possibleWordList = {"aya", "woo", "ye", "ma"};
		int wordLength = word.length();
		int lengthCount = 0;
		for (String possibleWord : possibleWordList) {
			if (word.contains(possibleWord)) {
				lengthCount += possibleWord.length();
			}
		}
		return checkCount(wordLength, lengthCount);
	}
	
	private boolean checkCount(int wordLength, int lengthCount) {
		if (wordLength == lengthCount) {
			return true;
		}
		return false;
	}
}