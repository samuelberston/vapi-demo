import { Vapi, VapiClient } from '@vapi-ai/server-sdk';
import dotenv from 'dotenv';
dotenv.config();

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VAPI_PRIVATE_KEY: string;
            VAPI_PUBLIC_KEY: string;
            ASSISTANT_ID_MARY: string;
        }
    }
}

const vapiClient = new VapiClient({ token: process.env.VAPI_PRIVATE_KEY });

const callsListRequest: Vapi.CallsListRequest = {
    assistantId: process.env.ASSISTANT_ID_MARY,
    limit: 10,
};

async function fetchCalls() {
    const callsListResponse = await vapiClient.calls.list(callsListRequest);
    console.log(callsListResponse);
    return callsListResponse;
}

fetchCalls();