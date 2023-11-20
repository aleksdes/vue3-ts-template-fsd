/*
 * Generated type guards for "generatedClient.ts".
 * WARNING: Do not manually change this file.
 */
import { LoginDto, BannerDto, LoginSuccessfulResource, BannerResource, LoginCreateData, LogoutListData, BannersCreateData } from "./generatedClient";

function evaluate(
    isCorrect: boolean,
    varName: string,
    expected: string,
    actual: any
): boolean {
    if (!isCorrect) {
        console.error(
            `${varName} type mismatch, expected: ${expected}, found:`,
            actual
        )
    }
    return isCorrect
}

export function isLoginDto(obj: unknown, argumentName: string = "loginDto"): obj is LoginDto {
    const typedObj = obj as LoginDto
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(typeof typedObj["email"] === "string", `${argumentName}["email"]`, "string", typedObj["email"]) &&
        evaluate(typeof typedObj["password"] === "string", `${argumentName}["password"]`, "string", typedObj["password"])
    )
}

export function isBannerDto(obj: unknown, argumentName: string = "bannerDto"): obj is BannerDto {
    const typedObj = obj as BannerDto
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(typeof typedObj["name"] === "string", `${argumentName}["name"]`, "string", typedObj["name"]) &&
        evaluate(typeof typedObj["content"] === "string", `${argumentName}["content"]`, "string", typedObj["content"]) &&
        evaluate((typeof typedObj["date_start"] === "undefined" ||
            typeof typedObj["date_start"] === "string"), `${argumentName}["date_start"]`, "string | undefined", typedObj["date_start"]) &&
        evaluate((typeof typedObj["size"] === "undefined" ||
            typeof typedObj["size"] === "string"), `${argumentName}["size"]`, "string | undefined", typedObj["size"]) &&
        evaluate((typeof typedObj["color"] === "undefined" ||
            typeof typedObj["color"] === "string"), `${argumentName}["color"]`, "string | undefined", typedObj["color"]) &&
        evaluate((typeof typedObj["active"] === "undefined" ||
            typedObj["active"] === false ||
            typedObj["active"] === true), `${argumentName}["active"]`, "boolean | undefined", typedObj["active"]) &&
        evaluate((typeof typedObj["sort"] === "undefined" ||
            typeof typedObj["sort"] === "number"), `${argumentName}["sort"]`, "number | undefined", typedObj["sort"]) &&
        evaluate((typeof typedObj["date_end"] === "undefined" ||
            typeof typedObj["date_end"] === "string"), `${argumentName}["date_end"]`, "string | undefined", typedObj["date_end"])
    )
}

export function isLoginSuccessfulResource(obj: unknown, argumentName: string = "loginSuccessfulResource"): obj is LoginSuccessfulResource {
    const typedObj = obj as LoginSuccessfulResource
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typeof typedObj["token_type"] === "undefined" ||
            typeof typedObj["token_type"] === "string"), `${argumentName}["token_type"]`, "string | undefined", typedObj["token_type"]) &&
        evaluate((typeof typedObj["expires_in"] === "undefined" ||
            typeof typedObj["expires_in"] === "number"), `${argumentName}["expires_in"]`, "number | undefined", typedObj["expires_in"]) &&
        evaluate((typeof typedObj["access_token"] === "undefined" ||
            typeof typedObj["access_token"] === "string"), `${argumentName}["access_token"]`, "string | undefined", typedObj["access_token"]) &&
        evaluate((typeof typedObj["refresh_token"] === "undefined" ||
            typeof typedObj["refresh_token"] === "string"), `${argumentName}["refresh_token"]`, "string | undefined", typedObj["refresh_token"])
    )
}

export function isBannerResource(obj: unknown, argumentName: string = "bannerResource"): obj is BannerResource {
    const typedObj = obj as BannerResource
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typeof typedObj["id"] === "undefined" ||
            typeof typedObj["id"] === "number"), `${argumentName}["id"]`, "number | undefined", typedObj["id"]) &&
        evaluate((typeof typedObj["name"] === "undefined" ||
            typeof typedObj["name"] === "string"), `${argumentName}["name"]`, "string | undefined", typedObj["name"]) &&
        evaluate((typeof typedObj["content"] === "undefined" ||
            typeof typedObj["content"] === "string"), `${argumentName}["content"]`, "string | undefined", typedObj["content"]) &&
        evaluate((typeof typedObj["size"] === "undefined" ||
            typeof typedObj["size"] === "string"), `${argumentName}["size"]`, "string | undefined", typedObj["size"]) &&
        evaluate((typeof typedObj["color"] === "undefined" ||
            typeof typedObj["color"] === "string"), `${argumentName}["color"]`, "string | undefined", typedObj["color"])
    )
}

export function isLoginCreateData(obj: unknown, argumentName: string = "loginCreateData"): obj is LoginCreateData {
    const typedObj = obj as LoginCreateData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typeof typedObj["status"] === "undefined" ||
            typeof typedObj["status"] === "number"), `${argumentName}["status"]`, "number | undefined", typedObj["status"]) &&
        evaluate((typeof typedObj["success"] === "undefined" ||
            typedObj["success"] === false ||
            typedObj["success"] === true), `${argumentName}["success"]`, "boolean | undefined", typedObj["success"]) &&
        evaluate((typeof typedObj["data"] === "undefined" ||
            isLoginSuccessfulResource(typedObj["data"]) as boolean), `${argumentName}["data"]`, "import(\"./src/shared/api/generatedClient\").LoginSuccessfulResource | undefined", typedObj["data"])
    )
}

export function isLogoutListData(obj: unknown, argumentName: string = "logoutListData"): obj is LogoutListData {
    const typedObj = obj as LogoutListData
    return (
        true
    )
}

export function isBannersCreateData(obj: unknown, argumentName: string = "bannersCreateData"): obj is BannersCreateData {
    const typedObj = obj as BannersCreateData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typeof typedObj["status"] === "undefined" ||
            typeof typedObj["status"] === "number"), `${argumentName}["status"]`, "number | undefined", typedObj["status"]) &&
        evaluate((typeof typedObj["success"] === "undefined" ||
            typedObj["success"] === false ||
            typedObj["success"] === true), `${argumentName}["success"]`, "boolean | undefined", typedObj["success"]) &&
        evaluate((typeof typedObj["data"] === "undefined" ||
            isBannerResource(typedObj["data"]) as boolean), `${argumentName}["data"]`, "import(\"./src/shared/api/generatedClient\").BannerResource | undefined", typedObj["data"])
    )
}
