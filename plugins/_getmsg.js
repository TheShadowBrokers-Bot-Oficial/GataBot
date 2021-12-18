module.exports = {
    async all(m) {
        if (m.chat.endsWith('broadcast')) return
        if (global.DATABASE._data.chats[m.chat].isBanned) return
        if (global.DATABASE._data.users[m.sender].banned) return
        if (m.isBaileys) return
        let mensaje = global.DATABASE._data.memsaje
        if (!(m.text in mensaje)) return
        let _m = conn.serializeM(JSON.parse(JSON.stringify(mensaje[m.text]), (_, v) => {
            if (
                v !== null &&
                typeof v === 'object' &&
                'type' in v &&
                v.type === 'Buffer' &&
                'data' in v &&
                Array.isArray(v.data)) {
                return Buffer.from(v.data)
            }
            return v
        }))
        await _m.copyNForward(m.chat, true)
    }
}
