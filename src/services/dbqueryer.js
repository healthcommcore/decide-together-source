const firebase = require('firebase/app');
const firestore = require('firebase/firestore');
const firebaseConfig = require("../firebase.config.js");

const dbQueryer = ( () => {
  const firebaseApp = firebase.initializeApp(firebaseConfig.sandbox);
  const db = firestore.getFirestore(firebaseApp);
  const { doc, getDoc, query, collection, where, getDocs } = firestore;

  const filterParams = (params) => {
    const [
      age = process.env.DEFAULT_AGE,
      prior_screen = process.env.DEFAULT_OPTION,
      comorbidity = process.env.DEFAULT_OPTION,
      family_history = process.env.DEFAULT_OPTION,
      biopsy_history = process.env.DEFAULT_OPTION,
      density = process.env.DEFAULT_OPTION,
      modality = process.env.DEFAULT_MODALITY
    ] = params;
    return [
      age, prior_screen,
      comorbidity, family_history,
      biopsy_history, density,
      modality
    ];
  }

  const getResults = async (screeningFreq, ...params) => {
    const filteredParams = filterParams(params);
    const [
      age, prior_screen, 
      comorbidity, family_history,
      biopsy_history, density,
      modality
    ] = filteredParams;
    const q = query( 
      collection(db, screeningFreq), 
        where("age", "==", +age),
        where("prior_screen", "==", prior_screen),
        where("comorbidity", "==", comorbidity),
        where("family_history", "==", family_history),
        where("biopsy_history", "==", biopsy_history),
        where("density", "==", density),
        where("modality", "==", modality)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  return { getResults }

})();

export { dbQueryer };
