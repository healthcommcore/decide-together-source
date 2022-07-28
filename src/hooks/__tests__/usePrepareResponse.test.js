import usePrepareResponse from '../usePrepareResponse';

it('should return the same name and value when the event object has no dataset prop', () => {
  const e = {
    target: {
      name: "name",
      value: "value",
    }
  };
  const prepareResp = usePrepareResponse();
  const result = prepareResp(e);
  expect(result.name).toEqual(e.target.name);
  expect(result.value).toEqual(e.target.value);
});

it('should return a new truncated name when given a matching datasetProp arg', () => {
  const datasetProp = "tomatch";
  const nameToCompare = "name_to_compare";
  const e = {
    target: {
      name: "name_to_compare_untruncated",
      value: "value",
      dataset: { tomatch: true }
    }
  };
  const prepareResp = usePrepareResponse(datasetProp);
  const result = prepareResp(e);
  expect(result.name).toEqual(nameToCompare);
  expect(result.value).toEqual(e.target.value);
});
