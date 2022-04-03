const fs=require('fs');

const newNote = function(title,body){
    const notes =uplodeNodes();
    notes.push({title,body});
    fs.writeFileSync('notepad.json',JSON.stringify(notes));
}

const deleteNote =function(title){
    const notes = uplodeNodes();
    const remaining = notes.filter(note=>note.title != title);
    fs.writeFileSync('notepad.json',JSON.stringify(remaining));
}
const allList =function(){
  const data=  uplodeNodes();
  let count=1;
  data.map(note=>{
      console.log(count,')','Title->>',note.title,'Body->>',note.body);
     count++;
  })
}

const findNotes =function(title){
    const data = uplodeNodes();
  const note = data.find(note=>note.title===title);
if(note){
    console.log('Title->>',note.title,'Body->>',note.body);
}else{
    console.log("Not Found");
}
}

const uplodeNodes=function(){
    try{
const dataBuffer = fs.readFileSync('notepad.json')
const dataJson = dataBuffer.toString();
return JSON.parse(dataJson);
    }catch(error){
return [];
    }
}
module.exports = {newNote,deleteNote,allList,findNotes};