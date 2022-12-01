<script setup lang="ts">
defineEmits([ 'change' ])
let a: number
a = 1
if(a === 1) {console.log(123)}

const f = (a: any)=>console.log(a)
f(123)

const arr = [ 1, 2, 3 ]
console.log(arr)

const ob = { a:1, b:'2' }
console.log(ob)

const fu = function (an:string) {
  console.log(an)
}
fu('aaa')

</script>

<template>
  <a-switch />
  <button />
</template>

<style scoped></style>
