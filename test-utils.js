const describe = (description, callback) => {
    console.log(description)
    callback()
}

const it = (msg, fn) => {
    describe(` ${msg}`, fn)
}

const matchers = (expected) => ({
    toBe: (assertion) => {
        if(expected === assertion){
            console.log('pass')
            return true
        }

        console.log('fail')
        return false
    }
})

const expect = (exp) => matchers(exp)

module.exports = {
    describe,
    it,
    expect,
    matchers
}