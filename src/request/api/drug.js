import request from "@/request/request";

export function chatMessageSendMessage(data) {
    return request({
        method: 'POST',
        url: 'chatMessage/sendMessage',
        data,
    })
}

export async function selectALlDrugNameAndDrugId(params) {
    return request({
        method: 'GET',
        url: 'drug/selectALlDrugNameAndDrugId',
        params,
    })
}