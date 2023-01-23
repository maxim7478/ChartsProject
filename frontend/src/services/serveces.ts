import $axios from "@/services/api";

export function apiFunctions () {
    const getCurrency = async () => {
        const path = "api/v3/exchangeInfo";
        const result = await $axios.get(path, );
		return result;
    };
    return {
        getCurrency
    }
};