import TBC_API from "../api/blogApi";

export const handleTokenRecaptcha = async (token: string) => {
    try {
        const response = await TBC_API.post('verify-recaptcha', { token });
        const data = response.data;

        if (response.status === 200) {
            return { status: 200, data: data.score };
        } else {
            return { status: response.status, error: data.errors };
        }
    } catch (error : any) {
        return { status: 500, error: error.message };
    }
};
