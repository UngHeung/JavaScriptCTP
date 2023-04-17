function solution(s) {
  let answer='';
  let check = false;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      answer += s[i].toUpperCase()
      continue;
    }
    
    if (s[i] === ' ') {
      check = true;
    } else {
       if (check) {
        answer+=s[i].toUpperCase();
        check = false;
        continue;
      } 
    }
    
   
    
    answer+=s[i].toLowerCase();
  }
  return answer;
}