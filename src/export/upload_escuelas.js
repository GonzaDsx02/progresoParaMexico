const admin = require('firebase-admin');
const serviceAccount=require("./key_service_account.json");
const data = require("./MediaSuperiorNayarit.json");
const collectionKey = "EscuelasMediaSuperior";
//const data = require("./EscuelasSuperiorNayarit.json");
//const collectionKey = "EscuelasSuperior";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings={timestampsInSnapshots: true};
firestore.settings(settings);
if(data && (typeof data === "object")){
    Object.keys(data).forEach(docKey=>{
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res)=>{
            console.log("Document "+docKey+ "successfully written!");
        }).catch((error)=>{
            console.error("Error writing document: ",error);
        });
    });
}