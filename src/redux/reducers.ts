import { combineReducers } from "redux";
import overseasReducer from "./overseasReducer"; // 코로나19해외발생 현황 상세설명
import sidoInfoReducer from "./sidoInfoReducer"; // 코로나19 시·도발생 현황
import genAgeCaseInfoReducer from "./genAgeCaseInfoReducer"; // 코로나19 연령별·성별감염 현황
import covid19InfooReducer from "./covid19InfooReducer"; // 코로나19 감염 현황
const RootReducer = combineReducers({ overseasReducer, sidoInfoReducer, genAgeCaseInfoReducer, covid19InfooReducer });

export default RootReducer;
