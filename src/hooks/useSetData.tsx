import { PuplesType } from "../types/puple";

export function useSetData({ puplesData, typeData }: { puplesData: PuplesType[] | null, typeData?: string }) {
    if (typeData === "GETDATA") {
        return localStorage.getItem("pupleData");
    } else if (typeData === "SETDATA") {
        return localStorage.setItem("pupleData", JSON.stringify(puplesData));
    } else if (typeData === "DELDATA") {
        return localStorage.removeItem("pupleData");
    }
}