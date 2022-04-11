import { actionConsts } from "../definitions/actionConsts";

export const addError = (message) =>
    ({
        type: actionConsts.Test,
        payload: message
    })
