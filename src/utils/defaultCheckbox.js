export default (formFormat) => {
    let defaultStatus = {}
    formFormat.forEach(item => {
        if ((item.type) === 'checkboxInput') defaultStatus[item.id] = false
    })
    return defaultStatus
}