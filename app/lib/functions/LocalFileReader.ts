
export default function LocalFileReader(
    file:string, 
    callback:(data:string)=>any
) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}