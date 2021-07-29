import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.NODE_ENV);

const today: Date = new Date();
const year = today.getFullYear(); // 년도
const month = ("0" + (today.getMonth() + 1)).slice(-2); // 월
const month2 = ("0" + today.getMonth()).slice(-2); // 전월
const date = ("0" + today.getDate()).slice(-2);
const yesterday = ("0" + (today.getDate() - 1)).slice(-2);

export const getToday: string = `${year}${month}${date}`;
export const getYesterday: string = `${year}${month}${yesterday}`;
export const lastMonth: string = `${year}${month2}${date}`;

const SERVICE_KEY: string | undefined = process.env.REACT_APP_SERVICE_KEY;

let queryParams = "?" + encodeURIComponent("ServiceKey") + "=" + SERVICE_KEY; /*Service Key*/
// queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* 페이지번호*/
// queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* 한 페이지 결과 수 */
queryParams += "&" + encodeURIComponent("startCreateDt") + "=" + encodeURIComponent(lastMonth); /* 검색할 생성일 시작 */
queryParams += "&" + encodeURIComponent("endCreateDt") + "=" + encodeURIComponent(getToday); /* 검색할 생성일 종료 */

const fetchAPI = async (url: string) => {
	return await axios({
		method: "GET",
		url: process.env.NODE_ENV === "development" ? `/openapi/service/rest/Covid19/${url + queryParams}` : `https://cors.bridged.cc/http://openapi.data.go.kr/openapi/service/rest/Covid19/${url + queryParams}`,
	})
		.then((response) => {
			const {
				data: {
					response: {
						body: {
							items: { item },
						},
					},
				},
			} = response;
			return item;
		})
		.catch((error) => console.log(error));
};

export const createPromiseThunk = (type: string) => {
	let name: string = "";
	switch (type) {
		case "OVERSEAS":
			name = "해외발생 현황";
			break;
		case "SIDOINFO":
			name = "시·도발생 현황";
			break;
		case "COVID19INFO":
			name = "감염 현황";
			break;
		case "GENAGECASEINFO":
			name = "연령별·성별감염 현황";
			break;
		default:
			return null;
	}

	return ({ url, setLoadingState }: { url: string; setLoadingState?: any }) =>
		async (dispatch: any): Promise<void> => {
			try {
				const payload = await fetchAPI(url);
				dispatch({ type: `${type}_SUCCESS`, payload });
				setLoadingState && setLoadingState(false);
				console.log(`${name}: ${type}`, payload);
			} catch (err) {
				console.log(err);
			}
		};
};
