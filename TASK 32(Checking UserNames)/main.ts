let current_users=["Yusra","Laiba","Fizza","Nimra","Areej"]
let new_users=["Arshiha","NIMRA","Fatima","AREEJ","Anum"]
new_users.forEach((newName)=>{
	let Lower_Names=newName.toLowerCase()


	if (current_users.map((current_names)=>current_names.toLowerCase()).includes(Lower_Names)){
		console.log(`${newName} is not available`)
	}
	else{
		console.log(`${newName} is available`);
	}
})
