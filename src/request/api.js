/**
 * api接口统一管理
 */
import { get } from "./http.js";

export const waterfall = (p) => get("/topic/v1/find/recManual.json", p);
