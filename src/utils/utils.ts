import { SignInResponse, SignInSuccessResponse } from "@react-native-google-signin/google-signin";
import { AuthObject } from "../types/authType";

export function mapSignInResponseToAuthObject(signInResponse: SignInResponse): AuthObject {
    const auth = signInResponse as SignInSuccessResponse;
    return {
        id: auth.data.user.id,
        email: auth.data.user.email,
        name: auth.data.user.name,
    };
}