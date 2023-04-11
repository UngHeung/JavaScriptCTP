import java.util.Stack;

class Solution {
	public int solution(int[][] board, int[] moves) {
		int answer = 0;
		floors = new int[board[0].length];
		for (int i = 0; i < moves.length; i++) {
			int move = moves[i] - 1;
			answer += popCount(move, board);
		}
		return answer;
	}
	
	private Stack<Integer> bucket = new Stack<>();
	private int[] floors;
	
	private int popCount(int move, int[][] board) {
		int result = 0;
		for (int j = 0; j < board[0].length; j++) {
			if (floors[move] < board[0].length) {
				int doll = board[floors[move]][move];
				
				floors[move]++;
				if (doll == 0) {
					continue;
				}
				
				if (bucket.isEmpty()) {
					bucket.push(doll);
					break;
				}
				
				if (bucket.peek() == doll) {
					bucket.pop();
					result += 2;
					break;
				}
				
				bucket.push(doll);
				break;
			}
		}
		return result;
	}
}