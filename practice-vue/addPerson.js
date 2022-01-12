function useAddPerson() {
    let state = Vue.reactive({
        persons: [{name: "kimzing", age: 18}]
    })
    function addPerson() {
        state.persons.push({name:"newPerson", age: 24})
    }
    return {state, addPerson}
}