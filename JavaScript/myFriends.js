let friend = (friends) => {
  let myfriends = [];
  for(i=0; i<friends.length; i++){
  	if(friends[i].length == 4){
  		myfriends.push(friends[i])
  	}
  }
  return myfriends
}
