import java.util.HashMap;

class Solution {
	public int[] solution(int[] lottos, int[] win_nums) {
		int[] answer = {};
		for (int number : win_nums) {
			lottoNumbers[number]++;
		}
		
		for (int lotto : lottos) {
			if (lotto == 0) {
				countDeleteNumber++;
			}
			checkNumber(lotto);
		}
		answer = checkRank();
		return answer;
	}
	
	private int[] lottoNumbers = new int[46];
	private int[] rank = {6, 6, 5, 4, 3, 2, 1};
	private int countDeleteNumber = 0;
	private int countLotto = 0;
	
	private void checkNumber(int lotto) {
		if (lottoNumbers[lotto] == 1) {
			countLotto++;
		}
	}
	
	private int[] checkRank() {
		int[] result = new int[2];
		int countMaximumLotto = countLotto + countDeleteNumber;
		result[0] = rank[countMaximumLotto];
		result[1] = rank[countLotto];
		return result;
	}
}