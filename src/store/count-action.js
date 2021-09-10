import { countAction } from "./count-slice";

export const fetchCountData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.countapi.xyz/hit/heuristic-ardinghelli-129546.netlify.app/visits?key"
      );
      const data = await response.json();

      return data;
    };

    try {
      const countData = await fetchData();
      const count = await countData.value;
      dispatch(countAction.addCount(count));
    } catch (err) {
      console.log(err.message);
    }
  };
};
