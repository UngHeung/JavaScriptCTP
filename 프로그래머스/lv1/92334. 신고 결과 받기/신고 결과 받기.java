import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
	private Map<String, Set<String>> reportIdMap = new HashMap<>();
	private Map<String, Set<String>> reportedIdMap = new HashMap<>();

	public int[] solution(String[] id_list, String[] report, int k) {
		int[] answer = new int[id_list.length];
		setMap(id_list);
		addReportMap(report);
		for (int i = 0; i < id_list.length; i++) {
			answer[i] = mailCount(id_list[i], k);
		}
		return answer;
	}

	private void setMap(String[] id_list) {
		Set<String> reportIdSet, reportedIdSet;
		for (String id : id_list) {
			reportIdSet = new HashSet<>();
			reportedIdSet = new HashSet<>();
			reportIdMap.put(id, reportIdSet);
			reportedIdMap.put(id, reportedIdSet);
		}
	}
	
	private void addReportMap(String[] report) {
		String[] array;
		for (String element : report) {
			array = element.split(" ");
			reportIdMap.get(array[0]).add(array[1]);
			reportedIdMap.get(array[1]).add(array[0]);
		}
	}
	
	private int mailCount(String id, int k) {
		int result = 0;
		for (String element : reportIdMap.get(id)) {
			result += reportCount(element, k);
		}
		return result;
	}
	
	private int reportCount(String id, int k) {
		int result = 0;
		if (reportedIdMap.get(id).size() >= k) {
			result++;
		}
		return result;
	}
}