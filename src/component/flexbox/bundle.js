function changeAttribute(source, target) {
    const container = document.getElementsByClassName(target)[0]
    const classList = container.classList
    for (let child of source.children) {
        if (!child.value) continue
        classList.remove(child.value)
    }
    if (source.value) {
        classList.add(source.value)
    }
}
