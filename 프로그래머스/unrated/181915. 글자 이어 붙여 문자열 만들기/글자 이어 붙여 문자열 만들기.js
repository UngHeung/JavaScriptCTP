const solution=(my_string,index_list)=>index_list.reduce((a,b)=>a+my_string[b],'')
// const solution=(my_string,index_list)=>index_list.map(e=>my_string[e]).join('')