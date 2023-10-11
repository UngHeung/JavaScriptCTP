const solution = (players, callings) => {
    const rank = {};
    
    players.forEach((player, i) => rank[player] = i)
    
    for(calling of callings) {
        const callingRank = rank[calling]; // 불린 사람의 랭크
        const target = players[callingRank - 1]; // 추월당한 사람
        
        rank[target]++ // 추월당한 사람의 랭크 + 1
        rank[calling]-- // 불린 사람의 랭크 - 1
        
        players[callingRank] = target; // 불린 사람의 자리에 추월당한 사람 이동
        players[callingRank - 1] = calling; // 추월당한 사람 자리에 불려진 사람 이동
    }
    
    return players
}