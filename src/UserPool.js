import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_w49ZdZ86x",
    ClientId: "6rej8khfg5fb861f977hcdvqjq"
}


export default new CognitoUserPool(poolData);