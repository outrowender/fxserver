export function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export const f = (value: number) => (value + 0.00001)

export const print = (value: string): string => {
    console.log(value)
    TriggerEvent('chat:addMessage', {
        templateId: 'print',
        multiline: true,
        args: [value]
    })
    return value
}