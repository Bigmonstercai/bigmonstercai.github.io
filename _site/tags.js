// JavaScript Document
function choose(obj) {
	var tags = document.getElementById("tags");
	var tagNodes = tags.childNodes;
	var conts = document.getElementById("conts");
	var contNodes = conts.childNodes;
	clearNull(tagNodes);
	clearNull(contNodes);			
	var itemNum = getItemsNum(obj, tagNodes, contNodes);
	changeTags(obj, tagNodes, itemNum);
	changeContents(obj, tagNodes, contNodes, itemNum);
}

function getItemsNum(obj, tagNodes, contNodes) {
	for(var i = 0; i < tagNodes.length; i++) {
		if(tagNodes[i].id == obj.id) {
			clearNull(contNodes[i].childNodes);
			clearNull(contNodes[i].firstChild.childNodes);
			clearNull(contNodes[i].firstChild.firstChild.childNodes);
			return contNodes[i].firstChild.firstChild.childNodes.length;
		}
	}
}

function changeContents(obj, tagNodes, contNodes, itemNum) {
	for(var i = 0; i < tagNodes.length; i++) {
		if(tagNodes[i].id != obj.id) {
			contNodes[i].className = "content hide";
		}
		else {
			contNodes[i].className = "content";
			contNodes[i].style.height = (100 + 42 * (itemNum - 1)) + "px";
		}
	}
}

function changeTags(obj, tagNodes, itemNum) {
	for(var i = 0; i < tagNodes.length; i++) {
		if(tagNodes[i].id == obj.id) {
			tagNodes[i].className = "tag tagClick";
			tagNodes[i].style.top = 0;
		}
		else {
			tagNodes[i].className = "tag tagNotClick";
			tagNodes[i].style.top = 100 + (100 + 42 * (itemNum - 1)) + "px";
		}
	}
}

function clearNull(nodes) {
	for(var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeType==3 && !/\S/.test(nodes[i].nodeValue)) {
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
}

function goBack() {
	var tags = document.getElementById("tags");
	var tagNodes = tags.childNodes;
	var conts = document.getElementById("conts");
	var contNodes = conts.childNodes;
	for(var i = 0; i < tagNodes.length; i++) {
		tagNodes[i].className = "tag";
	}
	for(var i = 0; i < contNodes.length; i++) {
		contNodes[i].className = "content hide";
	}
}