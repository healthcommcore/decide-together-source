const usePrepareResponse = (datasetProp) => {
  return (e)=> {
    const { name, value, dataset } = e.target;
    if ( datasetProp && dataset.hasOwnProperty(datasetProp) ) {
      const newName = name.split('_').slice(0,-1).join('_');
      return { name: newName, value }
    }
    return { name, value };
  };
}

export default usePrepareResponse;
