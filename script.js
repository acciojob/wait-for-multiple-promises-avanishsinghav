//your JS code here. If required.
function createPromise(index){
	const delay = Math.random()*2+1;
	return new Promise(resolve =>{
		setTimeout(()=>{
			resolve({index, time:delay.toFixed(3)})
		},delay*1000)
	})
}
const promises = [createPromise(1), createPromise(2), createPromise(3)];
Promise.all(promises).then(results=>{
	const output = document.getElementById("output");
	output.innerHTML = "";
	results.forEach(result=>{
		const row = document.createElement("tr");
		row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`;
		output.appendChild(row);
	});
	const totalTime = Math.max(...results.map(r => parseFloat(r.time))).toFixed(3);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
})