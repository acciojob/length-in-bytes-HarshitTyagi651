const byteSize = (str) => {
  // write your code here
	let size = 0;
	for(let i=0; i<str.length; i++){
		const code = str.charCodeAt(i);
		if (code<=0x007F) {
			size++
		}
		else if (code<=0x07FF) {
			size+=2
		}
		else if (code<=0xFFFF) {
			size=+3
		}
		else{
			size+=4
		}
	}
	return size
};

// // Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
 